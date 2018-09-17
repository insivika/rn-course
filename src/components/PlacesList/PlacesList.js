import React from 'react';
import {View, StyleSheet, ScrollView, FlatList} from 'react-native';
import ListItem from '../ListItem/ListItem'


const placesList = (props) => {

  return <FlatList 
       data={props.places}
       renderItem={(info) => (
            <ListItem 
              placeName={info.item.value} 
              onItemPressed={() => props.onItemDeleted(info.item.key)}
            />
       )}
       style={styles.listContainer}
      />
}


const styles = StyleSheet.create({

  listContainer: {
    width: "100%"
  }
})


export default placesList