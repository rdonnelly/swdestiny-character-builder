import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Slider,
  StyleSheet,
  Text,
  View,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    width: '100%',
  },
  label: {
    color: 'rgba(52, 73, 94, 1.0)',
    fontSize: 18,
    fontWeight: '700',
  },
  value: {
    color: 'rgba(52, 73, 94, 1.0)',
    fontSize: 18,
  },
});

class SettingsSlider extends PureComponent {
  static defaultProps = {
    value: 0,
  };

  state = {
    timeoutId: null,
    value: this.props.value,
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

  render() {
    return (
      <View style={ styles.container }>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <Text style={ styles.label }>
            { this.props.label }
          </Text>
          <Text style={ styles.value }>
            { this.state.value }
          </Text>
        </View>
        <Slider
          minimumTrackTintColor={ 'rgba(149, 165, 166, 1.0)' }
          maximumTrackTintColor={ 'rgba(155, 89, 182, 1.0)' }
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

  callback: PropTypes.func.isRequired,
};
