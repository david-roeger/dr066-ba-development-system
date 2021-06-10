import React from 'react';
import { Text, Toggle } from '../../../../index'
import { scalas } from './ToggleScala.config'

export function ToggleScala({scala, children}) {
    let scalaText = scalas[scala] || scalas.onOff;
    console.log(scalaText);
    return (
        <div className="flex gap-xs align-center">
            <p>
                <Text size="sm" colorClass="gray-500">{scalaText[0]}</Text>
            </p>
            {children}
            <p>
                <Text size="sm" colorClass="gray-500">{scalaText[1]}</Text>
            </p>
        </div>
    );
}

ToggleScala.defaultProps = {
    scala: "onOff",
    children: <Toggle/>
};