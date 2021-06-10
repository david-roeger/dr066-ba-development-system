


import React from 'react';
import { colorClasses } from './StateIconCamera.config'

export function StateIconCamera({state, colorClass}) {

    let { outline, base, fillLight, fillDark } = colorClasses[colorClass] || colorClasses.default;

    return <div>
        <svg width="44" height="46" viewBox="0 0 44 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={`fill-current ${fillLight}`} d="M23 13H9C6.79086 13 5 14.7909 5 17V29C5 31.2091 6.79086 33 9 33H23C25.2091 33 27 31.2091 27 29V17C27 14.7909 25.2091 13 23 13Z" fill="#DADDE3"/>
            <path className={`fill-current ${fillLight}`} d="M31.3501 18.3883L37.3501 13.2581C37.7699 12.8992 38.4011 12.9485 38.76 13.3682C38.9149 13.5494 39 13.7798 39 14.0181V31.982C39 32.5342 38.5523 32.982 38 32.982C37.762 32.982 37.5317 32.897 37.3507 32.7425L31.3507 27.6201C31.1282 27.4301 31 27.1522 31 26.8596V19.1484C31 18.856 31.1279 18.5783 31.3501 18.3883Z" fill="#DADDE3"/>
        
            { state && 
                <g>
                    <circle className={`fill-current ${base} animate-pulse`} x="16" y="23" cx="16" cy="23" r="4" fill="#F96D5E"/>
                    <circle className={`fill-current ${fillDark} animate-pulse`} x="16" y="23" cx="16" cy="23" r="2" fill="#F96D5E"/>
                    <path className={`fill-current ${outline}`} d="M16 29C12.6863 29 10 26.3137 10 23C10 19.6863 12.6863 17 16 17C19.3137 17 22 19.6863 22 23C22 26.3137 19.3137 29 16 29ZM16 27C18.2091 27 20 25.2091 20 23C20 20.7909 18.2091 19 16 19C13.7909 19 12 20.7909 12 23C12 25.2091 13.7909 27 16 27Z" fill="#3A3A3A"/>
                </g>
            }

            <path className={`fill-current ${outline}`} d="M8 14C6.89543 14 6 14.8954 6 16V30C6 31.1046 6.89543 32 8 32H24C25.1046 32 26 31.1046 26 30V16C26 14.8954 25.1046 14 24 14H8ZM8 12H24C26.2091 12 28 13.7909 28 16V30C28 32.2091 26.2091 34 24 34H8C5.79086 34 4 32.2091 4 30V16C4 13.7909 5.79086 12 8 12Z" fill="#3A3A3A"/>
            <path className={`fill-current ${outline}`} d="M32 19.609V26.3984C32 26.6911 32.1282 26.969 32.3507 27.159L37.5052 31.5595C37.6312 31.6671 37.8206 31.6522 37.9282 31.5262C37.9745 31.4718 38 31.4028 38 31.3314V14.6693C38 14.5036 37.8657 14.3693 37.7 14.3693C37.6285 14.3693 37.5594 14.3949 37.505 14.4413L32.3501 18.849C32.1279 19.039 32 19.3167 32 19.609ZM36.7003 12.498C37.5398 11.7802 38.8023 11.8788 39.5201 12.7184C39.8298 13.0806 40 13.5415 40 14.0181V31.9819C40 33.0865 39.1046 33.9819 38 33.9819C37.5239 33.9819 37.0635 33.8121 36.7014 33.503L30.7014 28.3807C30.2563 28.0007 30 27.4448 30 26.8596V19.1484C30 18.5637 30.2559 18.0083 30.7003 17.6283L36.7003 12.498Z" fill="#3A3A3A"/>

        </svg>

    </div>
};

StateIconCamera.defaultProps = {
    state: false,
    colorClass: 'default'
  };