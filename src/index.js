import vCard from "vcards-js";
// console.log(vcf.getFormattedString());

function generateVCF() {
  const vcf = vCard();

  vcf.firstName = "Sergei";
  vcf.lastName = "Lisin";

  console.log(vcf.getFormattedString());

  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", `data:,${vcf.getFormattedString()}`);
  linkElement.setAttribute("download", "card.vcf");
  linkElement.style.display = "none";
  document.body.appendChild(linkElement);
  linkElement.click();
  document.body.removeChild(linkElement);
}

const btn = document.getElementById("btn");

btn.addEventListener(
  "click",
  function () {
    generateVCF();
  },
  false
);
