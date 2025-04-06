const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const audio = new Audio("water.mp3");

// Yes button
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Walang isda dito nasa 'no' ";
    gif.style.width = "380px";
    audio.play();
    yesBtn.remove();
    gif.remove();

    const myImage1 = new Image(100, 200);
    const myImage2 = new Image(100, 200);
    const myImage3 = new Image(100, 200);
    const myImage4 = new Image(100, 200);

    myImage1.src = 'palo.jpg';
    myImage2.src = 'pic1.jpg';
    myImage3.src = 'pic2.jpg';
    myImage4.src = 'pic3.jpg';

    const imageContainer = document.querySelector(".image-container");
    imageContainer.appendChild(myImage1);
    imageContainer.appendChild(myImage2);
    imageContainer.appendChild(myImage3);
    imageContainer.appendChild(myImage4);
    
    // For mobile 
    if (window.innerWidth <= 800) {
        gif.style.width = "50px";
    }
});

noBtn.addEventListener("click", () => {
    window.open("https://kantotin.com/sinulit-ni-mario-ang-minsanang-oportunidad/", "_blank");
});
