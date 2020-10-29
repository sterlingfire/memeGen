
// document.getElementsByClassName("heading"); //example
const memeTop = document.getElementsByClassName("topText")[0];
const memeBottom = document.getElementsByClassName("bottomText")[0];
const form = document.getElementById("options");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    var topText =  document.getElementById("topTextbox").value;
    var bottomText =  document.getElementById("bottomTextbox").value;
    var imgURL = document.getElementById("imageURL").value;
    log(topText, bottomText, imgURL);
    createMeme(imgURL, topText, bottomText);
});

function createMeme(imgURL, topText, bottomText){
    // Load image into the img class upload
    let image = document.getElementById("upload");
    image.src = imgURL;
    // change top text
    memeTop.innerHTML = topText;
    // change bottom text
    memeBottom.innerHTML = bottomText;
}

function log(topText, bottomText, imgURL){
    console.log("URL to be loaded:", imgURL);
    console.log("Top Text:", topText);
    console.log("Bottom text:", bottomText);
}
