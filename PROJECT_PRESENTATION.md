Put your plan, story, and any supporting material here, you could use the help of a readme markdown generator such as [readme.so](https://readme.so/)


Write BMI function bmi that calculates body mass index (bmi = weight / height2).

should return 'Underweight' for BMI <= 18.4

should return 'Normal' for BMI between 18.5 and 24.9

should return 'Overweight' for BMI between 25 and 29.9

should return 'Obese' for BMI > 30



NHS information for calculator

https://www.nhsinform.scot/healthy-living/food-and-nutrition/healthy-eating-and-weight-management/body-mass-index-bmi/

https://www.nhs.uk/health-assessment-tools/calculate-your-body-mass-index/calculate-bmi-for-adults/result

Finished Solution Function

export function calculateBMI(weight, height) {
    // Good luck!

    
    const bmi = weight / (height * height);

    if(bmi<=18.4)return "Underweight";
    if(bmi<=24.9)return "Healthy";
    if(bmi<=29.9)return "Overweight";
    if(bmi>=30)return "Obese";
  
  }



Write comprehensive  tests for Healthy and overweight to make sure they pass both upper and lower parameters. This will cover scenarios where the input is very close to being in the parameter for another weight class. An example 

