const getSleepHours = day => {
    day = day.toLowerCase()
    switch (day) {
      case 'monday':
      return 8
      break;
      case 'tuesday':
      return 7
      break;
      case 'wednesday':
      return 5
      break;
      case 'thursday':
      return 5
      break;
      case 'friday':
      return 60
      break;
      case 'saturday':
      return 7
      break;
      case 'sunday':
      return 8
  }
  }
  
  // above works fine console.log(getSleepHours('Sunday'))
  
  
  const getActualSleepHours = () => 
    getSleepHours('monday') + 
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') + 
    getSleepHours('saturday') +
    getSleepHours('sunday');
  // note: mistake - put curly brackets here - don't do that because it's an implicit return 
  
  
    const getIdealSleepHours = () => {
      const idealNightlyHours = 8
      return idealNightlyHours * 7
    }
  
  
    const calculateSleepDebt = () => {
      const actualSleepHours = getActualSleepHours()
      const idealSleepHours = getIdealSleepHours()
      let decifitHours = idealSleepHours - actualSleepHours
      let extraHours = actualSleepHours - idealSleepHours
  
      if (actualSleepHours === idealSleepHours) {
        console.log('You got the ideal amount of sleep');
      } else if (actualSleepHours < idealSleepHours){
        console.log('You slept ' + actualSleepHours +' hours. You need to sleep ' + decifitHours + ' more hours to reach your ideal sleep goal of ' + idealSleepHours + 'hours.')
      } else {
        console.log('You slept ' + extraHours + ' hours more than your ideal sleep amount of ' + idealSleepHours + ' hours.')
      }
    }
  
    console.log(calculateSleepDebt())