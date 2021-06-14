import React from 'react';
import { Text, ToggleScala, Toggle } from '../../../index'

export function ToggleElement({attribute, children}) {
    
    return (
        <div className="flex gap-sm align-center">
            <div className="hidden md:block">
                <Text>{attribute}</Text>
                <Text>:</Text>
            </div>
            <div className="flex-grow">
                {children}
            </div>
        </div>
    )
};

ToggleElement.defaultProps = {
    attribute: 'Attribute',
    children: <ToggleScala><Toggle/></ToggleScala>
};