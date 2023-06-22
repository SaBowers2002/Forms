    // JavaScript code for form validation
	  // Prevent form from submitting

    // Retrieve the input field value
    response = document.getElementById("inputField");

    // Add an event listener to the form submits an event.
    const element = document.getElementById("myBtn");
    element.addEventListener("click", myFunction);
    
    function myFunction()
    {
      {
        var regEx = (/^[A-Za-z]+$/);
        if(response.value.match(regEx))
          {
          alert("Success! Thank you!");
           return true;
          }
        else
          {
          alert("Error! - Please enter only letters");
          return false;
          }
     }  
    }
//-------------------------------------------------