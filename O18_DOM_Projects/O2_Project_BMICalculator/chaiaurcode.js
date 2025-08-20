const form = document.querySelector("form");

// const height = parseInt(document.querySelector("#height").value);
// if we do this here then we will empty values and we dont want that

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // dont submit or reload

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const bmi_results = document.querySelector("#bmi-results");

  bmi_results.innerHTML = "";
  bmi_results.textContent = "";

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid Weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // needs to be displayed in results
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi > 24.9) {
      bmi_results.textContent = "OverWeight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      bmi_results.innerHTML = `<span>${"Normal Range"}</span>`;
    } else {
      const addText = document.createTextNode("Under Weight");
      bmi_results.appendChild(addText);
      // document.body.appendChild(bmi_results);
    }
  }
});
