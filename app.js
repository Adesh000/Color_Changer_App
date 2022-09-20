let btn = document.getElementById('button')
let box = document.getElementById('canvas')

//function to generate a color code
const getHexCode = () => {
    let str = '0123456789ABCDEF';
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
        hexCode = hexCode + str[Math.floor(Math.random()*16)]
    }
    return hexCode;
}

// function to use in addEventlistener and it calls 'getHexCode' function
const changeColor = () => {
    box.style.backgroundColor = getHexCode();
}

//event listener on button to change background color of box
btn.addEventListener('click', changeColor)