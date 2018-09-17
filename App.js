import React, { Component } from "react";
import { StyleSheet, View} from "react-native";

import ListItem from './src/components/ListItem/ListItem';
import PlacesInput from './src/components/PlacesInput/PlacesInput';
import PlacesList from './src/components/PlacesList/PlacesList';


export default class App extends Component {
  state = {
    placeName: "",
    places: []
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  addPlaceHandler = (placeName) => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };

  placeDeletedHandler = (id) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, i) => {
          return i !== id
        })
      }
    });
  }

  render() {

    return (
      <View style={styles.container}>

          <PlacesInput onPlaceAdded={this.addPlaceHandler}/>

          <PlacesList places={this.state.places} onItemDeleted={this.placeDeletedHandler}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },


});