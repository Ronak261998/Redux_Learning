const state = {account:{amount:100} , bonus:{points:2}} 
const newState = {account:{...state.account} , bonus:{points:state.bonus.points +100}} 

console.log(newState , state);
state.account.amount = 10;
console.log(newState , state);
