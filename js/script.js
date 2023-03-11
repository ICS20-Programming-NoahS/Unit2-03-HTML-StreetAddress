// Copyright (c) 2023 by Noah Smith All rights reserved
//
// Created By: Noah Smith
// Created On: March 2023
// This file contains the JS functions for index.html

  function enterClicked () {
  // this function gets user's street address and street number and displays it back to user
    
  let streetNumber = parseInt(document.getElementById("street-number").value)
  // get street number from text field and cast it to integer
  
  let streetName = document.getElementById("street-name").value
  // get street name from text field
	

  // display street name and number back to user
  document.getElementById('user-info').innerHTML = "Your address is " + streetNumber + " " + streetName + "."
}
