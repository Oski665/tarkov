import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {ThemeContext} from '../../providers/ThemeProvider';
import {MainStackParamList} from '../../navigators/MainNavigator';

import {styles} from './WelcomeScreenStyles';

const WelcomeScreen: React.FC = () => {
  const {colors} = useContext(ThemeContext);
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

  const _handleNextPress = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles(colors).safeArea}>
      <View style={styles(colors).container}>
        <Text style={styles(colors).headerText}>Tarkov</Text>
        <TouchableOpacity style={styles(colors).button}>
          <Text style={styles(colors).buttonText} onPress={_handleNextPress}>
            Escape
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
