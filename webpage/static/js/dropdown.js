function PopulateDropDownList() {
  var hoursList = [0,1,2,3,4,5]
  console.log(hoursList)

    var hourSelected = document.getElementById("selHour");

    // Loop through and add each subject ID to the DropDownList
    hoursList.forEach((hour) => {
      // Create an option tag
      var option = document.createElement("option");
      // Set hour in text property
      option.text = hour;
      // Set hour ID in value property
      option.value = hour;
      // Add the option element to DropDownList
      hourSelected.add(option);
    })
    // // Get the first subject ID for the initial plots
    // optionChanged(hoursList[0])
  }

  PopulateDropDownList();