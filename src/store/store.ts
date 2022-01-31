import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { createGQLClient } from "./graphl-client"
import {peopleReducer,personReducer} from "./reducers"

const rootReducer = combineReducers({
    peopleReducer,
    personReducer
})


export default createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({client: createGQLClient})))
