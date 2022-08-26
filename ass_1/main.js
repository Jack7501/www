const adviseContent = {
    childhood_vaccination_shots: ' A disclaimer that multiple vaccines are normally administered in combination and may cause the child to be sluggish or feverous for 24 – 48 hours afterwards.',
    influenza_shot: 'The best time to get vaccinated is in April and May each year for optimal protection over the winter months.',
    covid_booster_shot: 'Advice that everyone should arrange to have their third shot as soon as possible and adults over the age of 30 should have their fourth shot to protect against new variant strains.',
    blood_test: 'That some tests require some fasting ahead of time and that a staff member will advise them on this prior to the appointment.',
}

let reasonEle = document.getElementById('reason')
reasonEle.addEventListener('change', function (e) {
    let value = e.target.value
    
    document.getElementsByClassName('advice')[0].innerText = adviseContent[value]
})

let pidEle = document.getElementById('pid')
pidEle.addEventListener('change', function (e) {
    let value = e.target.value
    const reg = /^[A-Z]{2}[0-9]+[A-Z]{1}$/
    if (reg.test(value)) {
        let arr = value.slice(2, -1).split('')
        let sum = 0
        arr.forEach(item => {
            sum += Number(item)
        })
        let charEnd = v.slice(-1)
        if (sum % 26 !== charEnd.charCodeAt() - 64) {
            alert('Patient ID is error')
        }
    } else {
        alert('Patient ID is error')
    }
})
