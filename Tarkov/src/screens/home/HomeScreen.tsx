import React, {useContext} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {ThemeContext} from '../../providers/ThemeProvider';
import {MainStackParamList} from '../../navigators/MainNavigator';

import {styles} from './HomeScreenStyles';
import {Bullets, Equipment, Meds, Weapon} from '../../components/Icons';

interface Item {
  id: string;
  title: string;
  screen: string;
  Icon: React.ElementType;
}

const HomeScreen: React.FC = () => {
  const {colors} = useContext(ThemeContext);
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

  const data: Item[] = [
    {id: '1', title: 'Weapon', screen: 'WeaponsScreen', Icon: Weapon},
    {id: '2', title: 'Ammunition', screen: 'AmmoScreen', Icon: Bullets},
    {id: '3', title: 'Equipment', screen: 'GearScreen', Icon: Equipment},
    {id: '4', title: 'Medicines', screen: 'MedicScreen', Icon: Meds},
    //TODO
    // {id: '3', title: 'Tasks', screen: 'TasksScreen'},
    // {id: '6', title: 'Food and drinks', screen: 'FoodAndWaterScreen'},
    // {id: '7', title: 'Keys', screen: 'KeysScreen'},
  ];

  return (
    <View style={styles(colors).safeArea}>
      <View style={styles(colors).container}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles(colors).card}
              onPress={() => navigation.navigate(item.screen)}>
              <item.Icon />
              <Text style={styles(colors).cardText}>{item.title}</Text>
            </TouchableOpacity>
          )}
          numColumns={2}
          columnWrapperStyle={styles(colors).columnWrapper}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
