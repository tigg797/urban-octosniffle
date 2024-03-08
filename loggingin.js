function lockUsernames() {
    var player1Input = document.getElementById("player1_nameinp").value;
    var player2Input = document.getElementById("player2_nameinp").value;
    var lockButton = document.getElementById("player1login");
    lockButton.disabled = true;
    var quizButton = document.getElementById("bigbtn");
    quizButton.style.opacity = "1";
} //ignore lines 1-8 they're irrelevant

function makefull() {
    document.getElementById("player1_nameinp").style.opacity = "0.4";
    document.getElementById("c").style.opacity = "0.4";
    document.getElementById("bigbtn").style.opacity = "1";
    document.getElementById("bigbtn").style.backgroundColor = "red";
    document.getElementById('lock1img').src="lockicon.svg"
    document.getElementById('player1login').src="lockicon.svg"
    
}

function addUser() {
    player1_name = document.getElementById("player1_nameinp").value;
    player2_name = document.getElementById("player1_nameinp").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "thequiz.html";
}


