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
    // Set hour to 12 when it's 0 (midnight)
    hour = hour === 0 ? 12 : hour;

    let minute = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();

    let seconds = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();

    let pmoram = now.getHours() > 12 ? "PM" : "AM";

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday,", "Thursday", "Friday", "Saturday"];
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    document.getElementById("time").innerHTML = "Time is currently: " + hour + ":" + minute + ":" + seconds +  " " + pmoram ;
    function getOrdinal(number) {
        var suffix = "th";
        if (number % 10 === 1 && number % 100 !== 11) {
            suffix = "st";
        } else if (number % 10 === 2 && number % 100 !== 12) {
            suffix = "nd";
        } else if (number % 10 === 3 && number % 100 !== 13) {
            suffix = "rd";
        }
        return number + suffix;
    }
    document.getElementById("today").innerHTML = days[now.getDay()] + ", " +monthNames[now.getMonth()] + " " + getOrdinal(now.getDate());
}

updateClock();

setInterval(updateClock, 1000);



const navEL = document.querySelector('.nav');
const hamburgerEL = document.querySelector('.hamburger');

hamburgerEL.addEventListener('click', () => {
    navEL.classList.toggle("nav--open");
    hamburgerEL.classList.toggle("hamburger--open");
});

navEL.addEventListener("click", () => {
    navEL.classList.remove("nav--open");
    hamburgerEL.classList.remove("hamburger--open");
})