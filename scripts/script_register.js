document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
 
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var cpf = document.getElementById('cpf').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;

    if (!name || !email || !cpf || !phone || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
  }

  if (!validateEmail(email)) {
      alert('Por favor, insira um endereço de e-mail válido.');
      return;
  }

  if (!validateCPF(cpf)) {
      alert('Por favor, insira um CPF válido.');
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

  // Função para aplicar a máscara no campo CPF
function applyCPFFormat(cpfField) {
    cpfField.addEventListener('input', function() {
        var value = cpfField.value;
        value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        value = value.replace(/^(\d{3})(\d)/, '$1.$2'); // Adiciona o primeiro ponto
        value = value.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3'); // Adiciona o segundo ponto
        value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4'); // Adiciona o traço
        cpfField.value = value;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var cpfField = document.getElementById('cpf');
    applyCPFFormat(cpfField);
});

document.addEventListener('DOMContentLoaded', function() {
    var cpfField = document.getElementById('cpf');
    applyCPFFormat(cpfField);
});

  //  função para validar cpf
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function validateCPF(cpf) {
    // Remover caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    // Verificar se o CPF possui 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Verificar se todos os dígitos são iguais
    var firstDigit = cpf.charAt(0);
    if (cpf.split('').every(digit => digit === firstDigit)) {
        return false;
    }

    // Calcular o primeiro dígito verificador
    var sum = 0;
    for (var i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    var firstCheckDigit = 11 - (sum % 11);
    if (firstCheckDigit > 9) {
        firstCheckDigit = 0;
    }

    // Verificar o primeiro dígito verificador
    if (parseInt(cpf.charAt(9)) !== firstCheckDigit) {
        return false;
    }

    // Calcular o segundo dígito verificador
    sum = 0;
    for (var i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    var secondCheckDigit = 11 - (sum % 11);
    if (secondCheckDigit > 9) {
        secondCheckDigit = 0;
    }

    // Verificar o segundo dígito verificador
    if (parseInt(cpf.charAt(10)) !== secondCheckDigit) {
        return false;
    }

    // CPF válido
    return true;
}