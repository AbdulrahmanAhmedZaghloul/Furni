let currentValue =0 ;

export function minus() {
    for (let i = 0; i < 1; i++) {
        currentValue--;
    }
    document.getElementById('result').innerText = currentValue;
    if (currentValue < 0) {
        document.getElementById('result').innerText = "1";
    }
    console.log("jkljjkl");
}


export function plus() {
    for (let i = 0; i < 1; i++) {
        currentValue++;
    }
    document.getElementById('result').innerText = currentValue;
    
    console.log("2131");
}

addEventListener("click" ,plus)

