const getData = () => {
  try {
    let data = localStorage.getItem("data");

    if (data) {
      let dataObj = JSON.parse(data);

      document.getElementById("bmiText").innerText = dataObj.BMI;
    } else {
      document.getElementById("bmiText").innerText = "No input";
    }

  } catch (error) {
    console.log(error);
  }
};


const onAddBtn = () => {
  try {

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if (height == "" || weight == "") {
      alert("Please enter height and weight");
      return;
    }

    height = height / 100;

    let BMI = weight / (height * height);

    BMI = BMI.toFixed(2);

    let obj = {
      Height: height,
      Weight: weight,
      BMI: BMI
    };

    let jsonObj = JSON.stringify(obj);

    localStorage.setItem("data", jsonObj);

    alert("Successfully saved");

    getData();

  } catch (error) {

    console.log(error);

    alert("Failed to store");
  }
};


const onDeleteClick = () => {

  try {

    let confirmDelete = confirm(
      "Are you sure you want to delete?"
    );

    if (confirmDelete) {

      localStorage.removeItem("data");

      alert("Successfully deleted");

      getData();
    }

  } catch (error) {

    console.log(error);

    alert("Deletion failed");
  }
};


getData();