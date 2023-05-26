import {createStore , applyMiddleware} from "redux";
import logger  from "redux-logger";
import axios from "axios";



//ACTION NAME CONSTANT

const inc  = "increment"
const init  = "initUser"
const dec  = "decrement"
const incByAmount  = "incrementByAmount"


//store
const store = createStore(reducer , applyMiddleware(logger.default));
const history = []



function reducer(state = {amount:1} , action){
    // if(action.type === inc){
    //     // return state.amount+1 //2

        
    //     // state.amount = state.amount +1 //this is wrong approach , if we push data in array it not return previos stata
    //     return {amount : state.amount +1}
    // }

    // if(action.type === dec){
    //     // return state.amount+1 //2
    //     // state.amount = state.amount +1 //this is wrong approach , if we push data in array it not return previos stata
    //     return {amount : state.amount -1}
    // }

    // if(action.type === incByAmount){
    //     // return state.amount+1 //2

        
    //     // state.amount = state.amount +1 //this is wrong approach , if we push data in array it not return previos stata
    //     return {amount : state.amount + action.payload}
    // }
    // return state


    switch (action.type){

        case init:
            return {amount : action.payload}

        case inc:
            return {amount : state.amount +1}

        case dec:
            return {amount : state.amount -1}

        case incByAmount:
            return {amount : state.amount + action.payload}

        default:
            return state
    }   


    
}

//global state

// console.log(store.getState());

// store.subscribe(()=>{
//     history.push (store.getState()) 
//     console.log(history);
// })


//ASYNCC API CALL

async function getuser(){
  const {data} = await axios.get('http://localhost:3000/accounts');
  console.log(data);
}

getuser();


//ACTION CREATERS
function initUser(value){
    return {type:init , payload:value} //action
}


function increment(){
        return {type:inc}
}

function decrement(){
    return {type:dec}
}

function incrementByAmount(value){
    return {type:incByAmount  , payload:value}
}

setInterval(()=>{
    store.dispatch(initUser(500))

},1000)


// console.log(store.getState());
