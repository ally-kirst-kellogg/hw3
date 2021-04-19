// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  //There is code already provided that properly runs when the page is loaded or refreshed. This code does the work of reaching out to the rides API and obtaining a random ride – you should not modify this existing code; rather, begin the implmentation of the following requirements starting on line 15 of the code:
  //Parse the data given in the random ride Object, and present it in human-readable format, for example: Noober X Passenger: Kiley Thompson - (260) 908-6886. Pickup at 1301 N State Pkwy, Chicago, IL 60624. Drop-off at 2362 N Clybourn Ave, Chicago, IL 60657.
  //(3 points) Approach the problem like we did in class – write the recipe (algorithm) using comments, then write the code according to the recipe.
  //(3 points) Create a well-named variable for each data point in the Object. For example, passengerFirstName. Then, use these variables to construct your string of output to be written to the JavaScript console.
  //(2 points) Use conditional logic – if the rider has requested the luxury "Purple" level of service, i.e. purpleRequested, display "Noober Purple" as the level of service, e.g. Noober Purple Passenger: Freeman Waters...
  //(2 points) If the numberOfPassengers in a single ride request is greater than 3, we'll need to upgrade to a larger car. Display "Noober XL" as the level of service.
  //A request for Noober Purple supercedes the Noober XL logic. In other words, if a Noober Purple has been requested, it doesn't matter how many passengers there are. Anything else is the normal level of service, "Noober X".


  // create an object for each data in the ride object
  let passengerDetails = ride.passengerDetails
  let passengerFirstName = passengerDetails.first
  let passengerLastName = passengerDetails.last
  let passengerPhoneNumber = passengerDetails.phoneNumber

  let pickupLocation = ride.pickupLocation
  let pickupAddress = pickupLocation.address
  let pickupCity = pickupLocation.city
  let pickupState = pickupLocation.state
  let pickupZip = pickupLocation.zip

  let dropoffLocation = ride.dropoffLocation
  let dropoffAddress = dropoffLocation.address
  let dropoffCity = dropoffLocation.city
  let dropoffState = dropoffLocation.state
  let dropoffZip = dropoffLocation.zip

  let numberOfPassengers = ride.numberOfPassengers
  let purpleRequested = ride.purpleRequested

  // create object using conditional logic to label the ride as regular or purple service
  let rideServiceTypePurple
    if (purpleRequested  == true) 
    {
      rideServiceTypePurple = `Noober Purple`
    } else 
    {
      rideServiceTypePurple = `Noober Regular`
    }

  // create object using conditional logic to label cars with more than 3 passengers as Noober XL
    let rideServiceTypeSize
    if (numberOfPassengers  > 3) 
    {
      rideServiceTypeSize = `Noober XL needed`
    } else 
    {
      rideServiceTypeSize = `Noober Standard needed`
    }

  // create object using conditional logic to label the level of service as Noober X or Noober Purple or Noover XL, noober purple supercedes everything
  
  let rideServiceType
     if (purpleRequested  == true) 
       {
        rideServiceType = `Noober Purple`
       } else if (numberOfPassengers  > 3) 
    {
      rideServiceType = `Noober XL`
    } else  {
      rideServiceType = `Noober X`
       }
    

  // parse out the data in a human readable form like 



  let sentence = `${rideServiceType} Passenger: ${passengerFirstName} ${passengerLastName} - ${passengerPhoneNumber}.  Pick-up at ${pickupAddress}, ${pickupCity}, ${pickupState} ${pickupZip}.  Drop-off at ${dropoffAddress}, ${dropoffCity}, ${dropoffState} ${dropoffZip}.`


  //console.log(rideServiceTypePurple)
  //console.log(purpleRequested)

  //console.log(rideServiceTypeSize)
 // console.log(numberOfPassengers)
 
 // console.log(rideServiceType)

  console.log(sentence)



  // 🔥 YOUR CODE ENDS HERE 🔥
})
