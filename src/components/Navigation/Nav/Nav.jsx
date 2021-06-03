

import React from 'react';
import {NavIconButton, NavIcon, Text} from '../../index'

export function Nav() {
    return <nav className="bg-black w-full md:grid md:grid-cols-md">
        <ul className="flex w-full justify-between md:col-start-2 md:col-span-2">
            <li>
                <NavIconButton>
                    <NavIcon></NavIcon>
                    <Text colorClass="white">Home</Text>
                </NavIconButton>
            </li>
            <li>
                <NavIconButton>
                    <NavIcon type="devices"></NavIcon>
                    <Text colorClass="white">Geräte</Text>
                </NavIconButton>
            </li>
            <li>
                <NavIconButton active>
                    <NavIcon type="rooms"></NavIcon>
                    <Text colorClass="white">Räume</Text>
                </NavIconButton>
            </li>
            <li>
                <NavIconButton>
                    <NavIcon type="automations"></NavIcon>
                    <Text colorClass="white">Szenen</Text>
                </NavIconButton>
            </li>
            <li>
                <NavIconButton>
                    <NavIcon type="homee"></NavIcon>
                    <Text colorClass="white">homee</Text>
                </NavIconButton>
            </li>
        </ul>
    </nav>
};