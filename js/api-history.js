const errorHeading = document.querySelector("h3");

async function fetchHistory() {
  try {
    const response = await fetch("https://api.spacexdata.com/v3/history");
    const history = await response.json();
    createHistoryDetails(history);
  } catch (error) {
    errorHeading.innerHTML = "An error occured";
    console.log(error);
  }
}
fetchHistory();

function createHistoryDetails(history) {
  console.log(history);

  const launchContainer = document.querySelector(".row");

  let html = "";
  for (let i = 0; i < history.length; i++) {
    html += `<div class="column">
                <div class="card">
                <h4>${history[i].title}</h4>
                <p class="center">Date: ${history[i].event_date_utc.slice(
                  0,
                  10
                )}</p>
                <p class="center">Read about it: <b class="underline red"><a class="cardLink" href= ${
                  history[i].links.article
                } target='_blank'>the Article</a></b></p>
                </div>
            </div>`;
  }
  launchContainer.innerHTML = html;
}
