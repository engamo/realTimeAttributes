document.addEventListener("DOMContentLoaded", function () {
  const slackUserName = document.querySelector("[data-testid='slackUserName']");
  const slackDisplayImage = document.querySelector("[data-testid='slackDisplayImage']");
  const currentDayOfTheWeek = document.querySelector("[data-testid='currentDayOfTheWeek']");
  const currentUTCTime = document.querySelector("[data-testid='currentUTCTime']");

  // Get the current date and time
  const now = new Date();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = daysOfWeek[now.getUTCDay()];
  const time = now.toUTCString();

  // Set the values for the elements
  slackUserName.textContent = "Engamo";
  slackDisplayImage.src = "https://ca.slack-edge.com/T05FFAA91JP-U05QXMPBR55-97ddf7d022b9-512";
  currentDayOfTheWeek.textContent = `Current Day of the Week: ${dayOfWeek}`;
  currentUTCTime.textContent = `Current UTC Time: ${time}`;
});
