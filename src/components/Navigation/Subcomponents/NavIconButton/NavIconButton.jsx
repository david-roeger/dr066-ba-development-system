import React from 'react';
import { Text, NavIcon } from '../../../index'

export function NavIconButton({ active, children }) {
    return <div className="bg-black hover:bg-gray-500 active:bg-gray-700 flex align-center p-xs pt-sm lg:pt-xs lg:pr-sm lg:p-sm lg:pr-lg">
            <div className="p-xs w-fit-content inline-block lg:flex lg:flex-row-reverse lg:items-center">
                {children[0]}
                <div className="w-xs h-xs mt-xs mx-auto lg:my-auto lg:mr-xs lg:mr-sm">
                    {
                        active && <div className="bg-white w-full h-full rounded-full"></div>
                    }
                </div>
            </div>
            <p className="hidden lg:flex lg:ml-xs xl:ml-sm">
                <span className="my-auto">
                    {children[1]}
                </span>
            </p>
        </div>
};

NavIconButton.defaultProps = {
    active: false,
    children: [
        <NavIcon></NavIcon>,
        <Text colorClass="white">Home</Text>
    ]
};  