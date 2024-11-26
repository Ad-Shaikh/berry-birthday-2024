function dates() {
  var firstmeetdate = new Date("Mar 25 2022 18:15:00");
  var x = new Date("Sep 18 2022 14:30:00");
  var y = new Date();
  let seconds = Math.abs(x - y) / 1000;

  var day = seconds / (24 * 3600);

  hh = seconds % (24 * 3600);
  var hour = hh / 3600;

  hh %= 3600;
  var minutes = hh / 60;

  hh %= 60;
  var rseconds = hh;

  let firstmeetseconds = Math.abs(firstmeetdate - y) / 1000;

  var firstmeetday = firstmeetseconds / (24 * 3600);

  firstmeethh = firstmeetseconds % (24 * 3600);
  var firstmeethour = firstmeethh / 3600;

  firstmeethh %= 3600;

  var firstmeetminutes = firstmeethh / 60;

  firstmeethh %= 60;
  var firstmeetrseconds = firstmeethh;

  document.getElementById("days").innerHTML = parseInt(day);
  document.getElementById("hours").innerHTML = parseInt(hour);
  document.getElementById("minutes").innerHTML = parseInt(minutes);
  document.getElementById("seconds").innerHTML = parseInt(rseconds);
  document.getElementById("firstmeetdays").innerHTML = parseInt(firstmeetday);
  document.getElementById("firstmeethours").innerHTML = parseInt(firstmeethour);
  document.getElementById("firstmeetminutes").innerHTML =
    parseInt(firstmeetminutes);
  document.getElementById("firstmeetseconds").innerHTML =
    parseInt(firstmeetrseconds);
}

setInterval(dates, 1000);

function cardSelected(selectedCard) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (card === selectedCard) {
      // card.classList.remove("fade-out");
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
}
