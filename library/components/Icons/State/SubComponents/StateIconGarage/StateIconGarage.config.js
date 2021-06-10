import { colorClasses as iconStateColorClasses } from '../StateIcon.config'

let cc = { ...iconStateColorClasses }
cc.default = {
    outline: 'text-gray-700',
    base: 'text-white',
    fillLight: 'text-gray-300'
}

export let colorClasses = cc