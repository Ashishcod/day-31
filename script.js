const sec = document.getElementById("sec");
const start = document.getElementById("start");
const timer = document.getElementById("timer");

start.addEventListener('click', function () {
    obj = setInterval(() => {
        timer.innerText = sec.value;
        if (sec.value < 0) {
            timer.innerText = "-ve time not supported";
            clearInterval(obj);
        }
        if (sec.value == 0) {
            timer.innerText = "Time Out";
            sec.value += 1;
            clearInterval(obj);
        }
        sec.value--;
    }, 1000);
});

