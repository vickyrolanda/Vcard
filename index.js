import vCardsJS from "vcards-js";

function generateVCF() {
  var vCard = vCardsJS();

  vCard.firstName = "Eric";
  vCard.middleName = "J";
  vCard.lastName = "Nesser";
  vCard.organization = "ACME Corporation";
  vCard.photo.attachFromUrl(
    "https://avatars2.githubusercontent.com/u/5659221?v=3&s=460",
    "JPEG"
  );
  vCard.workPhone = "312-555-1212";
  vCard.birthday = new Date(1985, 0, 1);
  vCard.title = "Software Developer";
  vCard.url = "https://github.com/enesser";
  vCard.note = "Notes on Eric";

  console.log(vCard.getFormattedString());
}

const btn = document.getElementById("btn");

btn.addEventListener(
  "click",
  function () {
    generateVCF();
  },
  false
);
