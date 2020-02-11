const card_details = [];

card_details[0] = {
  card_title: "Title 1",
  card_image: "./assets/Capture1.PNG",
  card_text: "Text 1",
  demo_url: "./form/index.html"
};

card_details[1] = {
  card_title: "Title 2",
  card_image: "./assets/Capture2.PNG",
  card_text: "Text 2",
  demo_url: "./booking/index.html"
};

card_details[2] = {
  card_title: "Title 3",
  card_image: "./assets/Capture3.PNG",
  card_text: "Text 3",
  demo_url: "./videoPlayer/index.html"
};

card_details[3] = {
  card_title: "Title 4",
  card_image: "./assets/Capture1.PNG",
  card_text: "Text 4",
  demo_url: "./form/index.html"
};
card_details[4] = {
  card_title: "Title 5",
  card_image: "./assets/Capture1.PNG",
  card_text: "Text 5",
  demo_url: "./form/index.html"
};
card_details[5] = {
    card_title: "Title 5",
    card_image: "./assets/Capture1.PNG",
    card_text: "Text 5",
    demo_url: "./form/index.html"
  };
  card_details[6] = {
    card_title: "Title 5",
    card_image: "./assets/Capture1.PNG",
    card_text: "Text 5",
    demo_url: "./form/index.html"
  };
  card_details[7] = {
    card_title: "Title 5",
    card_image: "./assets/Capture1.PNG",
    card_text: "Text 5",
    demo_url: "./form/index.html"
  };

function getCardDetails() {
  return card_details;
}

export { getCardDetails as cardDetails };
