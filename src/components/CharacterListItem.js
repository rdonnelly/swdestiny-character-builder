import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import SWDIcon from '../components/SWDIcon';

import { characterCards } from '../lib/Destiny';


const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(189, 195, 199, 1.0)',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  incompatibleRow: {
    borderColor: 'rgba(189, 195, 199, 1.0)',
    paddingVertical: 6,
  },
  cardLogo: {
    color: 'rgba(189, 195, 199, 1.0)',
    fontSize: 24,
    textAlign: 'center',
    width: 36,
  },
  incompatibleCardLogo: {
    color: 'rgba(189, 195, 199, 1.0)',
    fontSize: 20,
    paddingHorizontal: 2,
  },
  cardName: {
    color: 'rgba(52, 73, 94, 1.0)',
    fontSize: 20,
  },
  incompatibleCardName: {
    color: 'rgba(189, 195, 199, 1.0)',
    fontSize: 16,
  },
  cardUnique: {
    color: 'rgba(149, 165, 166, 1.0)',
    fontSize: 16,
  },
  incompatibleCardUnique: {
    color: 'rgba(189, 195, 199, 1.0)',
  },
  cardInfo: {
    color: 'rgba(149, 165, 166, 1.0)',
    fontSize: 13,
    fontWeight: '500',
  },
  incompatibleCardInfo: {
    color: 'rgba(189, 195, 199, 1.0)',
    fontSize: 12,
  },
  cardInfoLogo: {
    color: 'rgba(149, 165, 166, 1.0)',
    fontSize: 10,
  },
  incompatibleCardInfoLogo: {
    color: 'rgba(189, 195, 199, 1.0)',
  },
  blueCard: {
    color: 'rgba(52, 152, 219, 1.0)',
  },
  redCard: {
    color: 'rgba(231, 76, 60, 1.0)',
  },
  yellowCard: {
    color: 'rgba(241, 196, 15, 1.0)',
  },
  arrow: {
    color: 'rgba(149, 165, 166, 1.0)',
    marginTop: 2,
  },
  arrowIncompatible: {
    color: 'rgba(189, 195, 199, 1.0)',
  },
});

class CharacterListItem extends Component {
  shouldComponentUpdate(nextProps) {
    if (!this.props.characterObject.equals(nextProps.characterObject)) {
      return true;
    }

    return false;
  }

  render() {
    const { characterObject } = this.props;
    const card = characterCards.find(characterCard => characterCard.id === characterObject.get('id'));

    const rowStyle = [styles.row];
    const cardLogoStyle = [styles.cardLogo];
    const cardNameStyle = [styles.cardName];
    const cardUniqueStyle = [styles.cardUnique];
    const cardInfoStyle = [styles.cardInfo];
    const cardInfoLogoStyle = [styles.cardInfoLogo];
    const arrowStyle = [styles.arrow];

    if (characterObject.get('isCompatibile')) {
      if (card.faction === 'blue') {
        cardLogoStyle.push(styles.blueCard);
      }
      if (card.faction === 'red') {
        cardLogoStyle.push(styles.redCard);
      }
      if (card.faction === 'yellow') {
        cardLogoStyle.push(styles.yellowCard);
      }
    } else {
      rowStyle.push(styles.incompatibleRow);
      cardLogoStyle.push(styles.incompatibleCardLogo);
      cardNameStyle.push(styles.incompatibleCardName);
      cardUniqueStyle.push(styles.incompatibleCardUnique);
      cardInfoStyle.push(styles.incompatibleCardInfo);
      cardInfoLogoStyle.push(styles.incompatibleCardInfoLogo);
      arrowStyle.push(styles.arrowIncompatible);
    }

    const setIcon = (
      <SWDIcon type={ card.set } font={ 'swdestiny' } style={ cardInfoLogoStyle } />
    );

    const subtitle = card.subtitle ? (
      <Text style={ cardInfoStyle }>{ card.subtitle }</Text>
    ) : null;

    const points = card.points ? (
      <Text style={ cardInfoStyle }>{ card.points.join('/') }</Text>
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
      <SWDIcon type={ 'UNIQUE' } font={ 'swdestiny' } style={ cardUniqueStyle } />
    ) : null;

    return (
      <TouchableHighlight
        activeOpacity={ 0.6 }
        underlayColor={ 'rgba(236, 240, 241, 1.0)' }
        onPress={ () => this.props.navigate('CharacterDetailScreen', { id: characterObject.get('id') }) }
      >
        <View style={ rowStyle }>
          <View>
            <SWDIcon type={ 'CHARACTER' } font={ 'swdestiny' } style={ cardLogoStyle } />
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
    );
  }
}

export default CharacterListItem;

CharacterListItem.propTypes = {
  characterObject: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
};
