import './style.css'
import total, {
  sub
} from './components/app'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

console.log(sub(2, 5));
console.log(total(2, 5));