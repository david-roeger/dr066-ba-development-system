

import React from 'react';
import { NavIconButtonWrapper, NavIconButton, NavIcon, Text} from '../../index'
import { navItems } from './Navigation.config'
export function Navigation({children}) {    
    return <nav className="bg-black w-full sticky top-0 col-span-full md:grid md:grid-cols-md md:gap-md lg:block lg:col-span-1 lg:max-h-screen lg:py-md lg:h-full lg:col-start-1 xl:col-span-2 z-50">
        <ul className="flex gap-md justify-center md:justify-around md:col-start-2 md:col-span-2 lg:flex-col">
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
        <NavIconButtonWrapper key={index}>
            <NavIconButton>
                <NavIcon type={navItem.type}></NavIcon>
                <Text colorClass="white">{navItem.text}</Text>
            </NavIconButton>
        </NavIconButtonWrapper>

    ))
};  


