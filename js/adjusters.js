let impMesCon = document.getElementById("importantMessageContainer");
const impMesConAdjuster = () => {
    impMesCon.style.display = 'block';
    let leftSpace = (impMesCon.parentElement.offsetWidth - impMesCon.offsetWidth) * 0.5;
    impMesCon.style.left = `${leftSpace}px`;
}
const setChoiceSize = () => {
    for(let element of choices){
        let val = element.parentElement.offsetWidth;
        element.style.width = `${0.2 * val}px`;
        element.style.height = `${0.2 * val}px`;
    }
}
const setDisplayerSize = () => {
    let displayer = document.getElementsByClassName('displayer');
    for(let element of displayer){
        let val = Math.min(element.parentElement.offsetHeight * 0.5, element.parentElement.offsetWidth * 0.25);
        element.style.width = `${val}px`;
        element.style.height = `${val}px`;
    }
}
const setScoreBoardSize = () => {
    let scoreBoard = document.getElementsByClassName('scoreBoard');
    for(let element of scoreBoard){
        let val = Math.min(element.parentElement.offsetHeight * 0.5, element.parentElement.offsetWidth * 0.25);
        element.style.width = `${val}px`;
        element.style.height = `${val}px`;
    }
}
const setAllSquareSizes = () => {
    setChoiceSize();
    setDisplayerSize();
    setScoreBoardSize();
}
window.addEventListener('resize', () => {
    if(impMesCon.style.display == 'block'){
        impMesConAdjuster();
    }
    setAllSquareSizes();
})
setAllSquareSizes();