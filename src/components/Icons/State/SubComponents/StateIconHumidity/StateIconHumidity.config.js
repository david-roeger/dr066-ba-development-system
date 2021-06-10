import { colorClasses as iconStateColorClasses } from '../StateIcon.config'

let cc = { ...iconStateColorClasses }
cc.default = {
    outline: 'text-gray-700',
    base: 'text-white',
    fill: 'text-blue-500'
}

export let colorClasses = cc