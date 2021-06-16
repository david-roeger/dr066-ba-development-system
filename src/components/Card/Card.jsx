import React from 'react';

import { Text, Grid, VideoElement } from '../index'

export function Card({title, children, col}) {
    let elements = [];
    if(!Array.isArray(children)) {
        elements.push(children)
    } else {
        elements = [...children];
    }
    
    let videos = elements.filter(ele => ele.type.name === VideoElement.name);
    let others = elements.filter(ele => ele.type.name !== VideoElement.name);

    let rows = [];
    others.forEach(element => {
        rows.push({ 
            value: element
        });
    });

    videos.forEach(element => {
        rows.push({ 
            type: 'VideoElement',
            value: element
        });
        return
    });

    return (
        <div className="flex flex-col">
            <div className="border border-black rounded-t-md bg-black py-sm px-md lg:p-md lg:px-lg">
                <Text size="sm" colorClass="white">
                    { title }
                </Text>
            </div>
            <div className="p-sm md:p-md lg:p-lg xl:p-xl border-l border-r border-b border-black rounded-b-md">
                <Grid cols={col ? undefined : 0}>
                    { rows.map((element, i) => (
                        <div key={i} className={`${col ? 'flex' : ''} ${col && element.type === 'VideoElement' ? 'col-span-2 lg:col-span-3 xl:col-span-4' : ''} `}>
                            <div className="mx-auto w-fit-content">
                                { element.value }
                            </div>
                        </div>
                    ))}
                </Grid>
            </div>
        </div>

    )
};


Card.defaultProps = {
    title: 'Header Title',
    col: false,
    children: []
};