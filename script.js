function solve(number) {
    let calculate = eval(number);
    return calculate;
}


let screen = document.getElementById('screen');
let numbers = document.getElementsByClassName('result-text');

//calculater script 1 by clicking numbers
Array.from(numbers).forEach((element) => {
    element.addEventListener('click', (e) => {
        let values = e.target.innerText;
        // alert("you pressed on: "+values)
        if (values != "C" && values != "=" && values != "X") {
            screen.value += values;
        } else if (values == "C") {
            screen.value = "0";
        } else if (values == "=") {
            let result = solve(screen.value);
            screen.value = result;
        }
    })
})

//calculate script 2 by keyboard buttons
screen.addEventListener('click', () => {
    document.onkeypress = (press) => {
        // console.log(press.keyCode)
        if(press.keyCode == 13) {
            let answer = solve(screen.value)
            screen.value = answer;
        }
    }
})
