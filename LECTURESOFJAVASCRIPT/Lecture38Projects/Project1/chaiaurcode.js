// selecting random colors

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
};

let intervalId; // declaring this in global scope because we have to access this in the stop function
const startChangingColor = function () {
    intervalId=setInterval(changeBgColor,1000) // it will automatically change the bg color when u click on the start button 
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor();
    }
};


const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId=null;
};

document.querySelector('#start').addEventListener
('click', startChangingColor);

document.querySelector('#stop').addEventListener
('click', stopChangingColor);

// project is complete 



// modifying code because if once intervalId work's complete we have to give null value to it to free the space
// same code , little bit of change

// const randomColor = function () {
//     const hex = '0123456789ABCDEF';
//     let color = '#';

//     for (let i = 0; i < 6; i++) {
//         color += hex[Math.floor(Math.random() * 16)];
//     }

//     return color;
// };

// let intervalId; // declaring this in global scope because we have to access this in the stop function
// const startChangingColor = function () {
     if(!intervalId) {
             intervalId=setInterval(changeBgColor,1000)
     }
//     function changeBgColor(){
//         document.body.style.backgroundColor=randomColor();
//     }
// };


// const stopChangingColor = function () {
//     clearInterval(intervalId);
       intervalId=null;
// };

// document.querySelector('#start').addEventListener
// ('click', startChangingColor);

// document.querySelector('#stop').addEventListener
// ('click', stopChangingColor);