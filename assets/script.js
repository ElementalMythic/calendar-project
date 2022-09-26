// add moment.js

var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY")
var currentHour = moment().format('h:mm:ss a')
//"a" stands for am

// add time variables

var twelveAm = $("#12am")

var oneAm = $("#01am")

var twoAm = $("#02am")

var threeAm = $("#03am")

var fourAm = $("#04am")

var fiveAm = $("#05am")

var sixAm = $("#06am")

var sevenAm = $("#07am")

var eightAm = $("#08am")

var nineAm = $("#09am")

var tenAm = $("#10am")

var elevenAm = $("#11am")

var twelvePm = $("#12pm")

var onePm = $("#01pm")

var twoPm = $("#02pm")

var threePm = $("#03pm")

var fourPm = $("#04pm")

var fivePm = $("#05pm")

var sixPm = $("#06am")

var sevenPm = $("#07pm")

var eightPm = $("#08pm")

var ninePm = $("#09pm")

var tenPm = $("#10pm")

var elevenPm = $("#11pm")

var userInput

var hourInput

var hour = moment().hours()

// need to set the time

var interval = setInterval(function() {
  var currentMom = moment();
  $('#currentDay').html(currentMom.format('YYYY MMMM DD') + ' '
                      + currentMom.format('dddd')
                       .substring(0,3).toUpperCase());
  $('#currentDay').html(currentDate + " " + currentMom.format('hh:mm:ss A'));
}, 100);

// need to put the times vars into the local storage 

function loadTime() {

    var loadAm12 = JSON.parse(localStorage.getItem("12:00 AM"))
    twelveAm.val(loadAm12)

    var loadAm1 = JSON.parse(localStorage.getItem("01:00 AM"))
    oneAm.val(loadAm1)

    var loadAm2 = JSON.parse(localStorage.getItem("02:00 AM"))
    twoAm.val(loadAm2)

    var loadAm3 = JSON.parse(localStorage.getItem("03:00 AM"))
    threeAm.val(loadAm3)

    var loadAm4 = JSON.parse(localStorage.getItem("04:00 AM"))
    fourAm.val(loadAm4)

    var loadAm5 = JSON.parse(localStorage.getItem("05:00 AM"))
    fiveAm.val(loadAm5)

    var loadAm6 = JSON.parse(localStorage.getItem("06:00 AM"))
    sixAm.val(loadAm6)

    var loadAm7 = JSON.parse(localStorage.getItem("07:00 AM"))
    sevenAm.val(loadAm7)

    var loadAm8 = JSON.parse(localStorage.getItem("08:00 AM"))
    eightAm.val(loadAm8)

    var loadAm9 = JSON.parse(localStorage.getItem("09:00 AM"))
    nineAm.val(loadAm9)

    var loadAm10 = JSON.parse(localStorage.getItem("10:00 AM"))
    tenAm.val(loadAm10)

    var loadAm11 = JSON.parse(localStorage.getItem("11:00 AM"))
    elevenAm.val(loadAm11)

    var loadPm12 = JSON.parse(localStorage.getItem("12:00 PM"))
    twelvePm.val(loadPm12)

    var loadPm1 = JSON.parse(localStorage.getItem("01:00 PM"))
    onePm.val(loadPm1)

    var loadPm2 = JSON.parse(localStorage.getItem("02:00 PM"))
    twoPm.val(loadPm2)

    var loadPm3 = JSON.parse(localStorage.getItem("03:00 PM"))
    threePm.val(loadPm3)

    var loadPm4 = JSON.parse(localStorage.getItem("04:00 PM"))
    fourPm.val(loadPm4)

    var loadPm5 = JSON.parse(localStorage.getItem("05:00 PM"))
    fivePm.val(loadPm5)

    var loadPm6 = JSON.parse(localStorage.getItem("06:00 PM"))
    sixPm.val(loadPm6)

    var loadPm7 = JSON.parse(localStorage.getItem("07:00 PM"))
    sevenPm.val(loadPm7)

    var loadPm8 = JSON.parse(localStorage.getItem("08:00 PM"))
    eightPm.val(loadPm8)

    var loadPm9 = JSON.parse(localStorage.getItem("09:00 PM"))
    ninePm.val(loadPm9)

    var loadPm10 = JSON.parse(localStorage.getItem("10:00 PM"))
    tenPm.val(loadPm10)

    var loadPm11 = JSON.parse(localStorage.getItem("11:00 PM"))
    elevenPm.val(loadPm11)
}

function runInBackground () {
      
    $(".inputArea").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        console.log(timeTest);
        console.log(hour);
  //      console.log(this);
        if (hour > timeTest) {
            $(this).addClass("past");
        } else if (hour < timeTest) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
  }

$(document).ready(function(){
    loadTime()
    runInBackground()

// have save 

    $(".Save").on("click", function(){
        userInput = $(this).siblings(".inputArea").val().trim();
        hourInput = $(this).siblings(".userInputSpace").text().trim();
        localStorage.setItem(hourInput, JSON.stringify(userInput));
})

// clear options

$("#clear").on("click", function(){
    localStorage.clear();
    initPage()
  }) 
});



