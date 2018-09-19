
import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from '../actions/actionType'
import placeImage from '../../assets/city.jpg';

const intialState = ({
  places: [],
  selectedPlace: null
})


const reducer = (state = intialState, action) => {

    switch(action.type){
      case ADD_PLACE: 
        return {
          ...state,
          places: state.places.concat({
            key: `${Math.random()}`, 
            name: action.placeName,
            image: placeImage
          }),
        };
      case DELETE_PLACE:
        return {
          ...state,
          places: state.places.filter(place => {
            return place.key !== state.selectedPlace.key;
          }),
          selectedPlace: null,
        }
      case SELECT_PLACE:
        return {
          ...state,
          selectedPlace : state.places.find(place => {
            return place.key === action.placekey;
          })
        }
        case DESELECT_PLACE:
          return {
            ...state,
            selectedPlace: null,
          }
      default: 
        return state;
    }
};

export default reducer