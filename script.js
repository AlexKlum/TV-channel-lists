// === Menu & Icon ===

// Toggles the menu and changes the icon
function toggleMenu() {
    document.getElementById("menu-list").classList.toggle("menu--show");

    if (document.getElementById("bars").className == "fas fa-bars") {
        document.getElementById("bars").className = "fas fa-times";
    }
    else {
        document.getElementById("bars").className = "fas fa-bars";
    }
}

// === Main Content / The List ===

// Makes sure the right channel & data shows in the list.
function setChannel(name) {

    const svt1Url = "https://tv-api-kn3ny.ondigitalocean.app/SVT%201.json";
    const svt2Url = "https://tv-api-kn3ny.ondigitalocean.app/SVT%202.json";
    const svtBarnUrl = "https://tv-api-kn3ny.ondigitalocean.app/SVT%20Barn.json";
    const kunskapskanalenUrl = "https://tv-api-kn3ny.ondigitalocean.app/Kunskapskanalen.json";
    const svt24Url = "https://tv-api-kn3ny.ondigitalocean.app/SVT%2024.json";

    // Changes the title.
    document.getElementById("js-title").innerHTML = name;


    // When you press "SVT 1".
    if (name === 'SVT 1') {

        // Fetches JSON data.
        fetch(svt1Url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {

                let programs = data;
                let text = '<ul class="list-group list-group-flush"><li id="tidigareKnapp" class="list-group-item show-previous" onclick="visaTidigare()">Visa tidigare program</li>';

                // Adds the data to an array.
                let programData = [];
                programData = programs;

                // The loop
                for (let index = 0; index < programs.length; index++) {

                    // Sorts the data based on starting time.
                    function sortera(a, b) {
                        return new Date(a.start).getTime() - new Date(b.start).getTime();
                    }

                    programs.sort(sortera);

                    // Shows earlier tv programs when you press the button.
                    function visaTidigare() {
                        text = '<li class="list-group-item">' + programData[index].start.slice(11, -8) + '<br>' + programData[index].name + '</li>';
                    }

                    // Current time
                    let currentDate = new Date();
                    let time = currentDate.getTime();
                    // The tv program starting time.
                    let programTime = new Date(programs[index].start).getTime();

                    if (programTime >= time) {
                        text = '<li class="list-group-item">' + programData[index].start.slice(11, -8) + '<br>' + programData[index].name + '</li>';
                    }
                }
                text += "</ul>";

                document.getElementById("js-schedule").innerHTML = text;

            })


    }

    // If you press "SVT 2".
    if (name === 'SVT 2') {

        fetch(svt2Url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {


                let programs = data;
                let text = '<ul class="list-group list-group-flush"><li id="visaTidigareKnapp" class="list-group-item show-previous" onclick="visaTidigare()">Visa tidigare program</li>';

                let programData = [];
                programData = programs;

                for (let index = 0; index < programs.length; index++) {

                    function sortera(a, b) {
                        return new Date(a.start).getTime() - new Date(b.start).getTime();
                    }

                    programs.sort(sortera);

                    function visaTidigare() {
                        text = '<li class="list-group-item">' + programData[index].start.slice(11, -8) + '<br>' + programData[index].name + '</li>';
                    }

                    let currentDate = new Date();
                    let time = currentDate.getTime();

                    let programTime = new Date(programs[index].start).getTime();

                    if (programTime >= time) {
                        text += '<li class="list-group-item">' + programData[index].start.slice(11, -8) + '<br>' + programData[index].name + '</li>';
                    }
                }
                text += "</ul>";

                document.getElementById("js-schedule").innerHTML = text;
            })


    }

    // If you press "SVT Barn".
    if (name === 'SVT Barn') {

        fetch(svtBarnUrl)
            .then((response) => {
                return response.json()
            })
            .then((data) => {


                let programs = data;
                let text = '<ul class="list-group list-group-flush"><li id="visaTidigareKnapp" class="list-group-item show-previous" onclick="visaTidigare()">Visa tidigare program</li>';
                let programData = [];
                programData = programs;

                for (let index = 0; index < programs.length; index++) {

                    function sortera(a, b) {
                        return new Date(a.start).getTime() - new Date(b.start).getTime();
                    }

                    programs.sort(sortera);

                    function visaTidigare() {
                        text = '<li class="list-group-item">' + programData[index].start.slice(11, -8) + '<br>' + programData[index].name + '</li>';
                    }

                    let currentDate = new Date();
                    let time = currentDate.getTime();

                    let programTime = new Date(programs[index].start).getTime();

                    if (programTime >= time) {
                        text += '<li class="list-group-item">' + programData[index].start.slice(11, -8) + '<br>' + programData[index].name + '</li>';
                    }
                }
                text += "</ul>";

                document.getElementById("js-schedule").innerHTML = text;
            })


    }

    // If you press "Kunskapskanalen".
    if (name === 'Kunskapskanalen') {

        fetch(kunskapskanalenUrl)
            .then((response) => {
                return response.json()
            })
            .then((data) => {


                let programs = data;
                let text = '<ul class="list-group list-group-flush"><li id="visaTidigareKnapp" class="list-group-item show-previous" onclick="visaTidigare">Visa tidigare program</li>';

                let programData = [];
                programData = programs;

                for (let index = 0; index < programs.length; index++) {

                    function sortera(a, b) {
                        return new Date(a.start).getTime() - new Date(b.start).getTime();
                    }

                    programs.sort(sortera);

                    function visaTidigare() {
                        text = '<li class="list-group-item">' + programData[index].start.slice(11, -8) + '<br>' + programData[index].name + '</li>';
                    }

                    let currentDate = new Date();
                    let time = currentDate.getTime();

                    let programTime = new Date(programs[index].start).getTime();

                    if (programTime >= time) {
                        text += '<li class="list-group-item">' + programData[index].start.slice(11, -8) + '<br>' + programData[index].name + '</li>';
                    }
                }
                text += "</ul>";

                document.getElementById("js-schedule").innerHTML = text;
            })


    }

    // If you press "SVT 24".
    if (name === 'SVT 24') {

        fetch(svt24Url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {


                let programs = data;
                let text = '<ul class="list-group list-group-flush"><li id="visaTidigareKnapp" class="list-group-item show-previous" onclick="visaTidigare">Visa tidigare program</li>';

                let programData = [];
                programData = programs;

                for (let index = 0; index < programs.length; index++) {

                    function sortera(a, b) {
                        return new Date(a.start).getTime() - new Date(b.start).getTime();
                    }

                    programs.sort(sortera);

                    function visaTidigare() {
                        text = '<li class="list-group-item">' + programData[index].start.slice(11, -8) + '<br>' + programData[index].name + '</li>';
                    }

                    let currentDate = new Date();
                    let time = currentDate.getTime();

                    let programTime = new Date(programs[index].start).getTime();

                    if (programTime >= time) {
                        text += '<li class="list-group-item">' + programData[index].start.slice(11, -8) + '<br>' + programData[index].name + '</li>';
                    }
                }
                text += "</ul>";

                document.getElementById("js-schedule").innerHTML = text;
            })


    }
}