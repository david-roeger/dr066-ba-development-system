import React from 'react';

import { icons } from './IconDevice.config'
console.log(icons.default);
export function IconDevice({type, colorClass}) {
    let src = ''
    if(icons[type] && icons[type][colorClass]) {
        src = icons[type][colorClass]
    }
    return <div>
        <img src={src} />
    </div>
};


IconDevice.defaultProps = {
    type: 'default',
    colorClass: 'default',
};  