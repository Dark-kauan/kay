const counter = document.getElementById('counter');
const container = document.getElementById('container');

counterAtt();

// timer do aniversario de namoro
function counterAtt () {

    const currentDate = new Date();
    const date = new Date(2022, 5, 29, 20, 0 ,0);
    const differenceMs = currentDate - date;

    const seconds = Math.floor(differenceMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365.25);

    const secondsRest = seconds % 60;
    const minutesRest = minutes % 60;
    const hoursRest = hours % 24;
    const daysRest = days % Math.floor(365.25);

    counter.textContent = `estamos juntos há ${years} anos ${daysRest} ${daysRest === 1 ? 'dia' : 'dias'} ${hoursRest} ${hoursRest === 1 ? 'hora' : 'horas'} ${minutesRest} ${minutesRest === 1 ? 'minuto' : 'minutos'} e ${secondsRest} ${secondsRest === 1 ? 'segundo' : 'segundos'}`;

}
// cria os coração
function createHeart() {

  const heart = document.createElement('span');
  heart.classList.add('heart');
  const colors = ['❤️', '🩷', '💜'];
  heart.innerText = colors[Math.floor(Math.random() * colors.length)];
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 20 + 20 + 'px';

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}
setInterval(createHeart, 200);
setInterval(counterAtt, 1000);