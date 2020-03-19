let song1 = {
    name : "Contra",
    artist : "Logic",
    duration : "3:37",
    pic : "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/BobbyTarantino2.jpg/220px-BobbyTarantino2.jpg",
    link : "https://www.youtube.com/watch?v=n1AepUXMAjk",
};
let artistArray = [song1];


function displayArtist(artistArray){
    artistArray.forEach(function(artists){
        $(".artist-name").append(`<h1>${artists.name}</h1>`);
        $(".artist-artist").append(`<h1>${artists.artist}</h1>`);
        $(".artist-duration").append(`<h1>${artists.duration}</h1>`);
        $(".artist-pic").append(`<img class="cover" src="${artists.pic}">`);
        $(".artist-link").append(`<a href ="${artists.link}"> <img class="play" src="https://i.etsystatic.com/10919371/r/il/155a7d/1563938723/il_570xN.1563938723_1rmr.jpg"> </a>`);
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
        // let songArray = [song];
    artistArray.push(song);
    console.log(artistArray);

    displayArtist(artistArray);

        // $(".artist-name").append(`<h1> ${song.name} </h1>`);
        // $(".artist-artist").append(`<h1> ${song.artist} </h1>`);
        // $(".artist-duration").append(`<h1> ${song.duration} </h1>`);
        // $(".artist-pic").append(`<img class="cover" src="${song.pic}">`);
        // $(".artist-link").append(`<a href ="${song.link}"> <img class="play" src="https://i.etsystatic.com/10919371/r/il/155a7d/1563938723/il_570xN.1563938723_1rmr.jpg"> </a>`);
});
