window.addEventListener("load", () => {
  const submitButton = document.querySelector('#submit-button')
  const height = document.querySelector('#height');
  const heightUnit = document.querySelector('#height-unit');
  const weight = document.querySelector('#weight');
  const weightUnit = document.querySelector('#weight-unit')
  const formula = document.querySelector('#formula');
  const bodyFat = document.querySelector('#body-fat');
  const age = document.querySelector('#age');
  const bmrDisplay = document.querySelector('#bmr-display');
  
  
  formula.addEventListener('change', () => {
    if (formula.value == 'katch-mcardle'){
      bodyFat.disabled = false;
    } else {
      bodyFat.disabled = true;
    }
  })

  heightUnit.addEventListener('change', () => {
    if (heightUnit.value == 'cm') {
      height.value = Math.round(2.54*height.value)
    } else {
      height.value = Math.round(height.value/2.54)
    }
  })

  weightUnit.addEventListener('change', () => {
    if(weightUnit.value == 'kg') {
      weight.value = Math.round(weight.value/2.205)
    } else {
      weight.value = Math.round(weight.value*2.205)
    }
  })

  submitButton.addEventListener("click", () => {

    let validCount = 0

    if(!height.value){
      height.setCustomValidity("Please enter your height")
    } else {
      height.setCustomValidity("")
      validCount+=1
    }

    console.log(height.value)

    if(!weight.value){
      weight.setCustomValidity("Please enter your weight")
    } else {
      weight.setCustomValidity("")
      validCount+=1
    }

    if(!bodyFat.value && !bodyFat.disabled){
      bodyFat.setCustomValidity("Please enter your body fat %")
    } else {
      bodyFat.setCustomValidity("")
      validCount+=1
    }

    if(!age.value){
      age.setCustomValidity("Please enter your age")
    } else {
      age.setCustomValidity("")
      validCount += 1
    }

    if (validCount == 4) {
     
      let bmr;

      // TODO Get value of gender and complete this
      if(formula.value = 'mifflin-st') {
        bmr = 10*weight.value + 6.25*height.value - 5*age.value + 5
        
      } else if (formula.value = 'harris-benedict') {
        bmr = 1000
      }

      bmrDisplay.innerText = bmr

      document.querySelector("#results").classList.remove('hidden')
    }

  })
})
