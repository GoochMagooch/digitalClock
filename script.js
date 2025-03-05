let am = document.getElementById('am')
let pm = document.getElementById('pm')
let date = document.getElementById('date')
let mTime = document.getElementById('mTimeBtn')
let display = document.getElementById('clock')

mTimeBool = false

// Function to update the clock
function updateClock() {
    let now = new Date()
    // Extract date components
    let month = now.getMonth() + 1 // Months are zero-based
    let day = now.getDate()
    let year = now.getFullYear()

    let hour = now.getHours()
    let minute = now.getMinutes()
    minute = minute < 10 ? '0' + minute : minute

    // Switch time between 12 and 24 hr format
    if (!mTimeBool) {
        // Convert to 12-hour format
        let amPm = hour >= 12 ? 'PM' : 'AM'
        hour = hour % 12 || 12 // Convert 0 to 12 for AM

        am.style.color = amPm === 'AM' ? 'yellow' : 'white'
        pm.style.color = amPm === 'PM' ? 'yellow' : 'white'

        display.textContent = `${hour}:${minute}`
    } else {
        // 24-hour format
        am.style.color = 'white'
        pm.style.color = 'white'

        display.textContent = `${hour}:${minute}`
    }

    date.textContent = `${month}/${day}/${year}`
}

mTime.addEventListener('click', function() {
    mTimeBool = !mTimeBool
    updateClock()
})

setInterval(updateClock, 1000)

updateClock()