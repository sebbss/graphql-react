import {gql, ApolloClient, NormalizedCacheObject} from '@apollo/client/core'
import { Dispatch } from 'redux';
// import { getPeople, getPerson, searchPeople } from '../store/actions'
import {GraphQLClient} from '../store/graphl-client'

export const GET_ALL_PEOPLE = gql`
query fetchPeople($page: Int, $name: String!){
    fetchPeople(page: $page, name: $name) {
        count
        results{
            name
            height
            gender
            mass
            homeworld
        }
        
    }
}

`;

export const GET_ONE_PERSON = gql`
query person($id: string){
    person(id: $id) {
        name
        height
        gender
        mass
        homeworld
    }
}

`;

