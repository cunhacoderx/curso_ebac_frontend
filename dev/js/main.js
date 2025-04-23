document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('form-sorteador').addEventListener('submit', function (evento) {
    evento.preventDefault();

    const dadoSelecionado = document.querySelector('input[name="dado"]:checked');

    if (!dadoSelecionado) {
      alert('Escolha um dado para rolar!');
      return;
    }

    const lados = parseInt(dadoSelecionado.value);
    const numeroAleatorio = Math.floor(Math.random() * lados) + 1;

    document.getElementById('resultado-valor').innerText = numeroAleatorio;
    document.querySelector('.resultado').style.display = 'block';
    document.querySelector('button[type="submit"]').blur();

  });
});
