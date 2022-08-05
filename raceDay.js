
// You have been hired to write a program that will register runners for the race and give them instructions on race day.

// As a timeline, registration would look like this: registration-timeline

// Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

// Race number:

//     Early adults receive a race number at or above 1000.
//     All others receive a number below 1000.

// Start time:

//     Adult registrants run at 9:30 am or 11:00 am.
//         Early adults run at 9:30 am.
//         Late adults run at 11:00 am.
//     Youth registrants run at 12:30 pm (regardless of registration).


let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistration = false

let runnerAge = 96

if (runnerAge > 18 && earlyRegistration === true){
  raceNumber += 1000
}

if (runnerAge > 18 && earlyRegistration === true){
  console.log(`Your race number is ${raceNumber}.  Since you are over 18, and you registered early, your start time is 9:30am.`)
} else if (runnerAge > 18 && earlyRegistration === false){
  console.log(`Your race number is ${raceNumber}.  Since you are over 18 but did NOT register early, you will race at 11:00am.`)
} else if ( runnerAge < 18 ) {
  console.log(`Your race number is ${raceNumber}.  Youth runners race at 12:30pm.`)
} else {
  console.log('Special rules for 18 year olds.  See Registration Desk.')
}

