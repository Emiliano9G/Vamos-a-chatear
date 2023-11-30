function addUser()
{
    player1_name = document.getElementById("NuDT").value;

//clase 91

    localStorage.setItem("player1_name", player1_name);

    window.location="kwitter_room.html";
}