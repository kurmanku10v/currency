let transSumEl = document.getElementById('currency')
let mountEl = document.getElementById('mount')
let sumEl = document.getElementById('sum')
let resultEl = document.getElementById('result')

const sumCurrent = () => {
    let transEl = transSumEl.value
    let mount = mountEl.value
    
    let resEl = transEl * mount
    
    resultEl.innerHTML = 'Суммасы: ' + resEl.toFixed(2)
}

sumEl.addEventListener('click',sumCurrent)