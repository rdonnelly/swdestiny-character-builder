import { StyleSheet } from 'react-native';

import colors from './colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
  },

  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  // FORM ELEMENTS

  button: {
    alignItems: 'center',
    backgroundColor: colors.brand,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    minWidth: 48,
    padding: 12,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    textAlign: 'center',
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 0,
    color: colors.darkGray,
    fontSize: 20,
    lineHeight: 24,
    padding: 12,
  },

  // COMPONENTS

  floatingControls: {
    backgroundColor: colors.darkGrayTranslucent95,
    bottom: 0,
    left: 0,
    padding: 12,
    position: 'absolute',
    right: 0,
    zIndex: 1000,
  },

  headerIconContainer: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  headerIcon: {
    color: colors.white,
  },
});
