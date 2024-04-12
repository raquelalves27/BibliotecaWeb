document.getElementById('loginForm',).addEventListener('submit', function(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // incluindo validações de evento
    if (!username || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    if (!validateEmail(username)) {
      alert('Por favor, insira um endereço de e-mail válido.');
      return;
    }
  
    if (password.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    else {
        window.location.href = 'index.html';
    }
  
  });
  
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
