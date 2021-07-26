import React from 'react';

function Header(props){
    return (
        <header>
            <h1 style={{ padding: '30px', backgroundColor: 'darkblue' }}>{props.title}</h1>
        </header>
    );
}

export default Header;