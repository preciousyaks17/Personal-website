/*document.getElementById("currentTimeUTC").textContent =
  new Date().toUTCString();
document.getElementById("currentDay").textContent = new Date().toLocaleString(
  "en-us",
  { weekday: "long" }
);
document.getElementById("currentDate").textContent =
  new Date().toLocaleDateString("en-us", { dateStyle: "full" });
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("currentMonth").textContent = new Date().toLocaleString(
  "en-us",
  { month: "long" }
);*/

document.addEventListener("DOMContentLoaded", () => {
  function updateTime() {
    const now = new Date();
    document.getElementById("currentTimeUTC").textContent = now.toUTCString();
    document.getElementById("currentDay").textContent = now.toLocaleString(
      "en-us",
      { weekday: "long" }
    );
    document.getElementById("currentDate").textContent = now.toLocaleDateString(
      "en-us",
      { dateStyle: "full" }
    );
    document.getElementById("currentYear").textContent = now.getFullYear();
    document.getElementById("currentMonth").textContent = now.toLocaleString(
      "en-us",
      { month: "long" }
    );
  }

  updateTime();
  setInterval(updateTime, 60000);
});
