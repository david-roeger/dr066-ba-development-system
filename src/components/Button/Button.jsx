import React from 'react';

import { Text } from '../Text/Text'

function sayHello() {
    alert('Hello!');
}

export function Button({primary, children, handleClick}) {
    let primaryStyles = primary ? "hover:bg-green-300" : "bg-white";
    return (
    <button onClick={() => sayHello()} className={`px-md py-xs text-black border-2 border-black focus:outline-none ${primaryStyles}`}>
        <Text>{children}</Text>
    </button>)
};