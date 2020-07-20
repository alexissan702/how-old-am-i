let birthday = document.getElementById("birthday");
let output = document.getElementById("output");
let button = document.getElementById("button");
today = new Date ();

button.addEventListener("click", run);

function run() {
    let birthDate = new Date(birthday.value);
    console.log(birthDate);
    console.log(today);
    let timeLived = today - birthDate;
    timeLived = timeLived/1000/60/60/24;
    console.log(timeLived);
    output.innerHTML= timeLived;

}