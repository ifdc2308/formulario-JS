const btnEnviar = document.getElementById('btn-enviar');

btnEnviar.addEventListener('click', function() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const dataNascimento = document.getElementById('data-nascimento').value;
  
  // Armazena os valores no LocalStorage
  localStorage.setItem('nome', nome);
  localStorage.setItem('email', email);
  localStorage.setItem('data-nascimento', dataNascimento);
  
  // Exibe uma mensagem de sucesso
  alert('Dados salvos com sucesso!');
});
