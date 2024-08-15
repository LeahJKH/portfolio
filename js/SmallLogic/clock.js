// Clock functionality
export function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let session = "AM";
  
    if (hour === 0) {
      hour = 12;
      session = "AM";
    } else if (hour > 12) {
      hour -= 12;
      session = "PM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
  
    let time = hour + ":" + minutes + session;
  
    document.querySelector("#clock").textContent = time;
    setTimeout(currentTime, 1000);
  }