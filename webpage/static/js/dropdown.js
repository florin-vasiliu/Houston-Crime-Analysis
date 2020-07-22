function PopulateDropDownList() {

  // Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc)
  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));


  var hoursList = range(0, 23, 1);
  // var hoursList = Array(24).fill().map((x, i) => i)
  var premiseList = ['Residence or House', 'Apartment', 'Road, Street, or Sidewalk',
    'Church, Synagogue, or Temple Parking Lot',
    'Service or Gas Station', 'Apartment Parking Lot',
    'Restaurant or Cafeteria Parking Lot', 'Commercial Building',
    'Bus Station', 'Sexually Oriented Club', 'Warehouse',
    'Grocery Store or Supermarket', 'Hotel, Motel, Inn, Etc.',
    'Convenience Store', 'Strip Business Center Parking Lot',
    'Restaurant or Cafeteria',
    'Vacant Single Occ Resd(House,Townhs,Dplex)',
    'Light Rail (Metro Rail) Vehicle',
    'Miscellaneous Business (Non-Specific)', 'Garage or Carport',
    'Hotel or Motel Parking Lot', 'Department or Discount Store',
    'Pool Hall or Game Room', 'Bar or Night Club',
    'Drug Store or Medical Supply', 'Driveway', 'Other Parking Lot',
    'Specialty Store (Non-Specific)',
    'Vehicle/Auto Sales/Lease/Auto Parts Store', 'Car Wash',
    'Grocery Store or Supermarket Parking Lot',
    'Electronics Store, Electrical Supplies',
    'Field, Woods, Forest, Park',
    'Multi-Plex Home (Duplex,Triplex Etc.)',
    'Gym, Recreat, Club House, Indoor Pool', 'Barber And Beauty Shops',
    'Other, Unknown, or Not Listed', 'Apartment Laundry',
    'Commercial Parking Lot or Garage', 'Auto Repair',
    'Daycare, Child Care, or Kindergarten',
    "Physician, Doctor, Dentist's Office", 'Fire Station',
    'Apartment Rental Office', 'Construction Site',
    'Amusement Park, Bowling Alley, Skate Rink',
    'Bank or Savings Institution Parking Lot', 'Office Building',
    'Church, Synagogue, or Temple',
    'Parks and Recreation, Zoo, Swimming Pool',
    'Bar or Night Club Parking Lot', 'Rental Storage Facility',
    'Factory, Manufacturing, or Industrial',
    'Pawn, Resale Shop, or Flea Market',
    'Laundry or Dry Cleaners Parking Lot', 'Clothing Store',
    'Mall Common Area', 'Convenience Store Parking Lot',
    'Mall Parking Lot', 'Hospital', 'Bus Stop', 'Bank',
    'Furniture, Appliances, Radios, TV Store',
    'Sporting Goods or Gun Shops', 'University or College',
    'Condominium', 'Liquor Store', 'Jewelry Stores',
    'Park and Ride Terminal', 'Laundry, Dry Cleaners, Washaterias',
    'Government or Public Building', 'Check Cashing Places',
    'Vacant Hotel, Motel, Etc.', 'Libraries, Museums',
    'Airport Terminal', 'Vacant Other Residential (Apartment,Dorms)',
    'Vacant Building (Commercial)', 'Hospital Parking Lot', 'Alley',
    'Convention Center or Exhibit Halls', 'Private School',
    'Illicit Massage Parlor or Spa',
    'Stadium, Sports Arena, Race Track',
    'Railroad Track or Right Of Way', 'Liquor Store Parking Lot',
    'Theatres, Dinner Theaters, Auditoriums',
    'Toys, Arts Craft,Musical, Bike,Pet Stores', 'Highway or Freeway',
    'Mobile Home', 'Police Station', 'Savings and Loan Institutions',
    'High School', 'Middle School',
    'Vacant Grocery Store or Supermarket', 'Body Shop',
    'Vacant Storage Fac (Barn,Garage,Warehouse)', 'Modeling Studio',
    'Freeway Service Road', 'Not Listed', 'Nursing Home',
    'Maintenance or Building Services', 'Light Rail Platform',
    'Package Facility (FedEx,UPS,DHL)', 'Train (Not Metro) Terminal',
    'High Rise', 'Social Services or Public Charities',
    'Adult Book Store or Newsstand', 'Jail or Prison',
    'Sexually Oriented Business Parking Lot', 'Rehabilitation Center',
    'Vacant Other Out Build/Monument/UnderConst', 'Elementary School',
    'Cantina', 'Utility Company, Electric, Gas, Water',
    'Adult Novelty Store', 'Lake, Pond, Waterway, Bayou, River',
    'Commercial Or Training School', 'Vacant Restaurant',
    'Video Rental & Sales', 'Credit Union',
    'Book, Record, Stationary, Office Supplies',
    'Garden Supply, Nursery, or Florist',
    'Vacant Government or Public Building', 'Vacant Bank',
    'Vacant School or College/University',
    'Vacant Church, Synagogue, or Temple',
    'Drug Store, Doctors Office, Hospital',
    'Residence, Home (Includes Apartment)',
    'Highway, Road, Street, Alley', 'Other, Unknown', 'Bar, Nightclub',
    'Restaurant', 'Parking Lot, Garage', 'Hotel, Motel, ETC',
    'Church, Synagogue, Temple', 'Amusement Park', 'Shopping Mall',
    'Industrial Site', 'Grocery, Supermarket',
    'School-Elementary/Secondary', 'Department, Discount Store',
    'Commercial, Office Building', 'Auto Dealership New/Used',
    'Bank, Savings & Loan', 'Speciality Store', 'Park/Playground',
    'Service, Gas Station', 'Cyberspace',
    'Airplane, Bus,Train Terminal',
    'Arena/Stadium/Fairgrounds/Coliseum',
    'Government, Public Building', 'Rest Area',
    'Shelter-Mission/Homeless', 'Community Center', 'School, College',
    'Daycare Facility', 'Field, Woods', 'Jail, Prison',
    'ATM Separate from Bank', 'Lake, Waterway', 'Farm Facility',
    'Abandoned/Condemned Structure',
    'Gambling Facility/Casino/Race Track', 'School-College/University',
    'Military Installation', 'Dock/Wharf/Freight/Modal Terminal',
    'Camp/Campground', 'Tribal Lands', 'Invalid Value (do not remove)']
  var monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December']
  var dayofweekList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
    'Saturday', 'Sunday']
  var temperatureList = range(40, 120, 1);
  var weatherList = ['Clouds', 'Clear', 'Snow', 'Rain', 'Haze', 'Mist', 'Fog',
    'Thunderstorm', 'Smoke', 'Drizzle']




  // Select element tag of each dropdown
  var hourSelected = document.getElementById("selHour");
  var premiseSelected = document.getElementById("selPremise");
  var monthSelected = document.getElementById("selMonth");
  console.log(monthSelected)
  var dayofweekelected = document.getElementById("selDayofweek");
  var temperatureSelected = document.getElementById("selTemperature");
  var weatherSelected = document.getElementById("selWeather");

  // Loop through and add each Hour to the DropDownList
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

  // Loop through and add each Premise to the DropDownList
  premiseList.forEach((premise) => {
    var option = document.createElement("option");
    option.text = premise;
    option.value = premise;
    premiseSelected.add(option);
  })


  // Loop through and add each Month to the DropDownList
  monthList.forEach((month) => {
    var counter = 1
    var option = document.createElement("option");
    option.text = month;
    option.value = counter;
    monthSelected.add(option);
    counter = counter+1
  })

  // Loop through and add each Premise to the DropDownList
  dayofweekList.forEach((dayofweek) => {
    var option = document.createElement("option");
    option.text = dayofweek;
    option.value = dayofweek;
    dayofweekelected.add(option);
  })

  // Loop through and add each Premise to the DropDownList
  temperatureList.forEach((temperature) => {
    var option = document.createElement("option");
    option.text = temperature;
    option.value = temperature;
    temperatureSelected.add(option);
  })

  // Loop through and add each Premise to the DropDownList
  weatherList.forEach((weather) => {
    var option = document.createElement("option");
    option.text = weather;
    option.value = weather;
    weatherSelected.add(option);
  })

}

PopulateDropDownList();