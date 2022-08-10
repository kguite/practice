// code to create a random color using random letters and numbers to create a random hex code
// to implememnt via button as an onclick event ex: <button onclick="changeColor()">Repaint!</button>
function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function changeColor(){
    let newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
  }

