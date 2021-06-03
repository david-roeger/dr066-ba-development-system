import React from 'react';
import { Text, NavIcon } from '../../../index'

export function NavIconButton({ active, target, children }) {
    return <a href={target} className="bg-black hover:bg-gray-500 active:bg-gray-700 p-xs md:pr-sm lg:p-sm lg:pr-md block h-auto select-none">
        <div className="flex">
            <div className="p-xs w-fit-content inline-block md:flex md:flex-row-reverse md:items-center">
                {children[0]}
                <div className="w-xs h-xs mt-xs mx-auto md:my-auto md:mr-xs lg:mr-sm">
                    {
                        active && <div className="bg-white w-full h-full rounded-full"></div>
                    }
                </div>
            </div>
            <p className="hidden md:inline-block md:ml-xs lg:ml-sm">
                {children[1]}
            </p>
        </div>
    </a>
};


NavIconButton.defaultProps = {
    active: false,
    target: '#',
    children: [
        <NavIcon></NavIcon>,
        <Text light={true}>Home</Text>
    ]
};  