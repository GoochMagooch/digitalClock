let am = document.getElementById('am')
let pm = document.getElementById('pm')
let date = document.getElementById('date')
let mTime = document.getElementById('mTimeBtn')
let display = document.getElementById('clock')

mTimeBool = false

mTimeBtn.addEventListener('click', function() {
    if (mTimeBool === false) {
        display.textContent = "22:55"
        mTimeBool = true
    } else {
        mTimeBool = false
        display.textContent = "10:55"
    }
})