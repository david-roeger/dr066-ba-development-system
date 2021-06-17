import { colorClasses as iconStateColorClasses } from '../StateIcon.config'

let cc = { ...iconStateColorClasses }
cc.default = {
    outline: 'text-black',
    base: 'text-white',
    base: 'text-white',
    fillFrom: 'text-blue-500',
    fillTo: 'text-red-500'
}

export let colorClasses = cc