let inputs = document.querySelectorAll('.form-check-input')
let answers = document.querySelectorAll('.answer')




function toggleElementDisplay(){
for (let i = 0; i < inputs.length; i++) {

    if(inputs[i].checked){
       document.querySelector(`.${inputs[i].value}`).style.display = "block"
    }else if(inputs[i].checked == false){
        document.querySelector(`.${inputs[i].value}`).style.display = ""
    }   
}
}

