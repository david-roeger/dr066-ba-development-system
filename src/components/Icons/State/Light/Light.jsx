

import React from 'react';

export function Light({state, outline, base, fill}) {
    state = Math.max(0, state);
    state = Math.min(state, 100);
    state = (state / 100).toFixed(2)
    
    return <div>
        <svg width="44" height="46" viewBox="0 0 44 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={`fill-current ${outline}`} d="M29 31.7479C32.0281 29.5695 34 26.0151 34 22C34 15.3726 28.6274 10 22 10C15.3726 10 10 15.3726 10 22C10 26.0151 11.9719 29.5695 15 31.7479V35C15 37.2091 16.7909 39 19 39H25C27.2091 39 29 37.2091 29 35V31.7479Z" fill="#3A3A3A"/>
            <path className={`fill-current ${outline}`} d="M17 42C17 41.4477 17.4477 41 18 41H26C26.5523 41 27 41.4477 27 42C27 42.5523 26.5523 43 26 43H18C17.4477 43 17 42.5523 17 42Z" fill="#3A3A3A"/>
            <path className={`fill-current ${outline}`} d="M20 44C19.4477 44 19 44.4477 19 45C19 45.5523 19.4477 46 20 46H24C24.5523 46 25 45.5523 25 45C25 44.4477 24.5523 44 24 44H20Z" fill="#3A3A3A"/>
            <path className={`fill-current ${base}`} d="M27 30.6622C29.989 28.9331 32 25.7014 32 22C32 16.4772 27.5228 12 22 12C16.4772 12 12 16.4772 12 22C12 25.7014 14.011 28.9331 17 30.6622V35C17 36.1046 17.8954 37 19 37H25C26.1046 37 27 36.1046 27 35V30.6622Z" fill="white"/>
            <path style={{opacity: state}} className={`fill-current ${fill}`} d="M27 30.6622C29.989 28.9331 32 25.7014 32 22C32 16.4772 27.5228 12 22 12C16.4772 12 12 16.4772 12 22C12 25.7014 14.011 28.9331 17 30.6622V35C17 36.1046 17.8954 37 19 37H25C26.1046 37 27 36.1046 27 35V30.6622Z" fill="white"/>

            <rect className={`fill-current ${outline}`} x={6-6*state} y="21" width={2+6*state} height="2" rx="1" fill="#3A3A3A"/>
            <rect className={`fill-current ${outline}`} x="36" y="21" width={2+6*state} height="2" rx="1" fill="#3A3A3A"/>
            <rect className={`fill-current ${outline}`} x="21" y={6-6*state} width="2" height={2+6*state} rx="1" fill="#3A3A3A"/>

            <rect className={`fill-current ${outline}`} x="31" y="11.4142" width={2+6*state} height="2" rx="1" transform="rotate(-45 31 11.4142)" fill="#3A3A3A"/>
            <rect className={`fill-current ${outline}`} x={11.4142-6*state} y="10" width={2+6*state} height="2" rx="1" transform="rotate(45 11.4142 10)" fill="#3A3A3A"/>
        </svg>
    </div>
};

Light.defaultProps = {
    state: 25,
    outline: 'text-gray-700',
    base: 'text-white',
    fill: 'text-yellow-500'
  };


/*
<svg width="44" height="46" viewBox="0 0 44 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29 31.7479C32.0281 29.5695 34 26.0151 34 22C34 15.3726 28.6274 10 22 10C15.3726 10 10 15.3726 10 22C10 26.0151 11.9719 29.5695 15 31.7479V35C15 37.2091 16.7909 39 19 39H25C27.2091 39 29 37.2091 29 35V31.7479Z" fill="#3A3A3A"/>
<path d="M17 42C17 41.4477 17.4477 41 18 41H26C26.5523 41 27 41.4477 27 42C27 42.5523 26.5523 43 26 43H18C17.4477 43 17 42.5523 17 42Z" fill="#3A3A3A"/>
<path d="M20 44C19.4477 44 19 44.4477 19 45C19 45.5523 19.4477 46 20 46H24C24.5523 46 25 45.5523 25 45C25 44.4477 24.5523 44 24 44H20Z" fill="#3A3A3A"/>
<path d="M27 30.6622C29.989 28.9331 32 25.7014 32 22C32 16.4772 27.5228 12 22 12C16.4772 12 12 16.4772 12 22C12 25.7014 14.011 28.9331 17 30.6622V35C17 36.1046 17.8954 37 19 37H25C26.1046 37 27 36.1046 27 35V30.6622Z" fill="white"/>

<rect x="36" y="21" width="2" height="2" rx="1" fill="#3A3A3A"/>
<rect x="6" y="21" width="2" height="2" rx="1" fill="#3A3A3A"/>

<rect x="21" y="6" width="2" height="2" rx="1" fill="#3A3A3A"/>

</svg>


*/

