// consts

const contentEl = document.getElementById("content-el");
const contentElTwo = document.getElementById("content-el-two");

const firstPasswordSuggestion = document.getElementById("content-el");

const secondPasswordSuggestion = document.getElementById("content-el-two");

const buttonEl = document.getElementById("btn");
const arrays = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "@", "#", "$", "%", "^", "&", "*", "/"];

function clearPreviouslyGeneratedPassword(){
    contentEl.textContent = "";
    contentElTwo.textContent = ""; 
};

function getFirstRandomThirteenLetterPassword(){
    for (let i = 0; i < 13; i ++){

        let myObject = {

        randomIndex1 : Math.floor(Math.random()*69),
        randomIndex2 : Math.floor(Math.random()*69),
        randomIndex3 : Math.floor(Math.random()*69),
        randomIndex4 : Math.floor(Math.random()*69),
        randomIndex5 : Math.floor(Math.random()*69), 
        randomIndex6 : Math.floor(Math.random()*69),
        randomIndex7 : Math.floor(Math.random()*69),
        randomIndex8 : Math.floor(Math.random()*69),
        randomIndex9 : Math.floor(Math.random()*69),
        randomIndex10 : Math.floor(Math.random()*69),
        randomIndex11 : Math.floor(Math.random()*69),
        randomIndex12 : Math.floor(Math.random()*69),
        randomIndex13 : Math.floor(Math.random()*69)
    
    };

    let randomIndeces = Object.values(myObject);
    let thirteenIndeces = randomIndeces[i];
    contentEl.textContent += arrays[thirteenIndeces];
    
}  
}

function getSecondRandomThirteenLetterPassword(){
    for (let i = 0; i < 13; i ++){

        let myObject = {

        randomIndex1 : Math.floor(Math.random()*69),
        randomIndex2 : Math.floor(Math.random()*69),
        randomIndex3 : Math.floor(Math.random()*69),
        randomIndex4 : Math.floor(Math.random()*69),
        randomIndex5 : Math.floor(Math.random()*69), 
        randomIndex6 : Math.floor(Math.random()*69),
        randomIndex7 : Math.floor(Math.random()*69),
        randomIndex8 : Math.floor(Math.random()*69),
        randomIndex9 : Math.floor(Math.random()*69),
        randomIndex10 : Math.floor(Math.random()*69),
        randomIndex11 : Math.floor(Math.random()*69),
        randomIndex12 : Math.floor(Math.random()*69),
        randomIndex13 : Math.floor(Math.random()*69)
    
    };

    let randomIndeces = Object.values(myObject);
    let thirteenIndeces = randomIndeces[i];
    contentElTwo.textContent += arrays[thirteenIndeces];
    
}  
}


function generatePassword(){
    clearPreviouslyGeneratedPassword();
    getFirstRandomThirteenLetterPassword();
    getSecondRandomThirteenLetterPassword();
}


buttonEl.addEventListener("click", function(){
        generatePassword()
})



document.addEventListener('click', function(e){
    if (e.target.id === "content-el"){

            const textarea = document.createElement('textarea');
            
            textarea.value = firstPasswordSuggestion.innerText;
            
            document.body.appendChild(textarea);
            
            textarea.select();
            
            document.execCommand('copy');
            
            document.body.removeChild(textarea);
            
            alert('Text copied to clipboard!');
        } 
            else if(e.target.id === "content-el-two"){

                const textarea = document.createElement('textarea');
                
                textarea.value = secondPasswordSuggestion.innerText;
                
                document.body.appendChild(textarea);
                
                textarea.select();
                
                document.execCommand('copy');
                
                document.body.removeChild(textarea);
                
                alert('Text copied to clipboard!');
            }
})


