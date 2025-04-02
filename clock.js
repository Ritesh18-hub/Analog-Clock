let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');

function displayTime() {
    let date = new Date();  // ✅ Fixed the case

    let hh = date.getHours();
    let mm = date.getMinutes();  // ✅ Fixed method name
    let ss = date.getSeconds();  // ✅ Fixed method name

    let hRotate = 30 * hh + ss / 120;
    let mRotate = 6 * mm + ss / 10;
    let sRotate = 6 * ss;

    // ✅ Corrected variable names
    hour.style.transform = `rotate(${hRotate}deg)`;
    minute.style.transform = `rotate(${mRotate}deg)`;
    second.style.transform = `rotate(${sRotate}deg)`;
}

// Call displayTime every 1000ms (1 second)
setInterval(displayTime, 1000);
