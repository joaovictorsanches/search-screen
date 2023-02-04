function Pesquisar() {
  let infors = document.getElementById('informacoes').value + ' '
  infors = infors.replace(' ', '+')
  document.location = 'https://www.google.com/search?q=' + infors
}