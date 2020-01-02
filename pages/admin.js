import React from 'react';
import fetch from 'isomorphic-unfetch';

function Admin(props) {
    console.log(props);
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