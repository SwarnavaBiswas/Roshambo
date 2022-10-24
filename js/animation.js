let choices = document.getElementsByClassName("choices");
choices = Array.from(choices);
for(let element of choices){
    element.addEventListener('mouseover', ()=>{
        if(currentStatus == 0){
            element.style.transform = "scale(1.2)";
        }
    })
    element.addEventListener('mouseout', ()=>{
        element.style.transform = "scale(1)";
    })
    element.addEventListener('click', ()=>{
        element.style.transform = "scale(1)";
        if(currentStatus == 0){
            lastUserChoice = element.id;
            displayChoiceSelected(document.getElementById("userChoiceDisplayer"), `url(static/${element.id}.png)`);
            // let displayer = document.getElementById("displayer");
            // displayer.style.display = "block";
            
            commitChoice();
        }
    })

}