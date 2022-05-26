export default function timer() {
  const dataEnd = new Date("2022-06-25 19:00");
  const timerDelete = document.getElementById("timer");

  const interfal = setInterval(countDown, 1000);
  function countDown() {
    const dataNow = new Date().getTime();
    const timeDistance = dataEnd - dataNow;
    const days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDistance % (1000 * 60)) / 1000);

    document.querySelector("#days").innerHTML =
      String(days).padStart(2, 0);
    document.querySelector("#hours").innerHTML =
      String(hours).padStart(2, 0);
    document.querySelector("#minutes").innerHTML =
      String(minutes).padStart(2, 0);
    document.querySelector("#seconds").innerHTML = String(seconds).padStart(
      2,
      0
    );
    if (timeDistance < 0) {
      clearInterval(interfal);
      timerDelete.style.display = "none";
    }
  }
}
