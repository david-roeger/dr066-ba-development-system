import { colorClasses as iconStateColorClasses } from '../IconState.config'

let cc = { ...iconStateColorClasses }
cc.default = {
    outline: 'text-gray-700',
    base: 'text-white',
    fill: 'text-yellow-500'
}


export let colorClasses = cc