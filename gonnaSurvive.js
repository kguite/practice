// https://www.codewars.com/kata/59ca8246d751df55cc00014c/javascript

// regular function
function hero(bullets, dragons) {
    if (bullets >= dragons * 2){
      return true
    } else {
      return false
    }
  }

  
  // arrow function:
  let hero = (bullets, dragons) => bullets >= dragons * 2 