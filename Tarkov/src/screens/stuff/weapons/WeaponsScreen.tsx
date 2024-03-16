import React, {useContext} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {ThemeContext} from '../../../providers/ThemeProvider';
import {MainStackParamList} from '../../../navigators/MainNavigator';

import {styles} from './WeaponsScreenStyles';
import {useQuery} from '@apollo/client';
import {GET_GUNS_QUERY} from '../../../graphql/queries';

const WeaponScreen: React.FC = () => {
  const {colors} = useContext(ThemeContext);
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

  const {loading, error, data} = useQuery(GET_GUNS_QUERY);

  return (
    <View style={styles(colors).safeArea}>
      {loading ? (
        <View style={styles(colors).loaderContainer}>
          <View style={styles(colors).loaderBox}>
            <ActivityIndicator size="large" color={colors.blackColor} />
          </View>
        </View>
      ) : error ? (
        <Text style={styles(colors).errorText}>Error: {error.message}</Text>
      ) : (
        <View style={styles(colors).container}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data.items}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles(colors).item}
                onPress={() =>
                  navigation.navigate('DetailScreen', {itemId: item.id})
                }>
                <Image
                  source={{uri: item.iconLink}}
                  style={styles(colors).icon}
                />
                <Text style={styles(colors).text}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default WeaponScreen;
