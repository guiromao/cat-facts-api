var ajax;

if(window.XMLHttpRequest){
    ajax = new XMLHttpRequest();
}
else if (window.ActiveXObject){
    ajax = new ActiveXObject('MICROSOFT.XMLHTTP');
}

ajax.onreadystatechange = function() {
    console.log("Received state change: " + ajax.readyState);
    if(ajax.readyState == 4 && ajax.status == 200){
        console.log("Received readyState 4");
        var response = ajax.responseText;
        var catFacts = JSON.parse(response);
        console.log(catFacts);
        fillFacts(catFacts);
    }
}

var table = document.getElementById("table_cats");
var fillFacts = function(facts){

    facts.forEach(function(fact){
        var row = table.insertRow(-1);

        row.innerHTML = "<td>" + fact.text + "</td>";
    })
}

ajax.open("GET", "https://cat-fact.herokuapp.com/facts");
ajax.setRequestHeader('Content-type', 'application/json');
ajax.send();

var date = document.getElementById("date");
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = months[today.getMonth()];//String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
date.textContent = today;

