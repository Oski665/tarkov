import {Dimensions, StyleSheet} from 'react-native';
import {ThemeColorType} from '../../utils/typesUtils';

export const styles = (colors: ThemeColorType) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.blackColor,
    },
    container: {
      marginVertical: 30,
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    row: {
      alignItems: 'center',
      width: (Dimensions.get('window').width - 40) / 3,
    },
    headerText: {
      color: colors.whiteColor,
      fontSize: 48,
      fontWeight: '700',
      letterSpacing: -0.02,
    },
    button: {
      alignItems: 'center',
      width: '80%',
      borderRadius: 30,
      borderWidth: 2.5,
      borderColor: colors.whiteColor,
      paddingHorizontal: 20,
      paddingVertical: 15,
    },
    buttonText: {
      color: colors.whiteColor,
      fontSize: 24,
      fontWeight: '700',
      letterSpacing: -0.02,
    },
  });
