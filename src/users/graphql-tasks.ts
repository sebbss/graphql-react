import {gql} from '@apollo/client/core'
import { Dispatch } from 'redux';
import { getPeople, getPerson, searchPeople } from '../store/actions'
import {GraphQLClient} from '../store/graphl-client'

const GET_ALL_PEOPLE = gql`
query allPeople($page: string){
    allPeople(page: $page) {
        name
        height
        gender
        mass
        homeworld
    }
}

`;

const SEARCH_FOR_PEOPLE = gql`
query allPeople($name: string){
    searchByName(page: $name) {
        name
        height
        gender
        mass
        homeworld
    }
}

`;

const GET_ONE_PERSON = gql`
query person($id: string){
    person(page: $id) {
        name
        height
        gender
        mass
        homeworld
    }
}

`;

export const searchForPeople = (name:string) =>(dispatch: Dispatch, state: PeopleState, { client }:{client:GraphQLClient})=>{
    return client.query<unknown, IPerson[] | []>('searchByName', SEARCH_FOR_PEOPLE,{name}).then(data=>{
        dispatch(searchPeople(data))
    })
}

export const getAllPeople = (page:string) =>(dispatch: Dispatch, state: PeopleState, { client }:{client:GraphQLClient})=>{
    return client.query<unknown, IPerson[] | []>('allPeople', GET_ALL_PEOPLE,{page}).then(data=>{
        dispatch(getPeople(data))
    })
}

export const getOnePerson = (id:string) =>(dispatch: Dispatch, state: PersonState, { client }:{client:GraphQLClient})=>{
    return client.query<unknown, IPerson | null>('person', GET_ONE_PERSON,{id}).then(data=>{
        dispatch(getPerson(data))
    })
}
