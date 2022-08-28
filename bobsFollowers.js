// codecademy nested loop practice

let bobsFollowers = ['Pat', 'Joe', 'Steve', 'Al']

let tinasFollowers = ['Amy', 'Joe', 'Pat']

let mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
    mutualFollowers.push(tinasFollowers[j])
    }
  }
}