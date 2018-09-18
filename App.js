import React, { Component } from "react";
import { StyleSheet, View} from "react-native";

import ListItem from './src/components/ListItem/ListItem';
import PlacesInput from './src/components/PlacesInput/PlacesInput';
import PlacesList from './src/components/PlacesList/PlacesList';
import placeImage from './src/assets/city.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'


export default class App extends Component {
  state = {
    placeName: "",
    places: [],
    selectedPlace: null
  };

  placeDeltedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null,
      }
    });
  }

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    })
  }
  

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  addPlaceHandler = (placeName) => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: `${Math.random()}`, 
          name: placeName,
          image: placeImage
        })
      };
    });
  
  };

  placeSelectedHandler = key => {

   this.setState(prevState => {
     return {
       selectedPlace : prevState.places.find(place => {
         return place.key === key;
       })
     }
   })
  }



  render() {

    return (
      <View style={styles.container}>
          <PlaceDetail selectedPlace={this.state.selectedPlace} onItemDeleted={this.placeDeltedHandler} onModalClosed={this.modalClosedHandler}/>
          <PlacesInput onPlaceAdded={this.addPlaceHandler}/>

          <PlacesList places={this.state.places} onItemSelected={this.placeSelectedHandler}/>

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