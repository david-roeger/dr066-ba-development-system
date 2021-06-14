import React, { useState }  from 'react';
import { Text, UpDown } from '../../../index'

export function ValueElement({attribute, children}) {
    return (
        <div className="flex gap-sm align-center">
            <div className="hidden md:block">
                <Text>{attribute}</Text>
                <Text>:</Text>
            </div>
            {children}
        </div>
    )
};

ValueElement.defaultProps = {
    attribute: 'Attribute'
};