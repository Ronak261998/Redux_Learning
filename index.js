import { applyMiddleware, createStore, combineReducers } from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

//action name constants

const inc = "account/increment";
const dec = "account/decrement";
const incByAmount = "account/incrementByAmount";
const init = "account/initUser";
const incBonus = "bonus/increment";

//store
const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger.default, thunk.default)
);

const array = [];

//reducer

function accountReducer(state = { amount: 1000 }, action) {
  switch (action.type) {
    case init:
      return { amount: action.payload };
    case inc:
      return { amount: state.amount + 500 };
    case dec:
      return { amount: state.amount - 500 };
    case incByAmount:
      return { amount: state.amount + action.payload };

    default:
      return state;
  }
}

function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case incBonus:
      return { points: state.points + 1 };

    case incByAmount:
      if (action.payload >= 1000) return { points: state.points + 1 };

    default:
      return state;
  }

  // if(action.type === inc){

  //     // state.amount = state.amount + 500; // DON't use this appoach bcz of immutibility

  //     //Immutibility
  //     return {amount:state.amount+500}
  // }

  // if(action.type === dec){

  //     // state.amount = state.amount - 500; // DON't use this appoach bcz of immutibility

  //     //Immutibility
  //     return {amount:state.amount-500}
  // }

  // if(action.type === incByAmount){ //For that we need to use payload

  //     // state.amount = state.amount + action.payload; // DON't use this appoach bcz of immutibility

  //     //Immutibility
  //     return {amount:state.amount+action.payload}
  // }
  // return state
}

//global state
// console.log(store.getState());

// store.subscribe(()=>{
//     array.push(store.getState());
//     console.log(array);
// })

// async function getUser(){
//  const {data}  = await axios.get("http://localhost:3000/accounts")
//  console.log(data);
// }
// getUser();

//Action Creators

function getUser(id) {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
    dispatch(initUser(data.amount));
  };
}

function initUser(value) {
  return { type: init, payload: value };
}

function increment() {
  return { type: inc };
}

// function decrement(){
//     return {type:dec}
// }

function incrementByAmount(value) {
  return { type: incByAmount, payload: value };
}

function incrementBonus(value) {
  return { type: incBonus };
}

setTimeout(() => {
  store.dispatch(getUser(2));
  // store.dispatch(increment());
  // store.dispatch(incrementByAmount(1005));
  store.dispatch(incrementBonus());
}, 2000);
// console.log(store.getState());
