// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// get time/date

function updateClock() {

    const now = new Date(); //current date

    let hour = now.getHours() % 12; // get current hour

    let minute = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();

    let seconds = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();

    let pmoram = now.getHours() > 12 ? "PM" : "AM";



    document.getElementById("time").innerHTML = "Time is currently: " + hour + ":" + minute + ":" + seconds +  " " + pmoram ;
}

updateClock();

setInterval(updateClock, 1000);



function navBar() {
    var x = document.getElementById("ok");
    if (x.style.display === "block") {
        x.style.display = none;
    }
    else {
        x.style.display = "block";
    }
}