import {
  affiliations as affiliationsList,
  factions as factionsList,
  damageTypes as damageTypesList,
  sets as setsList,
} from '../lib/Destiny';

export const filterTeamsByDeck = (teams, deckCharacters, deckAffiliation) => {
  let outputTeams = teams;

  deckCharacters.forEach((deckCharacterObject) => {
    const numDice = deckCharacterObject.get('numDice');
    const characterKey = `${deckCharacterObject.get('id')}_${numDice}_${deckCharacterObject.get('count')}`;
    const regularCharacterKey = `${deckCharacterObject.get('id')}_1_${deckCharacterObject.get('count')}`;
    const eliteCharacterKey = `${deckCharacterObject.get('id')}_2_${deckCharacterObject.get('count')}`;

    outputTeams = outputTeams.filter((team) => {
      if (deckAffiliation !== 'neutral' && !team.get('a').includes(deckAffiliation)) {
        return false;
      }

      if (numDice === 0) {
        return team.get('cK').includes(regularCharacterKey) ||
          team.get('cK').includes(eliteCharacterKey);
      }

      return team.get('cK').includes(characterKey);
    });
  });

  return outputTeams;
};

export const filterTeamsBySettings = (teams, settings) => {
  let outputTeams = teams;
  const minDice = settings.getIn(['filters', 'minDice']);
  const minHealth = settings.getIn(['filters', 'minHealth']);
  const minPoints = settings.getIn(['filters', 'minPoints']);
  const minCharacterCount = settings.getIn(['filters', 'minCharacterCount']);
  let affiliations = settings.getIn(['filters', 'affiliations']);
  let factions = settings.getIn(['filters', 'factions']);
  let damageTypes = settings.getIn(['filters', 'damageTypes']);
  let sets = settings.getIn(['filters', 'sets']);

  if (affiliations.count() >= affiliationsList.length) {
    affiliations = null;
  }

  if (factions.count() >= factionsList.length) {
    factions = null;
  }

  if (damageTypes.count() >= damageTypesList.length) {
    damageTypes = null;
  }

  if (sets.count() >= setsList.length) {
    sets = null;
  }

  outputTeams = outputTeams.filter((team) => {
    if (team.get('nD') < minDice) {
      return false;
    }

    if (team.get('h') < minHealth) {
      return false;
    }

    if (team.get('p') < minPoints) {
      return false;
    }

    if (team.get('cC') < minCharacterCount) {
      return false;
    }

    if (affiliations && !team.get('a').isSubset(affiliations)) {
      return false;
    }

    if (damageTypes && !team.get('dT').isSubset(damageTypes)) {
      return false;
    }

    if (factions && !team.get('f').isSubset(factions)) {
      return false;
    }

    if (sets && !team.get('s').isSubset(sets)) {
      return false;
    }

    return true;
  });

  return outputTeams;
};

export const sortTeams = (teams, sortOrder) =>
  teams.sort((a, b) => {
    const sortValues = {
      dice: b.get('rD') - a.get('rD'),
      health: b.get('rH') - a.get('rH'),
      points: b.get('rP') - a.get('rP'),
      characterCount: b.get('rC') - a.get('rC'),
    };

    let sortValue = 0;
    sortOrder.every((sortKey) => {
      if (sortValues[sortKey] !== 0) {
        sortValue = sortValues[sortKey];
        return false;
      }

      return true;
    });

    return sortValue;
  });
