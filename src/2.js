import './x.less'
import './z.styl'
import png from './shining.png'

export default 'hello world'
const div = document.getElementById('test')
div.innerHTML = `
<img src='${png}'>
`

const button = document.createElement('button')
button.innerText = 'lazy-loading'
div.appendChild(button)
button.onclick = () => {
    
    const promise = import('./lazy')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => { console.log('failed') })
}
