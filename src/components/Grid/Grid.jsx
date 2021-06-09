import React from 'react';

export function Grid({cols, children}) {
    let responsive = 'grid-cols-sm md:grid-cols-md lg:grid-cols-lg xl:grid-cols-xl'
    console.log(!isNaN(cols));
    console.log(cols);
    return <div 
            style={cols != undefined ? {gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr)`} : {}}
            className={`min-h-full w-full relative grid ${cols === undefined ? responsive : ''} gap-sm md:gap-md lg:gap-lg xl:gap-xl`}>
        { children }
    </div>
};


Grid.defaultProps = {
};