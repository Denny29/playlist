let song1 = {
    name : "Contra",
    artist : "Logic",
    duration : "3:37",
    pic : "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/BobbyTarantino2.jpg/220px-BobbyTarantino2.jpg",
    link : "https://www.youtube.com/watch?v=n1AepUXMAjk",
};
let artistArray = [song1];

artistArray.forEach(function(artists){
    $(".artist-name").append(`<h1>${artists.name}</h1>`);
    $(".artist-artist").append(`<h1>${artists.artist}</h1>`);
    $(".artist-duration").append(`<h1>${artists.duration}</h1>`);
    $(".artist-pic").append(`<img src="${artists.pic}">`);
    $(".artist-pic").append(`<a href ="${artists.link}"></a>`);
    console.log(artists);
});

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


    $(".songs").append(`<div class="${songName}"> <h2> ${songName} </h2> </div>`);

    function create(newName){
        $(`.${newName.name}`).click(function(){
            $(".artist-name").html(newName.name);
            $(".artist-artist").html(newName.artist);
            $(".artist-duration").html(newName.duration);
            $(".artist-pic").html(`<img src="${newName.pic}">`);
            $(".artist-link").html(`<a href ="${newName.link}"> Listen</a>`);
        });
    }
    create(song);
});
