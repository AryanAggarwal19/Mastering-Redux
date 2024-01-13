        // Chapter - One (Actions, Reducers, Middlewares)
import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger";

//action constants
const inc = "increment";
const dec = "decrement";
const incByAmt = "incrementByPayload";

//store setup
const store = createStore(reducer,applyMiddleware(logger.default));

const history=[];



function reducer(state={amount:1}, action){
    
if(action.type===inc){
    //immutability
//  state.amount= state.amount+1; (wrong practice)

    return {amount:state.amount+1} //(right practice)
    }
    // return state; //newstate

if(action.type===dec){
    return {amount: state.amount-1 };
}
if(action.type===incByAmt){ //use of payload
    return {amount:state.amount+ action.payload};
}
}

//global state
//console.log(store.getState())

// store.subscribe(()=>{ // runs when there is change in state
//     history.push(store.getState())
//     // console.log(store.getState())

//     console.log(history);

// })

//action - object
// {type:'increment'}

//store.dispatch({type:'increment'})

/****************************************************/

//Action Creators
function increment(){
    return {type:inc};
}
function decrement(){
    return {type:ḍec};
}
function incrementByAmount(value){
    return {type:incByAmt, payload:value};
}

setInterval(()=>{
    store.dispatch(incrementByAmount(5));
},2000);




