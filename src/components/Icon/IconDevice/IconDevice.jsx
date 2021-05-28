import React from 'react';
import svg from "./device.svg"

export function IconDevice({type, color}) {

    let types = ['Default', 'heating', 'light', 'electricity', 'garage', 'camera'];
    let colors = ['Default', 'zwave', 'enocean', 'zigbee'];

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


IconDevice.defaultProps = {
    type: 'Default',
    color: 'Default',
  };