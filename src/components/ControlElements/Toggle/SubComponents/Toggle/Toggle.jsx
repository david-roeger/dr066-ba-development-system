import React, { useState } from 'react';
import './Toggle.css'
import { colorClasses } from './Toggle.config'

import tokens from 'dr066-ba-design-token-builder'


export function Toggle({state, colorClass, disabled, callback}) {
    let colors = tokens.colors;
    let c = colorClasses[colorClass] || colorClasses.Default;

    let colorsComputed = {}
    if(disabled) {
        state = undefined;
        c = {
            outline: "border-gray-300",
            fill: "bg-white",
            base: "bg-white"
        }
    }

    for (const key in c) {
        let property = c[key];
        let index = property.indexOf('-');
        property = property.slice(index + 1, property.length);
        colorsComputed[key] = colors[property];
    }

    const [toggleState, setToggleState] = useState(state);
    function handleUpdate(value) {
        setToggleState(value);
        callback(value);
    }

    return (
        <label  style={{
            '--base-color': colorsComputed.base,
            '--fill-color': colorsComputed.fill,
            '--border-color': colorsComputed.outline
        }} className="relative block w-[48px] h-lg rounded-full cursor-pointer">
            <input 
            className="toggle opacity-0 w-0 h-0" 
            type="checkbox" checked={toggleState} disabled={disabled}
            onChange={(e) => handleUpdate(e.target.checked)}
            />
            <span className={`handle absolute w-full h-full rounded-full border transition-colors ${c.outline} ${c.base}`}></span>
        </label>
    );
}

Toggle.defaultProps = {
    state: true,
    colorClass: 'Default',
    disabled: false,
    callback: (value) => {}
};