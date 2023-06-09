// Import our custom CSS
import '../scss/styles.scss'

// Import only the Bootstrap components we need
import { Popover } from 'bootstrap';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })
let datatime =new Date(); 
console.log(`今天是 ${datatime.getFullYear()}年${datatime.getMonth()+1}月${datatime.getDate()}日
祝各位考生们高考顺利，金榜题名！
`)