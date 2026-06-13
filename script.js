function checkSymptom(){

    let symptom =
    document.getElementById("symptom")
    .value.toLowerCase();

    let result = "";

    if(symptom.includes("fever")){
        result =
        "Possible condition: Viral Infection. Drink water and take rest.";
        
        
    }

    else if(symptom.includes("cough")){
        result =
        "Possible condition: Cold or Allergy.";
    }

    else if(symptom.includes("headache")){
        result =
        "Possible condition: Stress or Migraine.";
    }

    else{
        result =
        "Please consult a healthcare professional.";
    }

    document.getElementById("result")
    .innerText = result;
}

function calculateBMI(){

    let weight =
    parseFloat(document.getElementById("weight").value);

    let height =
    parseFloat(document.getElementById("height").value)/100;

    let bmi =
    weight/(height*height);

    document.getElementById("bmiResult")
    .innerText =
    "BMI: " + bmi.toFixed(2);
}