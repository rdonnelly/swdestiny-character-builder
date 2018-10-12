import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Slider,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from '../styles';


const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    width: '100%',
  },
  labelContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    color: colors.darkGray,
    fontSize: 20,
    fontWeight: '800',
  },
  value: {
    color: colors.brand,
    fontSize: 20,
    fontWeight: '600',
  },
});

class SettingsSlider extends PureComponent {
  static defaultProps = {
    value: 0,
  };

  state = {
    timeoutId: null,
    value: this.props.value,
    initValue: this.props.value,
  };

  constructor(props) {
    super(props);

    this.onValueChange = this.onValueChange.bind(this);
    this.onSlidingComplete = this.onSlidingComplete.bind(this);
  }

  onValueChange(value) {
    if (this.state.timeoutId) {
      clearTimeout(this.state.timeoutId);
    }

    const timeoutId = setTimeout(() => {
      this.props.callback(this.props.setting, value);
    }, 750);

    this.setState({ timeoutId, value });
  }

  onSlidingComplete(value) {
    if (this.state.timeoutId) {
      clearTimeout(this.state.timeoutId);
    }

    this.setState({ timeoutId: null });

    this.props.callback(this.props.setting, value);
  }

  reset() {
    if (this.state.timeoutId) {
      clearTimeout(this.state.timeoutId);
    }

    this.setState({
      timeoutId: null,
      value: this.state.initValue,
    });
  }

  render() {
    const { reverse } = this.props;

    return (
      <View style={ styles.container }>
        <View style={ styles.labelContainer }>
          <Text style={ styles.label }>
            { this.props.label }
          </Text>
          <Text style={ styles.value }>
            { this.state.value }
          </Text>
        </View>
        <Slider
          minimumTrackTintColor={ reverse ? colors.gray : colors.purple }
          maximumTrackTintColor={ reverse ? colors.purple : colors.gray }
          value={ this.state.value }
          minimumValue={ this.props.minValue }
          maximumValue={ this.props.maxValue }
          step={ 1 }
          onValueChange={ this.onValueChange }
          onSlidingComplete={ this.onSlidingComplete }
        />
      </View>
    );
  }
}

export default SettingsSlider;

SettingsSlider.propTypes = {
  value: PropTypes.number.isRequired,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,

  setting: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,

  reverse: PropTypes.bool,

  callback: PropTypes.func.isRequired,
};
