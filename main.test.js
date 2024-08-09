import { test, expect } from "vitest";
import { calculateBMI } from "main.js";

test("should return 'Underweight' for BMI <= 18.4", ()=>{
    //BMI is 18.4 - Underweight
    expect(calculateBMI(60, 1.82)).toBe("Underweight")
})

test("should return 'Healthy' for BMI between 18.5 and 24.9", ()=>{
    //BMI is 18.7
    expect(calculateBMI(62, 1.82)).toBe("Healthy")
    //BMI is 24.5
    expect(calculateBMI(81, 1.82)).toBe("Healthy")
})

test("should return 'Overweight' for BMI between 25 and 29.9", ()=>{
    //BMI is 25
    expect(calculateBMI(82, 1.81)).toBe("Overweight")
    //BMI is 29.8
    expect(calculateBMI(81, 1.65)).toBe("Overweight")
})

test("should return 'Obese' for BMI >= 30", ()=>{
    //BMI in test is 30.1
    expect(calculateBMI(81, 1.64)).toBe("Obese")
})
