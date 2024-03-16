import {StyleSheet} from 'react-native';
import {ThemeColorType} from '../../../utils/typesUtils';

export const styles = (colors: ThemeColorType) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.blackColor,
      alignItems: 'center',
    },
    container: {
      flex: 1,
      marginHorizontal: 16,
    },
    item: {
      backgroundColor: colors.whiteColor,
      flexDirection: 'row',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      alignItems: 'center',
    },
    icon: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 20,
    },
    text: {
      color: colors.primaryTextColor,
      fontWeight: 'bold',
      flexShrink: 1,
    },
    loaderBox: {
      width: 100,
      height: 100,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.whiteColor,
    },
    loaderContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorText: {
      color: 'red',
      textAlign: 'center',
    },
  });
