aboutA = document.getElementById('aboutA');
homeA = document.getElementById('homeA');
missionA = document.getElementById('missionA');
impactA = document.getElementById('impactA');
countriesA = document.getElementById('countriesA');
function rToAbt() {
    window.location = "about.html";
    aboutA.style.fontStyle = 'italic';
    homeA.style.fontStyle = 'normal';
    missionA.style.fontStyle = 'normal';
    impactA.style.fontStyle = 'normal';
    countriesA.style.fontStyle = 'normal';
}
function rToMission() {
    window.location = "mission.html";
    aboutA.style.fontStyle = 'normal';
    homeA.style.fontStyle = 'normal';
    missionA.style.fontStyle = 'italic';
    impactA.style.fontStyle = 'normal';
    countriesA.style.fontStyle = 'normal';
}
function rToImpact() {
    window.location = "impact.html";
    aboutA.style.fontStyle = 'normal';
    homeA.style.fontStyle = 'normal';
    missionA.style.fontStyle = 'normal';
    impactA.style.fontStyle = 'italic';
    countriesA.style.fontStyle = 'normal';
}
function rToCountries() {
    window.location = "countries.html";
    aboutA.style.fontStyle = 'normal';
    homeA.style.fontStyle = 'normal';
    missionA.style.fontStyle = 'normal';
    impactA.style.fontStyle = 'normal';
    countriesA.style.fontStyle = 'italic';
}
function rToDonate() {
    window.location = "donate.html";
}
function rToHome() {
    window.location = "index.html";
    homeA.style.fontStyle = 'italic';;
    aboutA.style.fontStyle = 'normal';
    missionA.style.fontStyle = 'normal';
    impactA.style.fontStyle = 'normal';
    countriesA.style.fontStyle = 'normal';
}
function rToIndia() {
    window.location = "india.html";
}
function rToNepal() {
    window.location = "nepal.html";
}
function rToBhutan() {
    window.location = "bhutan.html";
}
/*noOfCentres = document.getElementById("noOfCentres");
noOfAccess = document.getElementById("noOfAccess");
noOfVillagers = document.getElementById("noOfVillagers");
function increaseCentres() {
    for(i=0; i<=68; i++) {
        noOfCentres.innerHTML = toString(i);
    }
}
setInterval(increaseCentres(), 1);*/