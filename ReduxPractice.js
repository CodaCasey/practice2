console.clear();
//action creator

const createPolicy = (name, amount)=>{
  //action creator
  return {
    type: 'CREATE_POLICY',
    payload:{
      name: name,
      amount:amount
    }
  };
};

const deletePolicy = (name)=>{
  return {
    type: 'DELETE_POLICY',
    payload:{
      name:name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect)=>{
  return {
    type: 'CREATE_CLAIM',
    payload:{
      name:name,
      amountOfMoneyToCollect:amountOfMoneyToCollect
    }
  };
};

//reducers
//if its called for the first time and list is undefined, claims is set to an empty array
const claimsHistory =(oldListOfClaims=[],action)=>{
  if(action.type ==='CREATE_CLAIM'){
    // we care about this action
    return [...oldListOfClaims,action.payload]
  }
  //we dont care about action
  return oldListOfClaims;
};

const accounting = (bagOfMoney=100,action) => {
  if(action.type ==='CREATE_CLAIM'){
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  }else if(action.type === 'CREATE_POLICY'){
    return bagOfMoney + action.payload.amount
  }
  return bagOfMoney
}

const policies=(listOfPolicies=[],action)=>{
  if(action.type==='CREATE_POLICY'){
    return[...listOfPolicies,action.payload.name]
  }else if(action.type ==='DELETE_POLICY'){
    return listOfPolicies.filter(name => name !==action.payload.name)
  }
  return listOfPolicies;
}

//calling in redux
const {createStore, combineReducers}=Redux;

const ourDepartments = combineReducers({
  accounting:accounting,
  claimsHistory: claimsHistory,
  policies:policies
});

const store = createStore(ourDepartments)

//store contains all our references and data

//another way of writing
store.dispatch(createPolicy('Alex',20))
store.dispatch(createPolicy('Jim',30))
store.dispatch(createPolicy('Bob',40))

//const action = createPolicy('Alex',20)
//store.dispatch(action);

store.dispatch(createClaim('Alex',120))
store.dispatch(createClaim('Jim',50))

store.dispatch(deletePolicy('Bob'))
console.log(store.getState())