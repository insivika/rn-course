import React, { Component } from "react";
import { StyleSheet, View} from "react-native";
import { connect } from 'react-redux';

import ListItem from './src/components/ListItem/ListItem';
import PlacesInput from './src/components/PlacesInput/PlacesInput';
import PlacesList from './src/components/PlacesList/PlacesList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index';


class App extends Component {

  placeDeltedHandler = () => {
    this.props.onDeletePlace()
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace()
  }
  

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  addPlaceHandler = (placeName) => {
    this.props.onAddPlace(placeName)
    console.log('Place added: ', placeName)
  };

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key)
  }



  render() {

    return (
      <View style={styles.container}>
          <PlaceDetail selectedPlace={this.props.selectedPlace} onItemDeleted={this.placeDeltedHandler} onModalClosed={this.modalClosedHandler}/>
          <PlacesInput onPlaceAdded={this.addPlaceHandler}/>

          <PlacesList places={this.props.places} onItemSelected={this.placeSelectedHandler}/>

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

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)