import React from 'react';

import { icons } from './DeviceIcon.config'
export function DeviceIcon({type, colorClass}) {
    let src = ''
    if(icons[type] && icons[type][colorClass]) {
        src = icons[type][colorClass]
    }
    return <img src={src} />
};


DeviceIcon.defaultProps = {
    type: 'default',
    colorClass: 'default',
};  