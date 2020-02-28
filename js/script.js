// $(".communism").hover(function(){
    // $(".service").show();
    // $(".service").css("background-image: url('https://ak2.picdn.net/shutterstock/videos/507802/thumb/1.jpg');"); Background img easter egg
// });
$(".addButton").click(function(){
    $(".addSongs").show();
});

let song = $(".song").val();
let artist = $(".artist").val();
let length = $(".length").val();
let albumCover = $(".albumCover").val();
let videoLink = $(".videoLink").val();

$(".confirm").click(function(){
    $(".songs").append('<div>'+song+'</div>');
});