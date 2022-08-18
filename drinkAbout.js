// https://www.codewars.com/kata/56170e844da7c6f647000063/train/javascript

// as if statement
function peopleWithAgeDrink(old) {
    if (old < 14) {
      return 'drink toddy' 
      } else if (old < 18) {
        return 'drink coke'
      } else if (old < 21 ){
        return 'drink beer'
      } else {
        return 'drink whisky'
    }
  };

// as ternary 
 return old < 14 ? 'drink toddy' : old < 18 ? 'drink coke' : old < 21 ? 'drink beer' : 'drink whisky'