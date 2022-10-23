// grab button using id
const btn = document.querySelector('#testBtn');
const fm = document.querySelector('form')

// add event listener to it and make callback func
btn.addEventListener('click', event => {
  let word = document.createElement('p');
  word.textContent = "hello";
  fm.append(word);
})
