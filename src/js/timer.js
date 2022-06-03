import data from "./config.json" assert { type: "json" };
export default function timer() {
  let splitDate = data.timerEndDate.split(/\W/);
  const [day, month, year, hour, minutes] = splitDate;
  const dataEnd = new Date(year, month - 1, day, hour, minutes);
  const timerDelete = document.getElementById("timer");
  const deleteMarginTop = document.querySelector(".about__container");
  const interfal = setInterval(countDown, 0);
  
  function countDown() {
    const dataNow = new Date().getTime();
    const timeDistance = dataEnd - dataNow;
    if(timeDistance > 0 ){
      timerDelete.style.display = 'flex';

    }
    const days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDistance % (1000 * 60)) / 1000);

    document.querySelector("#days").innerHTML = String(days).padStart(2, 0);
    document.querySelector("#hours").innerHTML = String(hours).padStart(2, 0);
    document.querySelector("#minutes").innerHTML = String(minutes).padStart(
      2,
      0
    );
    document.querySelector("#seconds").innerHTML = String(seconds).padStart(
      2,
      0
    );
    if (timeDistance < 0) {
      clearInterval(interfal);
      timerDelete.style.display = "none";
      // deleteMarginTop.style.margin = 0;
    }
  }
}
