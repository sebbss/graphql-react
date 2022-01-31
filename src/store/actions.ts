import {GET_PEOPLE, GET_PERSON, SEARCH_PEOPLE} from './actionTypes'

export const getPeople = (data: IPerson[])=>{
    return{
        type: GET_PEOPLE,
        payload: data
    }
}

export const getPerson = (data: IPerson | null)=>{
    return{
        type: GET_PERSON,
        payload: data
    }
}

export const searchPeople = (data: IPerson[])=>{
    return{
        type: SEARCH_PEOPLE,
        payload: data
    }
}