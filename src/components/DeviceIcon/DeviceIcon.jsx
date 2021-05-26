import React from 'react';
import svg from "./device.svg"
import token from "dr066-ba-design-token-builder/icons";

export function DeviceIcon({type, color}) {
    let types = token.iconReference.types;
    let colors = token.iconReference.colors;
    console.log(type, types);

    let typeIndex = types.findIndex((t) => t === type);
    let colorIndex = colors.findIndex((c) => c === color);
    console.log(colorIndex);
    return <div>
        
        <svg style={{margin: "2px 3px 2px 3px"}} width="40" height="40" viewBox={`${20 + 60 * typeIndex} ${20 + 60 * colorIndex} 40 40`} fill="none" xmlns="http://www.w3.org/2000/svg">
            {typeIndex != -1 && colorIndex != -1 &&
                <use href={`${svg}#type=${type},%20color=${color}`} />
            }
        </svg>
    </div>
};


DeviceIcon.defaultProps = {
    type: 'Default',
    color: 'Default',
  };