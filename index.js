const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number")




function checkBirthdayIsLucky() {
    const dateB = dateOfBirth.value;
    const sum = calculateSum(dateB);

    if (sum && luckyNumber.value) {
        if (sum % luckyNumber.value === 0) {
            document.getElementById("result").innerHTML = "Your birthday is lucky!";
        } else {
            document.getElementById("result").innerHTML = "Your birthday is not lucky!";
        }
    } else
        document.getElementById("result").innerHTML = "Please enter all the values";


}

function calculateSum(dateB) {
    dateB = dateB.replaceAll("-", "");
    let sum = 0;
    for (let index = 0; index < dateB.length; index++) {
        sum += Number(dateB.charAt(index))
    }

    return sum;

}

checkNumberButton.addEventListener('click', checkBirthdayIsLucky)

