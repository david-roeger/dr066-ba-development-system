import React from 'react';

export function Text(props) {
    console.log(props); 
    return <span>{props.children}</span>
};