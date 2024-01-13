        // Chapter - One (Actions, Reducers, Middlewares)
import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger";

//store setup
const store = createStore(reducer,applyMiddleware(logger.default));

const history=[];

function reducer(state={amount:1}, action){
    
if(action.type==='increment'){
    //immutability
//  state.amount= state.amount+1; (wrong practice)

    return {amount:state.amount+1} //(right practice)
    }
    // return state; //newstate

if(action.type==='decrement'){
    return {amount: state.amount-1 };
}
if(action.type==='incrementByAmount'){ //use of payload
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

setInterval(()=>{
    store.dispatch({type:'incrementByAmount', payload:4})
},2000);




