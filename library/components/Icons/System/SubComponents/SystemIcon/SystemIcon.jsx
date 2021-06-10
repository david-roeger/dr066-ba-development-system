import React from 'react';

import { types } from './SystemIcon.config'

export function SystemIcon({type}) {
    let src = '/';
    if(types.includes(type) != -1) {
        src = `type=${type}.svg`;
    }
    return <img src={`/systemIcons/${src}`} />
};


SystemIcon.defaultProps = {
    type: 'close',
};  