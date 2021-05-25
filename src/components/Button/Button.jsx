import React from 'react';

import { Text } from '../index'

export function Button({primary, children, handleClick}) {
    let primaryStyles = primary ? "hover:bg-green-300" : "hover:bg-orange-300";
    return (
    <button onClick={() => handleClick()} className={`px-md py-xs text-black border-2 border-black focus:outline-none rounded-sm ${primaryStyles}`}>
        <Text>{children}</Text>
    </button>)
};