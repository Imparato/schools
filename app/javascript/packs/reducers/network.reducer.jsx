import { CREATE_NETWORK, GET_NETWORKS, UPDATE_NETWORK, DELETE_NETWORK } from "../actions/network.action";

const initialState = {};

export default function networksReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NETWORKS:
      return action.payload;
    
    case CREATE_NETWORK:
      return state.concat(action.payload);
    
    case UPDATE_NETWORK:
      return state.map((network) => {
        if(network.id === action.payload.id){
          return action.payload
        }
        return network
      })
    
    case DELETE_NETWORK:
      return state.filter((network) => network.id !== action.payload.id);
    
    default:
      return state;
  }
}
