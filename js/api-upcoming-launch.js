const errorHeading = document.querySelector("h1");

//fetching data and return json
async function fetchUpcomingLaunches() {
  try {
    const response = await fetch(
      "https://api.spacexdata.com/v4/launches/upcoming"
    );
    const result = await response.json();
    console.log(result)
    UpcomingLaunches(result);
  } catch (error) {
    errorHeading.innerHTML = "An error occured";
    console.log(error);
  }
}
fetchUpcomingLaunches();

function UpcomingLaunches(result) {
  // console.log(result);

  const launchContainer = document.querySelector(".row");
  let html = "";
  for (let i = 0; i < result.length; i++) {
    html += `<div class="column">
                <div class="card">
                    <h2>${result[i].name}</h2>
                    <p class="center"><b class="description underline">Launch Date (local):</b> ${result[i].date_local.slice(0, 10)}</p>
                    <p class="center"><b class="underline">Flight Number:</b> ${
                      result[i].flight_number
                    }</p>
                </div>
            </div>`;
  }
  launchContainer.innerHTML = html;
}
