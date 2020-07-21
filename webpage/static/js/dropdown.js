function PopulateDropDownList() {
  var hoursList = [0,1,2,3,4,5]
  console.log(hoursList)

    var hourSelected = document.getElementById("#selHour");

    // Loop through and add each subject ID to the DropDownList
    hoursList.forEach((hour) => {
      // Create an option tag
      var option = document.createElement("OPTION");
      // Set hour in text property
      option.innerHTML = hour;
      // Set hour ID in value property
      option.value = hour;
      // Add the option element to DropDownList
      hourSelected.options.add(option);
    })
    // // Get the first subject ID for the initial plots
    // optionChanged(hoursList[0])
  }

  PopulateDropDownList();