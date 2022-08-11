// 8kyu https://www.codewars.com/kata/56efc695740d30f963000557/javascript


String.prototype.toAlternatingCase = function () {
    return this.split('').map(changeCase).join('')
  }
  
  function changeCase(char) {
    return char.toLowerCase() === char ?char.toUpperCase() : char.toLowerCase()
    }
  