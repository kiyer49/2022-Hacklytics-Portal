const friday = {
    "5:00 PM - 5:45 PM": "Check In",
    "6:00 PM - 6:30 PM": "Opening Ceremony",
//     "6:00 PM - 7:30 PM": "Team Building",
    "6:30 PM - 7:30 PM": "Sponsor/Career Fair",
    "7:00 PM - 9:30 PM": "Dinner Available",
    "9:30 PM": "Hacking officially begins!"
}

const saturday = {
    "8:00 AM - 11:00 AM": "Breakfast Available",
    "9:00 AM - 10:00 AM": "Deepnote Workshop",
    "12:00 PM - 2:00 PM": "Lunch Available",
    "12:30 PM - 1:30 PM": "DSGT Workshop",
    "3:00 PM - 4:00 PM": "GreyHat Workshop",
    "4:00 PM - 5:00 PM": "GT Trading Club Workshop", 
    "6:00 PM - 7:45 PM": "DSGT Workshop",
    "6:00 PM - 9:30 PM": "Dinner Available",
}

const sunday = {
    "8:00 AM - 9:30 AM": "Breakfast Avaiable",
    "9:30 AM": "Hacking Stops!",
    "2:30 PM - 4:00 PM": "Hacker Demo",
    "4:15 PM - 5:30 PM": "Closing Ceremony",
}

function schedule_populate() {
    const friday_schedule = document.getElementById("friday_schedule_table");
    const saturday_schedule = document.getElementById("saturday_schedule_table");
    const sunday_schedule = document.getElementById("sunday_schedule_table");
    // populate friday schedule
    for (item in friday) {
        var row = document.createElement("tr");
        row.classList.add("row");
        var leftCell = document.createElement("td");
        var leftNode = document.createTextNode(item);
        leftCell.appendChild(leftNode);
        leftCell.classList.add("col-12");
        leftCell.classList.add("col-md-4");
        leftCell.classList.add("m-md-2");
        var rightCell = document.createElement("td");
        var rightNode = document.createTextNode(friday[item]);
        rightCell.appendChild(rightNode);
        rightCell.classList.add("col-12");
        rightCell.classList.add("col-md-7");
        rightCell.classList.add("ms-4")
        rightCell.classList.add("m-md-2");
        rightCell.style.whiteSpace = "pre-wrap";
        row.appendChild(leftCell);
        row.appendChild(rightCell);
        friday_schedule.appendChild(row);
    }
    // populate saturday schedule
    for (item in saturday) {
        var row = document.createElement("tr");
        row.classList.add("row");
        var leftCell = document.createElement("td");
        var leftNode = document.createTextNode(item);
        leftCell.appendChild(leftNode);
        leftCell.classList.add("col-12");
        leftCell.classList.add("col-md-4");
        leftCell.classList.add("m-md-2");
        var rightCell = document.createElement("td");
        var rightNode = document.createTextNode(saturday[item]);
        rightCell.appendChild(rightNode);
        rightCell.classList.add("col-12");
        rightCell.classList.add("col-md-7");
        rightCell.classList.add("ms-4")
        rightCell.classList.add("m-md-2");
        rightCell.style.whiteSpace = "pre-wrap";
        row.appendChild(leftCell);
        row.appendChild(rightCell);
        saturday_schedule.appendChild(row);
    }
    // populate sunday schedule
    for (item in sunday) {
        var row = document.createElement("tr");
        row.classList.add("row");
        var leftCell = document.createElement("td");
        var leftNode = document.createTextNode(item);
        leftCell.appendChild(leftNode);
        leftCell.classList.add("col-12");
        leftCell.classList.add("col-md-4");
        leftCell.classList.add("m-md-2");
        var rightCell = document.createElement("td");
        var rightNode = document.createTextNode(sunday[item]);
        rightCell.appendChild(rightNode);
        rightCell.classList.add("col-12");
        rightCell.classList.add("col-md-7");
        rightCell.classList.add("ms-4")
        rightCell.classList.add("m-md-2");
        rightCell.style.whiteSpace = "pre-wrap";
        row.appendChild(leftCell);
        row.appendChild(rightCell);
        sunday_schedule.appendChild(row);
    }
}

function friday_toggle() {
    // Highlight friday button
    document.getElementById("friday_button").style.boxShadow = "0px 0px 10px #ECAE58";
    document.getElementById("saturday_button").style.boxShadow = "0px 0px 0px #ECAE58";
    document.getElementById("sunday_button").style.boxShadow = "0px 0px 0px #ECAE58";

    // load friday schedule
    const friday_schedule = document.getElementById("friday_schedule");
    const saturday_schedule = document.getElementById("saturday_schedule");
    const sunday_schedule = document.getElementById("sunday_schedule");
    friday_schedule.style.display = "block";
    saturday_schedule.style.display = "None"
    sunday_schedule.style.display = "None";
}

function saturday_toggle() {
    // Highlight saturday button
    document.getElementById("friday_button").style.boxShadow = "0px 0px 0px #ECAE58";
    document.getElementById("saturday_button").style.boxShadow = "0px 0px 10px #ECAE58";
    document.getElementById("sunday_button").style.boxShadow = "0px 0px 0px #ECAE58";

    // load saturday schedule
    const friday_schedule = document.getElementById("friday_schedule");
    const saturday_schedule = document.getElementById("saturday_schedule");
    const sunday_schedule = document.getElementById("sunday_schedule");
    friday_schedule.style.display = "None";
    saturday_schedule.style.display = "block"
    sunday_schedule.style.display = "None";
}

function sunday_toggle() {
    // Highlight sunday button
    document.getElementById("friday_button").style.boxShadow = "0px 0px 0px #ECAE58";
    document.getElementById("saturday_button").style.boxShadow = "0px 0px 0px #ECAE58";
    document.getElementById("sunday_button").style.boxShadow = "0px 0px 10px #ECAE58";

    // load sunday schedule
    const friday_schedule = document.getElementById("friday_schedule");
    const saturday_schedule = document.getElementById("saturday_schedule");
    const sunday_schedule = document.getElementById("sunday_schedule");
    friday_schedule.style.display = "None";
    saturday_schedule.style.display = "None"
    sunday_schedule.style.display = "block";
}
