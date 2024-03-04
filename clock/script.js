function clock () {
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    document.getElementById('display-time').innerText = hours + ":" + minutes + ":" + seconds;
}

setInterval(clock, 1000);
