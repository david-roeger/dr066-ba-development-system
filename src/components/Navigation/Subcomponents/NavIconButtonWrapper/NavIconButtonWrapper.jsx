import React from 'react';
import { Text, NavIcon, NavIconButton } from '../../../index'

export function NavIconButtonWrapper({ children }) {
    return <div className="bg-black hover:bg-gray-500 active:bg-gray-700 p-xs pt-sm lg:pt-xs lg:pr-sm lg:p-sm lg:pr-lg block h-auto select-none">
        { children }
    </div>
};

NavIconButtonWrapper.defaultProps = {
    children: <NavIconButton>
            <NavIcon></NavIcon>,
            <Text colorClass="white">Home</Text>
        </NavIconButton>
};  