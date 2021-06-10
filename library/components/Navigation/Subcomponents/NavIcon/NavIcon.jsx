import React from 'react';
import { types } from './NavIcon.config'

export function NavIcon({ type }) {
    let src = '/';

    if(types.includes(type) != -1) {
        src = `type=${type}.svg`;
    }
    return <img className="block" src={`/navIcons/${src}`} />
};


NavIcon.defaultProps = {
    type: 'home',
};  