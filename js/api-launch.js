const errorHeading = document.querySelector("h1");

//fetch data and return json
async function fetchLaunch() {
  try {
    const response = await fetch(
      "https://api.spacexdata.com/v4/launches/latest"
    );
    const recentLaunch = await response.json();
    console.log(recentLaunch)
    createLaunchDetails(recentLaunch);
    
  } catch (error) {
    errorHeading.innerHTML = "An error occured";
    console.log(error);
  }
}
fetchLaunch();

//populate the recent launch card
function createLaunchDetails(recentLaunch) {
  // console.log(recentLaunch);

  //name
  const launchHeading = document.querySelector("h2");
  launchHeading.innerHTML = recentLaunch.name;

  const launchNumber = document.querySelector(".flight-number");
  launchNumber.innerHTML =
    `<p class="underline">Flight Number:</p>` + recentLaunch.flight_number;

  //details
  const launchDetail = document.querySelector(".details");
  launchDetail.innerHTML =
  `<p class="underline">Mission Details:</p>` + recentLaunch.details;

  if(recentLaunch.details === null){
    launchDetail.innerHTML = `<p class="underline">Could not find mission details</p>`
  }

  //date
  const launchDate = document.querySelector(".launch-date");
  launchDate.innerHTML =
    `<p class="fontMedium launch-date">Launch Date (Local):</p>` +
    recentLaunch.date_local.slice(0, 10);

  //image
  const newImg = document.querySelector("#image");
  newImg.src = recentLaunch.links.patch.small

  if(recentLaunch.links.patch.small === null){
    newImg.src = "./images/no-image-available.jpg"
  }
  // console.log(newImg)

}
