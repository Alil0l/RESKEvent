let animateI1 = document.querySelector("a:nth-child(1) i");
let animateI2 = document.querySelector("a:nth-child(2) i");
let animateI3 = document.querySelector("a:nth-child(3) i");
let animateI4 = document.querySelector("a:nth-child(4) i");
let day = $(".day");
let hour = $(".hour");
let min = $(".min");
let sec = $(".sec");
let chars = $(".chars");
let charsNum = $(".charsNum");
let frmMail = $(".frm-cont");

// Wave in header
(function waveAnimation() {
  setTimeout(() => {
    animateI1.classList.add("fa-beat");
  }, 200);
  setTimeout(() => {
    animateI2.classList.add("fa-beat");
  }, 300);
  setTimeout(() => {
    animateI3.classList.add("fa-beat");
  }, 400);
  setTimeout(() => {
    animateI4.classList.add("fa-beat");
  }, 500);
})();

// Sidebar
$(".open").on("click", function () {
  $(".sideGrp").animate({ width: "toggle" }, 350);
  $(".open").hide();
});

$(".close").on("click", function () {
  $(".sideGrp").animate({ width: "toggle" });
  $(".open").show("slow");
});

// Accordion
$(".accordion-header").on("click", function (e) {
  $(".accordion-header + .accordion-body").slideUp();
  $(".fa-plus").css("transform", "rotate(0deg)");
  $(e.target).children(".fa-plus").css("transform", "rotate(0deg)");

  if ($(e.target).next().css("display") == "none") {
    $(e.target).next().slideToggle();
    $(e.target).children(".fa-plus").css("transform", "rotate(405deg)");
  }

  // if ($(".fa-plus").css("transform") == "rotate(405deg)") {
  //   $(".fa-plus").css("transform", "rotate(0deg)");
  // }
});

// CountDown
function updateCountdown() {
  const eventTime = new Date(2024, 8, 28, 10, 0);
  const currentTime = new Date();
  const difference = eventTime.getTime() - currentTime.getTime();
  if (difference <= 0) {
    clearInterval(secondsUpdate);
    $(".counter").text("Time's Up!");
    return;
  }
  const seconds = Math.floor(difference / 1000);
  $(".day").text(Math.floor(seconds / (3600 * 24)));
  $(".hour").text(Math.floor((seconds % (3600 * 24)) / 3600));
  $(".min").text(Math.floor((seconds % 3600) / 60));
  $(".sec").text(seconds % 60);
}
const secondsUpdate = setInterval(() => {
  updateCountdown();
}, 1000);

// Text Area Limit
$(".clear").on("click", () => {
  chars.val("");
  $(".charsRem").text("Characters Remaining");
  $(".clear").hide("slow");
  charsNum.text(200);
});
chars.on("input", function (e) {
  charsNum.text(200 - e.target.value.length);
  if (Number(charsNum.text()) < 0) {
    $(".charsRem").text("Slow Down, Please delete the exceeded content!");
    $(".clear").show("slow");
  } else {
    $(".charsRem").text("Characters Remaining");
    $(".clear").hide("slow");
  }
});
