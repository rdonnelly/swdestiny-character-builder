import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import Swipeable from 'react-native-swipeable';

import CharacterAvatar from './CharacterAvatar';
import { validateIcon } from '../lib/swd-icons';
import SWDIcon from './SWDIcon';

import { colors } from '../styles';

import {
  includeCharacter,
  excludeCharacter,
} from '../store/actions';
import { characters } from '../lib/Destiny';

export const ITEM_HEIGHT = 72;

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: colors.lightGray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.lightGrayDark,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: ITEM_HEIGHT,
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  excludedRow: {
    borderLeftColor: colors.orange,
  },
  incompatibleRow: {
    borderLeftColor: colors.gray,
  },
  cardAvatarWrapper: {
    alignItems: 'center',
    marginRight: 10,
    width: 42,
  },
  incompatibleCardAvatarWrapper: {
    opacity: 0.4,
  },
  cardName: {
    color: colors.darkGray,
    fontSize: 20,
  },
  incompatibleCardName: {
    color: colors.lightGrayDark,
  },
  cardUnique: {
    color: colors.gray,
    fontSize: 16,
  },
  incompatibleCardUnique: {
    color: colors.lightGrayDark,
  },
  cardInfo: {
    color: colors.gray,
    fontSize: 13,
    fontWeight: '500',
  },
  incompatibleCardInfo: {
    color: colors.lightGrayDark,
  },
  cardInfoLogo: {
    color: colors.gray,
    fontSize: 10,
  },
  incompatibleCardInfoLogo: {
    color: colors.lightGrayDark,
  },
  arrow: {
    color: colors.gray,
    marginTop: 2,
  },
  arrowIncompatible: {
    color: colors.lightGrayDark,
  },
  rightSwipeItem: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 12,
  },
  rightSwipeItemText: {
    color: colors.white,
  },
});

class CharacterListItem extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.characterId === nextProps.characterId &&
        this.props.characterIsExcluded === nextProps.characterIsExcluded &&
        this.props.characterIsIncompatible === nextProps.characterIsIncompatible) {
      return false;
    }

    return true;
  }

  render() {
    const {
      characterId,
      characterIsExcluded,
      characterIsIncompatible,
      onOpen,
      onClose,
    } = this.props;
    const card = characters[characterId];

    const rowStyles = [styles.row];
    const cardAvatarStyles = [styles.cardAvatarWrapper];
    const cardNameStyle = [styles.cardName];
    const cardUniqueStyle = [styles.cardUnique];
    const cardInfoStyle = [styles.cardInfo];
    const cardInfoLogoStyle = [styles.cardInfoLogo];
    const arrowStyle = [styles.arrow];

    if (characterIsIncompatible || characterIsExcluded) {
      rowStyles.push(styles.incompatibleRow);
      cardAvatarStyles.push(styles.incompatibleCardAvatarWrapper);
      cardNameStyle.push(styles.incompatibleCardName);
      cardUniqueStyle.push(styles.incompatibleCardUnique);
      cardInfoStyle.push(styles.incompatibleCardInfo);
      cardInfoLogoStyle.push(styles.incompatibleCardInfoLogo);
      arrowStyle.push(styles.arrowIncompatible);
    }

    if (characterIsExcluded) {
      rowStyles.push(styles.excludedRow);
    }

    const setIcon = validateIcon(card.set) ? (
      <SWDIcon type={ card.set } style={ cardInfoLogoStyle } />
    ) : null;

    const subtitle = card.subtitle ? (
      <Text style={ cardInfoStyle }>{ card.subtitle }</Text>
    ) : null;

    const pointsArray = [card.pointsRegular];
    if (card.pointsElite) {
      pointsArray.push(card.pointsElite);
    }
    const points = pointsArray ? (
      <Text style={ cardInfoStyle }>{ pointsArray.join('/') }</Text>
    ) : null;

    const cardInfo = (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        { setIcon &&
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            { setIcon }
            <Text style={ cardInfoStyle }>&nbsp;</Text>
          </View>
        }
        { subtitle &&
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            { subtitle }
            <Text style={ cardInfoStyle }>&nbsp;&middot;&nbsp;</Text>
          </View>
        }
        { points &&
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            { points }
          </View>
        }
      </View>
    );

    const uniqueIcon = card.isUnique ? (
      <SWDIcon type={ 'UNIQUE' } style={ cardUniqueStyle } />
    ) : null;

    const avatar = (
      <View style={ cardAvatarStyles }>
        <CharacterAvatar
          cardId={ characterId }
          round={ true }
          size={ StyleSheet.flatten(styles.cardAvatarWrapper).width }
        />
      </View>
    );

    const rightButtons = characterIsExcluded ? [
      <TouchableHighlight
        activeOpacity={ 0.9 }
        style={[styles.rightSwipeItem, { backgroundColor: colors.orange }]}
        underlayColor={ colors.orangeDark }
        onPress={ () => {
          this.swipeable.recenter();
          setTimeout(() => {
            this.props.includeCharacter(characterId);
          }, 250);
        } }
      >
        <Text style={ styles.rightSwipeItemText }>Include</Text>
      </TouchableHighlight>,
    ] : [
      <TouchableHighlight
        activeOpacity={ 0.9 }
        style={[styles.rightSwipeItem, { backgroundColor: colors.orange }]}
        underlayColor={ colors.orangeDark }
        onPress={ () => {
          this.swipeable.recenter();
          setTimeout(() => {
            this.props.excludeCharacter(characterId);
          }, 250);
        } }
      >
        <Text style={ styles.rightSwipeItemText }>Exclude</Text>
      </TouchableHighlight>,
    ];

    return (
      <Swipeable
        rightButtons={ rightButtons }
        onRef={ (component) => { this.swipeable = component; } }
        onRightButtonsOpenRelease={ onOpen }
        onRightButtonsCloseRelease={ onClose }
      >
        <TouchableHighlight
          activeOpacity={ 0.4 }
          underlayColor={ colors.lightGray }
          onPress={ () => this.props.navigate(characterId) }
        >
          <View style={ rowStyles }>
            <View>
              { avatar }
            </View>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={ cardNameStyle }>{ card.name }</Text>
                <Text style={ cardNameStyle }>&nbsp;</Text>
                <Text style={ cardNameStyle }>{ uniqueIcon }</Text>
              </View>
              { cardInfo }
            </View>
            <View>
              <Icon name={ 'chevron-right' } size={ 20 } style={ arrowStyle } />
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    );
  }
}

CharacterListItem.propTypes = {
  characterId: PropTypes.string.isRequired,
  characterIsExcluded: PropTypes.bool,
  characterIsIncompatible: PropTypes.bool,
  navigate: PropTypes.func.isRequired,

  includeCharacter: PropTypes.func.isRequired,
  excludeCharacter: PropTypes.func.isRequired,

  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  includeCharacter,
  excludeCharacter,
};

export default connect(null, mapDispatchToProps)(CharacterListItem);
