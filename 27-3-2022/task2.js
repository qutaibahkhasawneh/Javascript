function ss() {
    sessionStorage.setItem('sub', document.getElementById('sub').value);
    sessionStorage.setItem('des', document.getElementById('des').value);
    sessionStorage.setItem('ut', document.getElementById('ut').value);
    sessionStorage.setItem('tu', document.getElementById('tu').value);
    };
    
    
    
    document.getElementById('card').innerHTML = `
      your subject is: ${sessionStorage.getItem('sub')} <br/>
      your project brief is: ${sessionStorage.getItem('des')} <br/>
      user type is: ${sessionStorage.getItem('ut')} <br/>
      Technology used: ${sessionStorage.getItem('tu')} <br/>`