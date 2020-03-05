let song1 = {
    name : "Contra",
    artist : "Logic",
    duration : "3:37",
    pic : "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/BobbyTarantino2.jpg/220px-BobbyTarantino2.jpg",
    link : "https://www.youtube.com/watch?v=n1AepUXMAjk",
};
let artistArray= [song1];

artistArray.forEach(function(artists){
    $(".artist-name").append(artists.name);
    $(".artist-artist").append(artists.artist);
    $(".artist-duration").append(artists.duration);
    $(".artist-pic").append(artists.pic);
    $(".artist-link").append(artists.link);
    // console.log(artists);
});

$(".easterEgg").click(function(){
    $(".easterEgg").html("Our Playlist");
    let imageUrl = "communism/commie.jpeg";
    console.log(imageUrl);
    $("body").css("background-image", "url(" + imageUrl + ")");
 });


$(".addButton").click(function(){
    $(".inputs").show();
});


$(".confirm").click(function(){
    $(".inputs").hide();
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

});
