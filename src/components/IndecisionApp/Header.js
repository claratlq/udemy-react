import React from 'react';

//this is a react component called Header
const Header = (props) => {
    return ( // JSX expression
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
    )
}

Header.defaultProps = {
    title: 'Indecision App'
}

export default Header;