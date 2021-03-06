import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Switch, Text, View } from 'react-native';

import { colors } from '../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    width: '100%',
  },
  label: {
    color: colors.darkGray,
    fontSize: 20,
    fontWeight: '800',
  },
});

class SettingsSwitch extends PureComponent {
  static defaultProps = {
    value: true,
  };

  state = {
    value: this.props.value,
  };

  handleValueChange = (value) => {
    if (this.state.timeoutId) {
      clearTimeout(this.state.timeoutId);
    }

    const timeoutId = setTimeout(() => {
      this.props.callback(this.props.setting, value);
      this.setState({ timeoutId: null });
    }, 750);

    this.setState({ timeoutId, value });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.label}</Text>
        <Switch
          onTintColor={colors.purple}
          value={!!this.state.value}
          onValueChange={this.handleValueChange}
        />
      </View>
    );
  }
}

export default SettingsSwitch;

SettingsSwitch.propTypes = {
  value: PropTypes.bool.isRequired,

  setting: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,

  callback: PropTypes.func,
};
