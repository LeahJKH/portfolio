// Clock functionality
export function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let session = "PM";
  
    if (hour === 0) {
      hour = 12;
      session = "PM";
    } else if (hour > 12) {
      hour -= 12;
      session = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
  
    let time = hour + ":" + minutes + session;
  
    document.querySelector("#clock").textContent = time;
    setTimeout(currentTime, 1000);
  }