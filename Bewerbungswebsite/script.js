'use strict';

var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(main);

function main() {
    let currentYear = new Date().getFullYear();
    const yearSelect = document.getElementById("Ausbildungsbeginn");
      for (let i = 0; i < 5; i++) {
        currentYear = currentYear + 1;
        yearSelect.innerHTML += "<option>" + (currentYear - 1)  + "</option>"
      }

    currentYear = new Date().getFullYear();
    const year = document.getElementById("jahrAbschluss");
    for (let index = 0; index < 15; index++) {
        currentYear += 1
        year.innerHTML += "<option>" + currentYear + "</option>"
        currentYear -= 2
    }

    document.getElementById("frmBewerbung").onsubmit = function (event) {

        event.preventDefault();
        alert("Bewerbung erfolgreich eingesendet! ")
        
    }

    function clearForm() {
        // Get the form by its ID
        var form = document.getElementById('frmBewerbung');
      
        // Reset the form fields
        form.reset();
      }
}


