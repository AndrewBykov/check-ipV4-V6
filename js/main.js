const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const res = document.querySelector('#result')

btn.addEventListener('click', answearText)

function checkIpAdress(ip) {
    const str = ip.value
    const v4 = /\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/
    const v6 = /\b(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}\b/
    
    
    const checkV4 = v4.test(str) ? true: false
    const checkV6 = v6.test(str) ? true: false

    if (checkV4) {
        return `У вас IPv4`
    } else if (checkV6) {
        return `У вас IPv6`
    } else {
        return `Такого IP адреса не существует`
    }
}


function answearText() {
    const result = checkIpAdress(input)

    res.innerHTML = result
}





