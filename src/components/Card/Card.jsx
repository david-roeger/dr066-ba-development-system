import React from 'react';

import { Text, Grid } from '../index'

export function Card({title, children, col}) {
    let elements = [];
    if(!Array.isArray(children)) {
        elements.push(children)
    } else {
        elements = [...children];
    }
    
    let videos = elements.filter(ele => ele.type.name === 'VideoElement');
    let others = elements.filter(ele => ele.type.name !== 'VideoElement');

    let rows = [];
    others.forEach(((element, index) => {
        if(!col) {
            rows[index] = { 
                value: [element]
            }
            return
        }
        let newIndex = Math.floor(index / 3);
        if(!rows[newIndex]) {
            rows[newIndex] = { 
                value: []
            }
        }
        rows[newIndex].value.push(element)
    }));

    videos.forEach(element => {
        rows.push({ 
            type: 'VideoElement',
            value: [element]
        });
        return
    });
    console.log(rows)

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
                        { row.value.map((element, i) => (
                            <div key={i} className={`${col ? 'flex' : ''} ${col && row.type === 'VideoElement' ? 'col-span-3' : ''} `}>
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