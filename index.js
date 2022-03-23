function time(){
    const time = new Date();
let hour = time.getHours();
let minute = time.getMinutes();
let second = time.getSeconds();

let date = `${hour} : ${minute} : ${second}`;
// console.log(date);

document.getElementById("clock").innerText=time
}

// currentTime()
setInterval(time, 1000)



