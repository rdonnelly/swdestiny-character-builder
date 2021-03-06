import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { withNavigation } from 'react-navigation';

import CharacterAvatar from './CharacterAvatar';
import SWDIcon from './SWDIcon';

import { characters } from '../lib/Destiny';

import { colors } from '../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.lightGrayDark,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  teamWrapper: {
    flex: 1,
  },
  teamCharactersWrapper: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 8,
  },
  characterWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 2,
  },
  avatarWrapper: {
    marginRight: 4,
  },
  characterName: {
    color: colors.darkGray,
    fontSize: 18,
    fontWeight: '400',
  },
  characterCount: {
    color: colors.gray,
    fontSize: 16,
  },
  blueCard: {
    color: colors.cardBlue,
  },
  redCard: {
    color: colors.cardRed,
  },
  yellowCard: {
    color: colors.cardYellow,
  },
  diceWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 4,
  },
  dice: {
    color: colors.gray,
    fontSize: 12,
    marginTop: 1,
  },
  teamInfoWrapper: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  teamStat: {
    color: colors.gray,
    fontSize: 13,
    fontWeight: '500',
    marginRight: 6,
  },
  arrow: {
    color: colors.gray,
    marginTop: 2,
  },
});

class TeamListItem extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.teamObject === nextProps.teamObject) {
      return false;
    }

    return true;
  }

  navigateToTeamDetails = (teamKey) => () => {
    this.props.navigation.navigate('TeamDetailScreen', { key: teamKey });
  };

  render() {
    const { teamObject } = this.props;

    const arrowStyle = [styles.arrow];

    const characterViews = teamObject.key
      .split('____')
      .pop()
      .split('___')
      .shift()
      .split('__')
      .map((characterKey) => {
        const [cardId, diceCount, count] = characterKey.split('_');
        const card = characters[cardId];

        const characterNameStyles = [styles.characterName];
        const diceStyles = [styles.dice];
        const characterCountStyles = [styles.characterCount];

        if (card.faction === 'blue') {
          diceStyles.push(styles.blueCard);
          characterCountStyles.push(styles.blueCard);
        }
        if (card.faction === 'red') {
          diceStyles.push(styles.redCard);
          characterCountStyles.push(styles.redCard);
        }
        if (card.faction === 'yellow') {
          diceStyles.push(styles.yellowCard);
          characterCountStyles.push(styles.yellowCard);
        }

        const avatar = (
          <View style={styles.avatarWrapper}>
            <CharacterAvatar cardId={card.id} round={true} size={22} />
          </View>
        );

        const diceIcons = [];
        for (let i = 0; i < diceCount; i += 1) {
          diceIcons.push(
            <SWDIcon
              key={`${teamObject.key}___${cardId}___${i}`}
              style={diceStyles}
              type={'DIE'}
            />,
          );
        }

        return (
          <View
            key={`${teamObject.key}___${cardId}`}
            style={styles.characterWrapper}
          >
            {avatar}
            <Text style={characterNameStyles}>{card.name}</Text>
            <View style={styles.diceWrapper}>{diceIcons}</View>
            <Text style={characterCountStyles}>
              {count > 1 ? ` x${count}` : ''}
            </Text>
          </View>
        );
      });

    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={this.navigateToTeamDetails(teamObject.key)}
        style={styles.container}
        underlayColor={colors.lightGray}
      >
        <View style={styles.teamWrapper}>
          <View style={styles.teamCharactersWrapper}>{characterViews}</View>
          <View style={styles.teamInfoWrapper}>
            <Text style={styles.teamStat}>{teamObject.diceCount} Dice</Text>
            <Text style={styles.teamStat}>&middot;</Text>
            <Text style={styles.teamStat}>{teamObject.health} Health</Text>
            <Text style={styles.teamStat}>&middot;</Text>
            <Text style={styles.teamStat}>{teamObject.points} Points</Text>
          </View>
        </View>
        <View>
          <FontAwesome5Icon
            name={'chevron-right'}
            size={16}
            style={arrowStyle}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

TeamListItem.propTypes = {
  teamObject: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default withNavigation(TeamListItem);
