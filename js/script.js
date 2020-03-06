let song1 = {
    name : "Contra",
    artist : "Logic",
    duration : "3:37",
    pic : "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/BobbyTarantino2.jpg/220px-BobbyTarantino2.jpg",
    link : "https://www.youtube.com/watch?v=n1AepUXMAjk",
};
let artistArray = [song1];

artistArray.forEach(function(artists){
    $(".artist-name").append(artists.name);
    $(".artist-artist").append(artists.artist);
    $(".artist-duration").append(artists.duration);
    $(".artist-pic").append(`<img src="${artists.pic}">`);
    $(".artist-link").append(`<a href ="${artists.link}"> Listen</a>`);
    console.log(artists);
});

$(".easterEgg").click(function(){
    $(".easterEgg").html("Our Playlist");
    let imageUrl = ("communism/commie.jpg");
    console.log(imageUrl);
    $("body").css("background", "url(" + imageUrl + ")");
    
        new Audio("file:///workspace/playlist/communism/sovietAnthem.mp3").play();    
 });


$(".addButton").click(function(){
    
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

    let songArray = [song];

    songArray.forEach(function(songs){
        $(".artist-name").append(songs.name);
        $(".artist-artist").append(songs.artist);
        $(".artist-duration").append(songs.duration);
        $(".artist-pic").append(`<img src="${songs.pic}">`);
        $(".artist-link").append(`<a href ="${artists.link}"> Listen</a>`);
    });

});
