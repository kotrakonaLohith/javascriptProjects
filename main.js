import { cardDetails } from "./content.js";

const card_details = cardDetails();

console.log(card_details[0].card_title);
// <div id="one">one</div>
var card_group = document.getElementById("main_cardgroup");

for (let i = 0; i < card_details.length; i++) {
  card_group.insertAdjacentHTML(
    "beforeend",
    `
      <div class="card border-primary rounded">
      <div class="card-body">
        <h5 class="card-title">${card_details[i].card_title}</h5>
        <img src=${card_details[i].card_image} class="content_img" alt/>
        <p class="card-text">
        ${card_details[i].card_text}
        </p>
        <a href=${card_details[i].demo_url} target="_blank" class="btn btn-primary">Live Demo 😃</a>
      </div>
      </div>
      `
  );
}
