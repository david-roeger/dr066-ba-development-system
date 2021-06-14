import React, { useState }  from 'react';
import { Text, UpDown } from '../../../index'
import { colorClasses } from './UpDownElement.config';

export function UpDownElement({attribute, state, colorClass, callback}) {
  const [upDownState, setUpDownState] = useState(state);
    
    function handleButtonClick(value) {
        setUpDownState(value);
        callback(value);
    }

    return (
        <div className="flex gap-sm align-center">
            <div className="hidden md:block">
                <Text>{attribute}</Text>
                <Text>:</Text>
            </div>
            <div className="flex gap-md mx-sm">
                <UpDown active={upDownState == 0} state={0} colorClass={colorClass} callback={() => handleButtonClick(0)}></UpDown>
                <UpDown active={upDownState == 1} state={1} colorClass={colorClass} callback={() => handleButtonClick(1)}></UpDown>
            </div>
        </div>
    )
};

UpDownElement.defaultProps = {
    attribute: 'Attribute',
    state: 0,
    callback: (value) => {}
};