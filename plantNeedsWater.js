// plant needs watering each wednesday

// write three types of functions - standard, arrow, and concise

const plantNeedsWater = function(day){
    if (day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
  };
  
  console.log(plantNeedsWater('Tuesday'))

  // refactored as an arrow function

  const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };
  

  // refactored as concise body

  const plantNeedsWater = day => day === 'Wednesday' ? true : false;

