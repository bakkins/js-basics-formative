function printTicketPrice(visitorAge, isStudent) {
    if (visitorAge <= 6) {
        console.log("Ieeja ir bezmaksas");
      }
      if ((isStudent == true)) {
        console.log("biļetes cena ir 5 EUR");
      } 
      else {
          console.log("biļetes cena ir 10 EUR.")
      }
}

printTicketPrice(12,true);
printTicketPrice(35,false)