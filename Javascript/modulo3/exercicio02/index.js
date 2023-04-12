import calculate from "./calculate.js"
import { changeTheme } from "./theme.js"
import { keyBtn, clear, keydown, copy } from "./functions.js"


document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click', keyBtn)
})

document.getElementById('clear').addEventListener('click', clear)
input.addEventListener('keydown', keydown)
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('copyToClipboard').addEventListener('click', copy)
document.getElementById('themeSwitcher').addEventListener('click', changeTheme)