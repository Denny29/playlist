$(".easterEgg").click(function(){
    $(".easterEgg").html("Our Playlist");
    let imageUrl = "communism/commie.jpeg";
    $(".body").css("background-image", "url(" + imageUrl + ")");
 });

let songName = $(".song").val();
let songArtist = $(".artist").val();
let songDuration = $(".length").val();
let pic = $(".albumCover").val();
let link = $(".videoLink").val();
 
songName = []
songArtist = []
songDuration = []
pic = []
link =[]

$(".addButton").click(function(){
    $(".inputs").show();
    
});

$(".confirm").click(function(){
    $(".inputs").hide();
});
