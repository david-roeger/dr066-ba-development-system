

import React from 'react';

export function Heating({state, outline, fillFrom, fillTo, base}) {
    state = Math.max(0, state);
    state = Math.min(state, 100);
    state = (state / 100).toFixed(2)

    return <div>
        <svg width="44" height="46" viewBox="0 0 44 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g className={`fill-current ${outline}`}>
                <path d="M5 18C5 17.4477 5.44772 17 6 17H38C38.5523 17 39 17.4477 39 18C39 18.5523 38.5523 19 38 19H6C5.44772 19 5 18.5523 5 18Z" />
                <path d="M5 37C5 36.4477 5.44772 36 6 36H38C38.5523 36 39 36.4477 39 37C39 37.5523 38.5523 38 38 38H6C5.44772 38 5 37.5523 5 37Z" />
                <path d="M23 15C23 13.3431 24.3431 12 26 12C27.6569 12 29 13.3431 29 15V39C29 40.6569 27.6569 42 26 42C24.3431 42 23 40.6569 23 39V15Z" />
                <path d="M15 15C15 13.3431 16.3431 12 18 12C19.6569 12 21 13.3431 21 15V39C21 40.6569 19.6569 42 18 42C16.3431 42 15 40.6569 15 39V15Z" />
                <path d="M7 15C7 13.3431 8.34315 12 10 12C11.6569 12 13 13.3431 13 15V39C13 40.6569 11.6569 42 10 42C8.34315 42 7 40.6569 7 39V15Z" />
                <path d="M31 15C31 13.3431 32.3431 12 34 12C35.6569 12 37 13.3431 37 15V39C37 40.6569 35.6569 42 34 42C32.3431 42 31 40.6569 31 39V15Z" />
            </g>

            <g className={`fill-current ${base}`}>
                <path d="M9 15C9 14.4477 9.44772 14 10 14C10.5523 14 11 14.4477 11 15V39C11 39.5523 10.5523 40 10 40C9.44772 40 9 39.5523 9 39V15Z"/>
                <path d="M17 15C17 14.4477 17.4477 14 18 14C18.5523 14 19 14.4477 19 15V39C19 39.5523 18.5523 40 18 40C17.4477 40 17 39.5523 17 39V15Z"/>
                <path d="M25 15C25 14.4477 25.4477 14 26 14C26.5523 14 27 14.4477 27 15V39C27 39.5523 26.5523 40 26 40C25.4477 40 25 39.5523 25 39V15Z"/>
                <path d="M33 15C33 14.4477 33.4477 14 34 14C34.5523 14 35 14.4477 35 15V39C35 39.5523 34.5523 40 34 40C33.4477 40 33 39.5523 33 39V15Z"/>
            </g>

            <g style={{opacity: 1 - state}} className={`fill-current ${fillFrom}`}>
                <path d="M9 15C9 14.4477 9.44772 14 10 14C10.5523 14 11 14.4477 11 15V39C11 39.5523 10.5523 40 10 40C9.44772 40 9 39.5523 9 39V15Z"/>
                <path d="M17 15C17 14.4477 17.4477 14 18 14C18.5523 14 19 14.4477 19 15V39C19 39.5523 18.5523 40 18 40C17.4477 40 17 39.5523 17 39V15Z"/>
                <path d="M25 15C25 14.4477 25.4477 14 26 14C26.5523 14 27 14.4477 27 15V39C27 39.5523 26.5523 40 26 40C25.4477 40 25 39.5523 25 39V15Z"/>
                <path d="M33 15C33 14.4477 33.4477 14 34 14C34.5523 14 35 14.4477 35 15V39C35 39.5523 34.5523 40 34 40C33.4477 40 33 39.5523 33 39V15Z"/>
            </g>
            
            <g style={{opacity: state}} className={`fill-current ${fillTo}`}>
                <path d="M9 15C9 14.4477 9.44772 14 10 14C10.5523 14 11 14.4477 11 15V39C11 39.5523 10.5523 40 10 40C9.44772 40 9 39.5523 9 39V15Z"/>
                <path d="M17 15C17 14.4477 17.4477 14 18 14C18.5523 14 19 14.4477 19 15V39C19 39.5523 18.5523 40 18 40C17.4477 40 17 39.5523 17 39V15Z"/>
                <path d="M25 15C25 14.4477 25.4477 14 26 14C26.5523 14 27 14.4477 27 15V39C27 39.5523 26.5523 40 26 40C25.4477 40 25 39.5523 25 39V15Z"/>
                <path d="M33 15C33 14.4477 33.4477 14 34 14C34.5523 14 35 14.4477 35 15V39C35 39.5523 34.5523 40 34 40C33.4477 40 33 39.5523 33 39V15Z"/>
            </g>
         
            <g className={`fill-current ${outline}`}>
                <rect x="21" y={8- 6*state} width="2" height={2+6*state} rx="1"/>
                <rect x="29" y={8- 6*state} width="2" height={2+6*state} rx="1"/>
                <rect x="12" y={8- 6*state} width="2" height={2+6*state} rx="1"/>
            </g>
        </svg>
    </div>
};

Heating.defaultProps = {
    outline: 'text-grey-700',
    fillFrom: 'text-blue-500',
    fillTo: 'text-red-500',
    base: 'text-blue-500'
  };