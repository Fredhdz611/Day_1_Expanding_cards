const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active'); //  classList devuelve los atributos de clase del elemento como .add() y .remove() 
  })
})

function removeActiveClasses () {
  panels.forEach(panel => {
    panel.classList.remove('active');
  })
}