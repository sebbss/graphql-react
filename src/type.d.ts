interface IPerson{
    name: string
    height: string
    mass: string 
    gender: string
    homeworld: string
}

type PeopleState = {
    people: IPerson[] | []
}

type PersonState = {
    person: IPerson | {}
}

type PeopleAction = {
    type: string
    payload: PeopleState
}

type PersonAction = {
    type: string
    payload: PersonState
}