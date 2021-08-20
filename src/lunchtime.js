import get from 'lodash.get'
import test from './test'

function foo() {
    console.log(get({ a: 1 }, 'a'))
    console.log('foo')
    test()
}

export default foo