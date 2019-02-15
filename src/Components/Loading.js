import React from 'react';

const Loader = (props) => props.error ? <div>Oops! Something went wrong.</div> : <div><h1>Loading...</h1></div>;
export default Loader;