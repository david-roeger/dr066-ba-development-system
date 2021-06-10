import React from 'react';

import { types, colorClasses } from './DeviceIcon.config'
export function DeviceIcon({type, colorClass, outline}) {
    let src = '/';
    outline = outline ? 'true' : 'false';
    if(types.includes(type) != -1 && colorClasses.includes(colorClass) != -1) {
        src = `type=${type}, colorClass=${colorClass}, outline=${outline}.svg`;
    }
    return <img src={`/deviceIcons/${src}`} />
};


DeviceIcon.defaultProps = {
    type: 'default',
    colorClass: 'default',
    outline: false,
};  