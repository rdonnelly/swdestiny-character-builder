#!/usr/bin/env node

import * as _ from 'lodash';
import jsonfile from 'jsonfile';
import path from 'path';
import { cards } from '../src/lib/Destiny';

const MIN_DICE = 0;
const MIN_POINTS = 0;
const MAX_POINTS = 30;

let teams = [];

class Team {
  constructor() {
    this.characters = [];
    this.affiliation = null;
    this.damageTypes = [];
    this.factions = [];
    this.health = 0;
    this.numDice = 0;
    this.points = 0;
  }

  getCharacterIds() {
    return this.characters.map(character => character.id).sort();
  }

  hasCharacter(card) {
    return this.characters
      .some(characterCard => characterCard.name === card.name);
  }

  addCharacter(card, isElite) {
    this.characters.push({
      id: card.id,
      name: card.name,
      isElite,
    });

    this.characters = this.characters.sort((a, b) => a.id - b.id);

    this.affiliation = card.affiliation;

    this.health += card.health;

    this.factions.push(card.faction);
    this.factions = _.uniq(this.factions);

    this.damageTypes = _.uniq([].concat(this.damageTypes, card.sides.reduce((acc, val) => {
      if (val.includes('MD')) {
        acc.push('melee');
      }

      if (val.includes('RD')) {
        acc.push('range');
      }

      return acc;
    }, [])));

    if (isElite) {
      this.numDice += 2;
      this.points += card.pointsElite;
    } else {
      this.numDice += 1;
      this.points += card.pointsRegular;
    }
  }
}

const teamBuilder = (chars, pointsLeft, team) => {
  const eligibleCharacters = chars
    .filter(character => character.pointsRegular <= pointsLeft)
    .filter(character => !character.isUnique || !team.hasCharacter(character));

  if (eligibleCharacters.length === 0 &&
      team.numDice >= MIN_DICE &&
      team.points >= MIN_POINTS) {
    teams.push(team);
  }

  eligibleCharacters.forEach((character) => {
    const regularTeam = _.cloneDeep(team);
    regularTeam.addCharacter(character, false);
    teamBuilder(eligibleCharacters, pointsLeft - character.pointsRegular, regularTeam);

    if (typeof character.pointsElite !== 'undefined' &&
        character.pointsElite <= pointsLeft) {
      const eliteTeam = _.cloneDeep(team);
      eliteTeam.addCharacter(character, true);
      teamBuilder(eligibleCharacters, pointsLeft - character.pointsElite, eliteTeam);
    }
  });
};

const characterCards = cards.toList().toJS()
  .filter(card => card.type === 'character');

const heroes = characterCards.filter(character => character.affiliation === 'hero');
teamBuilder(heroes, MAX_POINTS, new Team());

const villains = characterCards.filter(character => character.affiliation === 'villain');
teamBuilder(villains, MAX_POINTS, new Team());

teams = teams.sort((a, b) => b.points - a.points);

teams = _.uniqBy(teams, team => JSON.stringify(team.getCharacterIds()));

console.log(`Output ${teams.length} teams...`);
jsonfile.writeFile(path.join(__dirname, '../data/teams.json'), teams, err => console.error(err));