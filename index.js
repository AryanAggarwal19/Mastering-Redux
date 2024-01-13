        // Chapter - One (Actions, Reducers, Middlewares)
import { createStore } from "redux"

//store setup
const store = createStore(reducer);

const history=[];

function reducer(state={amount:1}, action){
    
if(action.type==='increment'){
    //immutability
//  state.amount= state.amount+1; (wrong practice)

    return {amount:state.amount+1} //(right practice)
    }
    return state; //newstate
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
    store.dispatch({type:'increment'})
},2000);




