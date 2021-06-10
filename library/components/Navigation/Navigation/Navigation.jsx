

import React from 'react';
import {NavIconButton, NavIcon, Text} from '../../index'
import { navItems } from './Navigation.config'
export function Navigation({children}) {    
    return <nav className="bg-black w-full absolute bottom-0 md:grid md:grid-cols-md md:gap-md lg:block lg:relative lg:py-md lg:h-full lg:col-start-1 xl:col-span-2">
        <ul className="flex w-full justify-between md:col-start-2 md:col-span-2 lg:flex-col">
            {children.map((child, index) => (
                <li className="lg:mb-sm lg:last:mb-0" key={index}>
                    {child}
                </li>
            ))}
        </ul>
    </nav>
};


Navigation.defaultProps = {
    children: navItems.map((navItem, index) => (
        <NavIconButton key={index}>
            <NavIcon type={navItem.type}></NavIcon>
            <Text colorClass="white">{navItem.text}</Text>
        </NavIconButton>
    ))
};  


