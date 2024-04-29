const cardContainer = document.querySelector('.card-container');
const adviceId = document.querySelector('.advice-id');
const adviceContainer = document.querySelector('.advice-container');
const adviceButton = document.querySelector('.advice-button');

const changeAnviceCard = async () => {
    const serverAdvice = await fetch ('https://api.adviceslip.com/advice');
    const adviceData = await serverAdvice.json();
    const advice = adviceData.slip.advice;
    const idAdvice = adviceData.slip.id;

    adviceId.innerText = `ADVICE #${idAdvice}`;
    adviceContainer.innerText = advice;
    
};


adviceButton.addEventListener('click',changeAnviceCard); 