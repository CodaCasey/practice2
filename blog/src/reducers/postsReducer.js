//when they say dont mutate the state it means dont return the same state or the same
//object mutated or not redux has to return a new object or array for
//react to re-render in a sense or in shor just dont mutate the array

export default (state = [], action) => {
  switch (action.type) {
      case 'FETCH_POSTS':
          return action.payload;
      default:
          return state;
  }
};