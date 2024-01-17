# bmr-calculator

> A calculator to estimate how many calories you burn in a day

## Table of Contents

- [bmr-calculator](#bmr-calculator)
	- [Table of Contents](#table-of-contents)
	- [Background](#background)
	- [Calculation](#calculation)
		- [Revised Harris-Benedict Equation](#revised-harris-benedict-equation)
		- [Mifflin-St Jeor Equation](#mifflin-st-jeor-equation)
		- [Katch-McArdle Formula](#katch-mcardle-formula)
	- [Installation](#installation)
	- [Usage](#usage)
	- [Note](#note)

## Background

About 70% of a human's total energy expenditure is due to the basal life processes taking place in the organs of the body. About 20% of one's energy expenditure comes from physical activity and another 10% from digestion of food. BMR (or Basal Metabolic Rate) accounts for about 60 to 75% of the daily calorie expenditure.

A common weight loss tactic known as CICO (Calories In - Calories Out) is to eat fewer calories than what you burn in a day to eventually lose weight. This approach may be too simplistic, however it does help curb overeating and maintain portion control.

The idea is to create a calorie deficit to lose weight over time. The calorie deficit is the difference of the calories you consume and the calories you burn throughout the day. 1 lb of fat corresponds to about 3500 calories. Therefore, to lose 1 lb of fat over a week you would need to maintain an average calorie deficit of 500 calories throughout the week.

## Calculation

Several equations have been published from the the early 20th-21st centuries to predict the number of calories required by humans, however these can merely provide a rough estimation.

Assuming
$w$ as weight in kg, $h$ as height in cm, $a$ as age and $f$ as body fat percentage, the following formulae have been implemented in the calculator.

### Revised Harris-Benedict Equation

The Harris-Benedict Equation was one of the earliest equations introduced. It was revised in 1984 to be more accurate.

$$\text{BMR}_{men} = (13.397w + 4.779h -5.677a + 88.362)$$


$$\text{BMR}_{women} = (9.247w + 3.098h -4.330a + 447.593)$$

### Mifflin-St Jeor Equation

The Mifflin-St Jeor Equation was introduced in 1990 and was show to be more accurate than the Revised Harris-Benedict Equation.

$$\text{BMR}_{men} = (10w + 6.25h - 5a + 5)$$


$$\text{BMR}_{women} = (10w + 6.25h - 5a - 161)$$

### Katch-McArdle Formula

The Katch-McArdle Formula takes lean body mass into account which can be more accurate for people who are leaner and know their body fat percentage.

$$\text{BMR} = (370 + 21.6(1-\frac{f}{100}))$$

## Installation

This project comes with batteries included out of the box! Simply clone the repository to get started.

## Usage

Open the `index.html` file in your preferred web browser.
Make sure that javascript is enabled.

## Note

You can see a live demo of the app [here](https://google.com).
