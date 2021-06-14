import React from 'react';
import { colorClasses } from './UpDown.config'

import { SystemIconContainer, SystemIcon} from '../../../../index'

export function UpDown({ state, colorClass, active, callback }) {
    let c = colorClasses[colorClass] || colorClasses.default;

    function handleClick(value) {
        callback(value);
    }

    return (
        <button className={`border rounded-sm ${active ? c.fill : 'bg-white'} ${c.outline} ${c.ring} focus:outline-none`} onClick={() => handleClick(state)}>
            <SystemIconContainer>
                <SystemIcon type={state? 'up' : 'down'} colorClass={colorClass}></SystemIcon>
            </SystemIconContainer>
        </button>
    );
}

UpDown.defaultProps = {
    state: 0,
    colorClass: 'default',
    active: false,
    callback: (value) => {}
};