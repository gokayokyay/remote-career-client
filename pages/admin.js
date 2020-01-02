import React, { useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

import { useDispatch } from 'react-redux';

import { postJob } from '../src/redux/actions';

function Admin(props) {
    console.log(props);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(postJob({asd: 'asd'}));
    }, []);
    return (
        <div>{(props.test.toString())}</div>
    )
}

Admin.getInitialProps = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    return {
        test: data.completed,
    };
};

export default Admin;