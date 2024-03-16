import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_ITEMS_QUERY} from '../graphql/queries';

const ItemsList = () => {
  const {loading, error, data} = useQuery(GET_ITEMS_QUERY);

  if (loading)
    return (
      <Text style={{justifyContent: 'center', alignSelf: 'center'}}>
        Loading...
      </Text>
    );
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data.items}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
          <Image
            source={{uri: item.iconLink}}
            style={{width: 50, height: 50, marginRight: 10}}
          />
          <Text>{item.shortName}</Text>
          <Text>Ergonomy: {item.ergonomicsModifier}</Text>
        </View>
      )}
    />
  );
};

export default ItemsList;
