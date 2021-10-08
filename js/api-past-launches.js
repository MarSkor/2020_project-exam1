const errorHeading = document.querySelector("h1");

//fetching data and return json
async function fetchPastLaunch() {
  try {
    const response = await fetch("https://api.spacexdata.com/v4/launches/past");
    const result = await response.json();
    console.log(result)
    displayLaunch(result);
  } catch (error) {
    errorHeading.innerHTML = "An error occured";
    console.log(error);
  }
}
fetchPastLaunch();

//populate the launch card
function displayLaunch(result) {
  // console.log(result);

  const launchContainer = document.querySelector(".row");

  let html = "";
  for (let i = 0; i < result.length; i++) {
    //upcomming launches skipped, displayed on another page
    if (result[i].upcoming === true) {
      continue;
    }

    html += `<div class="column">
                <div class="card">
                    <h2>${result[i].name}</h2>
                    <p class="center"><b class="underline ">Flight Number:</b> ${
                      result[i].flight_number
                    }</p>
                    <img class="smallImage" src="${
                      result[i].links.patch.small
                    }">
                    <p ><b class="underline">Launch Date (local):</b> ${result[
                      i
                    ].date_local.slice(0, 10)}</p>
                    <p >Read more in: <b class="underline red"><a class="cardLink" href= ${
                      result[i].links.article
                    } target='_blank' title="Go the the Article">the Article</a></b></p>
                </div>
            </div>`;
  }
  launchContainer.innerHTML = html;
}
