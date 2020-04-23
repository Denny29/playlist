let song1 = {
    name : "Contra",
    artist : "Logic",
    duration : "3:37",
    pic : "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/BobbyTarantino2.jpg/220px-BobbyTarantino2.jpg",
    link : "https://www.youtube.com/watch?v=n1AepUXMAjk",
};
let artistArray = [song1];


function displayArtist(artistArray){
     $(".playlist").empty();
    artistArray.forEach(function(artists){
        $(".playlist").append(
            `<div>
            <h1>${artists.name}</h1>
            <h1>${artists.artist}</h1>
            <h1>${artists.duration}</h1>
            <img class="cover" src="${artists.pic}">
            <a href ="${artists.link}"> <img class="play" src="https://i.etsystatic.com/10919371/r/il/155a7d/1563938723/il_570xN.1563938723_1rmr.jpg"> </a>
            </div>
            `
        );
       
    console.log(artists);
    });
}

displayArtist(artistArray);

$(".easterEgg").click(function(){
    $(".easterEgg").html("Our Playlist");
    let imageUrl = ("communism/commie.jpg");
    console.log(imageUrl);
    $("body").css("background", "url(" + imageUrl + ")");
    let soviet = document.getElementById("myAudio"); 
    function playAudio() { 
        x.play(); 
    } 
 });

 
$(".confirm").click(function(){
    let songName = $(".song").val();
    let songArtist = $(".artist").val();
    let songDuration = $(".length").val();
    let albumCover = $(".albumCover").val();
    let songLink = $(".videoLink").val();
 
    let song = {
        name : songName,
        artist : songArtist,
        duration : songDuration,
        pic : albumCover,
        link : songLink,
    };
        
    artistArray.push(song);
    console.log(artistArray);

    displayArtist(artistArray);

       
});
