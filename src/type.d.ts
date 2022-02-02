interface IPerson{
    name: string
    height: string
    mass: string 
    gender: string
    homeworld: string
}

type PeopleResult = {
    fetchPeople?:{
        results?: IPerson[] 
        count:number
    }
    
}

type PersonState = {
    person: IPerson | {}
}

type Action = {
    type: string
    loading: boolean
}

