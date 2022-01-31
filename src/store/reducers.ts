import { GET_PEOPLE, GET_PERSON, SEARCH_PEOPLE } from './actionTypes'

const initialPeopleState = {
    poeple: []
}

const initialPersonState = {
    person: {}
}

export const peopleReducer = (state = initialPeopleState, action: PeopleAction)=>{

    switch(action.type){
        case GET_PEOPLE:
            return{
                ...state,
                people: action.payload
            }
        case SEARCH_PEOPLE:
            return{
                ...state,
                people: action.payload
            }
        default:
            return {
                state
            }
    }
}

export const personReducer = (state = initialPersonState, action: PersonAction)=>{

    switch(action.type){
        case GET_PERSON:
            return{
                ...state,
                people: action.payload
            }
        
        default:
            return {
                state
            }
    }
}
