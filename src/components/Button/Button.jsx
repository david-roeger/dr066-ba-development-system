import React from 'react';

import { Text } from '../Text/Text'

function sayHello() {
    alert('Hello!');
}

export function Button({primary, children, handleClick}) {
    let primaryStyles = primary ? "hover:bg-blue-400" : "bg-white";
    return (
    <button onClick={() => sayHello()} className={`px-4 py-2 text-black border-2 border-black focus:outline-none ring-black ${primaryStyles}`}>
        <Text>{children}</Text>
    </button>)
};