const intervalId = setInterval(() => {
  console.log("running analytics....");
}, 4000);

document.getElementById("stop-analytics-btn").addEventListener("click", () => {
  clearInterval(intervalId);
});
