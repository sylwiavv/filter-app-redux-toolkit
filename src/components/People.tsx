import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from "../redux/store";
import {filterByValue} from "../redux/people/PeopleSlice"

const People = () => {
    const people = useSelector((state: RootState) => state.people.value);
    const dispatch = useDispatch();

    const [query, setQuery] = useState<string>('');

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const filterPeople = people.filter(({name}) => (
        name.toLowerCase().includes(query.toLowerCase())
    ))

    return (
        <>
            <h1>Hello people</h1>
            <input placeholder="search" value={query} onChange={handleInput}/>
            {filterPeople.map(({name, id}) => (
                <div key={id}>{name}</div>
            ))}
            <button onClick={() => dispatch(filterByValue("Ta"))}>Click me</button>
        </>
    );
}

export default People;