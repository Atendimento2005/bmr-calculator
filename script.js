window.addEventListener("load", () => {
  const submitButton = document.querySelector('#submit-button')
  const height = document.querySelector('#height');
  const heightUnit = document.querySelector('#height-unit');
  const weight = document.querySelector('#weight');
  const weightUnit = document.querySelector('#weight-unit')
  const formula = document.querySelector('#formula');
  const bodyFat = document.querySelector('#body-fat');
  const age = document.querySelector('#age');  
  
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

    if(document.querySelector('input[name="gender"]:checked').value){
      validCount += 1
    }

    if (validCount == 5) {
     
      let genderValue = document.querySelector('input[name="gender"]:checked').value
      let ageValue = Number(age.value)
      let formulaValue = formula.value
      let heightValue = (heightUnit.value == 'in') ? Math.round(height.value*2.54) : Number(height.value)
      let weightValue = (weightUnit.value == 'lb') ? Math.round(weight.value/2.205) : Number(weight.value)  
      let bodyFatValue = bodyFat.value/100    

      let bmr;


      if(formulaValue == 'mifflin-st') {
        if(genderValue == 'male'){
          bmr = 10*weightValue + 6.25*heightValue - 5*ageValue + 5
        } else if (genderValue == 'female'){
          bmr = 10*weightValue + 6.25*heightValue - 5*ageValue - 161
        }
      } else if (formulaValue == 'harris-benedict') {
        if(genderValue == 'male'){
          bmr = 13.397*weightValue + 4.799*heightValue - 5.677*ageValue + 88.362
        } else if (genderValue = 'female'){
          bmr = 9.247*weightValue + 3.098*heightValue - 4.330*ageValue + 447.593
        }
      } else if(formulaValue == 'katch-mcardle') {
        bmr = 370 + 21.6*(1 - bodyFatValue)*weightValue
      }

      const bmrDisplay = document.querySelector('#bmr-display');
      const calorieDisplays = document.querySelectorAll('.calorie-display')
      
      bmrDisplay.innerText = Math.round(bmr)
      
      calorieDisplays[0].innerText = Math.round(bmr*1.2)
      calorieDisplays[1].innerText = Math.round(bmr*1.375)
      calorieDisplays[2].innerText = Math.round(bmr*1.465)
      calorieDisplays[3].innerText = Math.round(bmr*1.55)
      calorieDisplays[4].innerText = Math.round(bmr*1.725)
      calorieDisplays[5].innerText = Math.round(bmr*1.9)

      document.querySelector("#results").classList.remove('hidden')
      
      window.scrollTo({
        top: document.querySelector("#results").getBoundingClientRect().top + document.documentElement.scrollTop,
        left: 0,
        behavior: 'smooth',
      })
      
      document.querySelector("#results")
    }

  })
})
