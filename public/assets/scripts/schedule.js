const friday = {
    "5:00 PM - 6:00 PM": "Registration and Check In - Klaus Atrium",
    "5:45 PM - 6:30 PM": "Opening Ceremony - Klaus 1443",
//     "6:00 PM - 7:30 PM": "Team Building",
    "7:00 PM - 8:00 PM": "Sponsor Expo (Hosted on Gatherly)",
    "8:00 PM - 9:00 PM": "Dinner - Klaus Atrium",
    "9:30 PM": "HACKING BEGINS!",
    "10:00 PM - 10:45 PM": "GT Athletics Workshop - Klaus 1447",
    "11:00 PM": "Late Night Cookies - Klaus Atrium"
}

const saturday = {
    "1:00 AM - 4:00 AM": "Midnight Snacks - Klaus Atrium",
    "8:00 AM - 11:00 AM": "Breakfast Croissants - Klaus Atrium",
    "9:00 AM - 10:00 AM": "Intro to SQL in Deepnote - Klaus 2447",
    "11:00 AM - 12:00 PM": "Pitching Your Product with CREATE-X - Klaus 2456",
    "12:00 PM - 1:30 PM": "Moe's for Lunch - Klaus Atrium",
    "12:30 PM - 1:30 PM": "Introduction to Natural Language Processing - Klaus 2447",
    "1:30 PM - 2:30 PM": "Workshop conducted by Anthem Engineers - Klaus 1447",
    "3:00 PM - 4:00 PM": "Data Privacy and Security Workshop - Klaus 1447",
    "4:00 PM - 5:00 PM": "Monte Carlo Simulations in Trading - Klaus 2447", 
    "5:00 PM - 6:00 PM": "Evening Snacks - Klaus Atrium",
    "6:00 PM - 7:00 PM": "Introduction to Machine Learning - Klaus 1447",
    "7:30 PM - 9:00 PM": "Dinner - Klaus Atrium",
    "11:45 PM": "Snacks"
}

const sunday = {
    "1:00 AM - 4:00 AM": "Midnight Snacks - Klaus Atrium",
    "8:00 AM": "Breakfast Bagels - Klaus Atrium",
    "9:30 AM": "HACKING ENDS!",
    "10:00 AM - 12:00 PM": "Judging Begins on Gatherly",
    "12:30 PM - 1:30 PM": "Closing Ceremony - Klaus 1443"
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
