$.ajax({
    url: "https://cat-fact.herokuapp.com/facts",
    type: 'GET',
    dataType: 'json', // added data type
    success: function(res) {
        console.log(res);
        fillFacts(res);
    }
});

var table = $("#table_cats");
var fillFacts = function(facts){

    facts.forEach(function(fact){

        var element = "<tr><td>" + fact.text + "</td></tr>";

        $(element).appendTo(table);
        
    });
}

var date = $("#date");
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = months[today.getMonth()];//String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
date.textContent = today;

