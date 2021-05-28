import React from 'react';
import { colorClasses } from './IconStateHumidity.config'

export function IconStateHumidity({state, colorClass}) {
    state = Math.max(0, state);
    state = Math.min(state, 100);
    state = (state / 100).toFixed(2)

    let { outline, base, fill } = colorClasses[colorClass] || colorClasses.default;

    return <div>
        <svg width="44" height="46" viewBox="0 0 44 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={`fill-current ${base}`} d="M4 23C4 26.866 7.13401 30 11 30H33C36.866 30 40 26.866 40 23C40 19.134 36.866 16 33 16C32.1655 16 31.3651 16.146 30.6229 16.4139C29.5118 12.7038 26.0717 10 22 10C17.9283 10 14.4882 12.7038 13.3771 16.4139C12.6349 16.146 11.8345 16 11 16C7.13401 16 4 19.134 4 23Z" fill="white"/>
            <path className={`fill-current ${outline}`} d="M30.6229 16.4139L29.665 16.7008L29.9682 17.7134L30.9625 17.3545L30.6229 16.4139ZM13.3771 16.4139L13.0375 17.3545L14.0318 17.7134L14.335 16.7008L13.3771 16.4139ZM11 29C7.68629 29 5 26.3137 5 23H3C3 27.4183 6.58172 31 11 31V29ZM33 29H11V31H33V29ZM39 23C39 26.3137 36.3137 29 33 29V31C37.4183 31 41 27.4183 41 23H39ZM33 17C36.3137 17 39 19.6863 39 23H41C41 18.5817 37.4183 15 33 15V17ZM30.9625 17.3545C31.5973 17.1254 32.2829 17 33 17V15C32.0481 15 31.1329 15.1667 30.2834 15.4733L30.9625 17.3545ZM22 11C25.6178 11 28.6771 13.4022 29.665 16.7008L31.5809 16.127C30.3466 12.0054 26.5256 9 22 9V11ZM14.335 16.7008C15.3229 13.4022 18.3822 11 22 11V9C17.4744 9 13.6534 12.0054 12.4191 16.127L14.335 16.7008ZM11 17C11.7171 17 12.4027 17.1254 13.0375 17.3545L13.7166 15.4733C12.8671 15.1667 11.9519 15 11 15V17ZM5 23C5 19.6863 7.68629 17 11 17V15C6.58172 15 3 18.5817 3 23H5Z" fill="black"/>
            <g>
                <path className={`fill-current ${outline}`} transform-origin="top" transform={`translate(${8 - 8*state} ${2 - 15.2 * state}) scale(${1 + 0.7 * state} ${1 + 0.72 * state})`} d="M27 28.3333C27 30.9093 24.7614 33 22 33C19.2386 33 17 30.9093 17 28.3333C17 24.4673 22 19 22 19C22 19 27 24.4673 27 28.3333Z" fill="#0B0B1C"/>
                <path className={`fill-current ${base}`} transform-origin="top" transform={`translate(${8 - 8*state} ${2 - 22.8 * state}) scale(${1 + 1 * state})`} d="M25 28C25 29.656 23.6569 31 22 31C20.3431 31 19 29.656 19 28C19 25.5147 22 22 22 22C22 22 25 25.5147 25 28Z" fill="white"/>
                <path style={{opacity: state}} className={`fill-current ${fill}`} transform-origin="top" transform={`translate(${8 - 8*state} ${2 - 22.8 * state}) scale(${1 + 1 * state})`} d="M25 28C25 29.656 23.6569 31 22 31C20.3431 31 19 29.656 19 28C19 25.5147 22 22 22 22C22 22 25 25.5147 25 28Z" fill="#707FDC"/>
            </g>
        </svg>
    </div>
};


IconStateHumidity.defaultProps = {
    state: 25,
    colorClass: 'default'
  };