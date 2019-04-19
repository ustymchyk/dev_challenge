document.addEventListener('DOMContentLoaded', () => {
  const watch = document.querySelector('.watch');

  function setDate() {
    const date = new Date();
    const sec = (date.getSeconds() / 60) * 360;
    const min = ((date.getMinutes() / 60) * 360) ;
    const hour = ((date.getHours() / 12) * 360);

    watch.style.setProperty('--sec', `${sec}deg`);
    watch.style.setProperty('--min', `${min}deg`);
    watch.style.setProperty('--hour', `${hour}deg`);
  }

  setDate();     
}) 

