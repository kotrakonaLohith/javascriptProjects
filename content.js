const card_details = [];

card_details[0] = {
  card_title: "Form Validation",
  card_image: "./assets/Capture1.PNG",
  card_text: "Please click below to view the project",
  demo_url: "./form/index.html"
};

card_details[1] = {
  card_title: "Movie Booking",
  card_image: "./assets/Capture2.PNG",
  card_text: "Please click below to view the project",
  demo_url: "./booking/index.html"
};

card_details[2] = {
  card_title: "Custom Video Player",
  card_image: "./assets/Capture3.PNG",
  card_text: "Please click below to view the project",
  demo_url: "./videoPlayer/index.html"
};

card_details[3] = {
  card_title: "Currency Exchange Calculator",
  card_image: "./assets/Capture4.PNG",
  card_text: "Please click below to view the project",
  demo_url: "./Exchange/index.html"
};
card_details[4] = {
  card_title: "DOM Array Methods",
  card_image: "./assets/Capture5.PNG",
  card_text: "Please click below to view the project",
  demo_url: "./domMethods/index.html"
};
card_details[5] = {
  card_title: "My Landing Page",
  card_image: "./assets/Capture6.PNG",
  card_text: "Please click below to view the project",
  demo_url: "./landingPage/index.html"
};

function getCardDetails() {
  return card_details;
}

export { getCardDetails as cardDetails };
