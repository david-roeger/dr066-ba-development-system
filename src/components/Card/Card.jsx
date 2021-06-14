import React from 'react';

import { Text, StateIconContainer, StateIconLight, Grid } from '../index'

export function Card({title, children, col}) {

    let elements = [];
    if(!Array.isArray(children)) {
        elements.push(children)
    } else {
        elements = [...children];
    }
    
    let rows = [];
    elements.forEach(((element, index) => {
        if(!col) {
            rows[index] = [element];
            return
        }
        let newIndex = Math.floor(index / 3);
        if(!rows[newIndex]) {
            rows[newIndex] = []
        }
        rows[newIndex].push(element)
    }));

    return (
        <div className="flex flex-col">
            <div className="border border-black rounded-t-md bg-black py-sm px-md">
            <Text size="sm" colorClass="white">
                { title }
            </Text>
            </div>
            <div className="flex flex-col gap-md p-md border-l border-r border-b border-black rounded-b-md">
                { rows.map((row, index) => (
                    <Grid key={index} cols={col ? 3 : 0}>
                        { row.map((element, i) => (
                            <div key={i} className={`${col ? 'flex' : ''}`}>
                                <div className="mx-auto w-fit-content">
                                    { element }
                                </div>
                            </div>
                        ))}
                    </Grid>
                ))}
            </div>
        </div>

    )
};


Card.defaultProps = {
    title: 'Header Title',
    col: false,
    children: []
};