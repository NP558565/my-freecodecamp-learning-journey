/**
 * Time to practice removing items from an array. The spread operator can be used here as well. 
 * 
 * Other useful JavaScript methods include slice() and concat().
 * 
 * The reducer and action creator were modified to remove an item from an array based on the index of the item. 
 * 
 * Finish writing the reducer so a new state array is returned with the item at the specific index removed.
 * 
 */

const immutableReducer = (state = [0,1,2,3,4,5], action) => {
    switch(action.type) {
      case 'REMOVE_ITEM':
        return [...state.slice(0,action.data),...state.slice(action.data+1)]; 
  
      default:
        return state;
    }
  };
  
  const removeItem = (index) => {
    return {
      type: 'REMOVE_ITEM',
      data:index
    }
  }
  
  const store = Redux.createStore(immutableReducer);
  