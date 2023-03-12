const prikaz = document.getElementById("input-wrap");
console.log(prikaz);
const batns = document.getElementsByClassName("broj");

console.log(batns);

for (let i = 0; i < batns.length; i++) {
  console.log(batns[i]);
  batns[i].addEventListener("click", (e) => {
    // console.log(e.target.textContent);
    let value = e.target.textContent;
    if (value === "=") {
      prikaz.innerText = eval(prikaz.innerText);
    } else if (value === "AC") {
      prikaz.innerText = " ";
    }
    prikaz.innerText += e.target.textContent;
  });
}
