import React from 'react';
import { Text, Slider } from '../../../../index'
import { scalas } from './SliderScala.config'

export function SliderScala({scala, min, max, children}) {
    let scalaText = scalas[scala] || scalas.percent;
    return (
        <div className="flex gap-xs align-center items-center">
            <Text size="sm" colorClass="gray-500">{min}{scalaText}</Text>
            <div className="flex-grow">
                <Slider state={children.props.state} colorClass={children.props.colorClass} disabled={children.props.disabled} callback={children.props.callback}
                 min={min} max={max}/>
            </div>
            <p>
                <Text size="sm" colorClass="gray-500">{max}{scalaText}</Text>
            </p>
        </div>
    );
}

SliderScala.defaultProps = {
    min: 0,
    max: 100,
    scala: "percent",
    children: <Slider/>
};