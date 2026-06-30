console.log('javascript подключен')
const button = document.getElementById("200");
const text = document.getElementById('007');
button.addEventListener('click', () =>{
text.textContent = 'вы жмякнули книпку',text.style.color = 'red';
});
