import React, { useState } from 'react';

import { Slider, SliderScala, SliderElement } from '../../index'
import { Toggle, ToggleScala, ToggleElement } from '../../index'
import { DeviceIconContainer, DeviceIcon } from '../../index'
import { SystemIconContainer, SystemIcon } from '../../index'
import { Text } from '../../index'

export function HeatingDeviceElement({device}) {
    device = {
        id: 0,
        type: 'heating',
        name: 'Heizung',
        cube: 'zwave',
        attributes: [ 
            {
                id: 0,
                type: 'toggle',
                name: 'Schalter',
                value: 1,
                scala: 'onOff',
                disabled: false
            },
            {
                id: 1,
                type: 'slider',
                name: 'Soll-Temperatur',
                value: 12,
                min: 8,
                max: 28,
                scala: 'celsius',
                disabled: false
            }
        ]
    }

    const [deviceState, setDeviceState] = useState(device);
    function updateDeviceState(device) {
        setDeviceState(device);
    }

    function getAttributeTemplate(attribute, device) {
        switch (attribute.type) {
            case 'toggle':
                return getToggleTemplate(attribute, device);
            case 'slider':
                return getSliderTemplate(attribute, device)
            default:
                break;
        }
    }

    function getSliderTemplate(attribute){
        return  <SliderElement attribute={attribute.name}>
            <SliderScala scala={attribute.scala} min={attribute.min} max={attribute.max}>
                <Slider colorClass={device.cube} state={attribute.value} scala={attribute.scala} disabled={attribute.disabled} callback={(value) => updateAttributeValue(attribute, value)}/>
            </SliderScala>
        </SliderElement> 
    }

    function getToggleTemplate(attribute){
        return  <ToggleElement attribute={attribute.name}>
            <ToggleScala scala={attribute.scala}>
                <Toggle colorClass={device.cube} state={attribute.value} scala={attribute.scala} disabled={attribute.disabled} callback={(value) => updateAttributeValue(attribute, value)}/>
            </ToggleScala>
        </ToggleElement> 
    }


    function updateAttributeValue(attribute, value) {
        let index = deviceState.attributes.findIndex((a) => a.id == attribute.id);
        if(index != -1) {
            let  newState =Object.assign(deviceState);
            newState.attributes[index].value = value 
            updateDeviceState(newState)
        };
    }

    return (
    <section className="flex">
        <div className="flex-grow border-l border-t border-b rounded-l-sm flex p-sm gap-xs">
            <DeviceIconContainer>
                <DeviceIcon type={device.type} colorClass={device.cube} />
            </DeviceIconContainer>
            <div className="flex-grow grid gap-xs">
                <Text>{device.name}</Text>
                {device.attributes.map((attribute) => (
                <div key={attribute.id}>
                    {getAttributeTemplate(attribute, device)}
                </div>
            ))}
            </div>
        </div>
        <div className="bg-gray-300 border rounded-r-sm flex">
            <div className="my-auto">
                <SystemIconContainer>
                    <SystemIcon type="next"/>
                </SystemIconContainer>
            </div>
        </div>
    </section>)
};

HeatingDeviceElement.defaultProps = {
    toggle: false,
    colorClass: 'Default',
};