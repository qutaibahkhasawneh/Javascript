localStorage.removeItem('prog');
function lc() {
localStorage.setItem('name', document.getElementById('name').value);
localStorage.setItem('age', document.getElementById('age').value);
localStorage.setItem('gen', document.getElementById('gen').value);
localStorage.setItem('des', document.getElementById('des').value);
localStorage.setItem('maj', document.getElementById('maj').value);
localStorage.setItem('bd', document.getElementById('bd').value);
localStorage.setItem('pro1', document.getElementById('pro1').value);
localStorage.setItem('pro2', document.getElementById('pro2').value);
localStorage.setItem('pro3', document.getElementById('pro3').value);
localStorage.setItem('img', document.getElementById('img').value);
localStorage.setItem('sib', document.getElementById('sib').value);
};



document.getElementById('card').innerHTML = `
  your name is: ${localStorage.getItem('name')} <br/>
  your age is: ${localStorage.getItem('age')} <br/>
  your gender is: ${localStorage.getItem('gen')} <br/>
  about you: ${localStorage.getItem('des')} <br/>
  your major is: ${localStorage.getItem('maj')} <br/>
  your birthday is: ${localStorage.getItem('bd')} <br/>
  your first programming language is: ${localStorage.getItem('pro1')} <br/>
  your second programming language is: ${localStorage.getItem('pro2')} <br/>
  your third programming language is: ${localStorage.getItem('pro3')} <br/>
  your image: ${localStorage.getItem('img')} <br/>
  your sibling is: ${localStorage.getItem('sib')} <br/>`