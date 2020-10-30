// document.getElementsByClassName("heading"); //example
var form = document.getElementById("options");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    var topText =  document.getElementById("topTextbox").value;
    var bottomText =  document.getElementById("bottomTextbox").value;
    var imgURL = document.getElementById("imageURL").value;
    createMeme(imgURL, topText, bottomText);
});

function createMeme(imgURL, topText, bottomText){
    //make a meme div
    let newMeme = document.createElement("div");
    newMeme.setAttribute("class","meme");
    //add image
    let image = document.createElement("img");
    image.src = imgURL;
    image.setAttribute("class","upload")
    //top text
    let memeTop = document.createElement("div");
    memeTop.innerHTML = topText;
    memeTop.setAttribute("class","topText");
    //bottom text
    let memeBottom = document.createElement("div");
    memeBottom.innerHTML = bottomText;
    memeBottom.setAttribute("class","bottomText");
    //put it all inside the memes div
    let container = document.getElementsByClassName("memes")[0];
    container.appendChild(newMeme);
    newMeme.appendChild(memeTop);
    newMeme.appendChild(image);
    newMeme.appendChild(memeBottom);
    //add x buttom
    makexbutton(newMeme);
    form.reset();
}
function makexbutton(meme){
    var button = document.createElement("BUTTON");   // Create a <button> element
    button.innerHTML = "X";  // Insert text
    button.setAttribute('class', 'x-button');
    button.addEventListener("click", function(event){
        //delete meme
        event.preventDefault();
        // let meme = document.getElementsByClassName('meme')[0];
        meme.parentNode.removeChild(meme);
        button.parentNode.removeChild(button);
    })
    meme.appendChild(button);
}
function log(topText, bottomText, imgURL){
    console.log("URL to be loaded:", imgURL);
    console.log("Top Text:", topText);
    console.log("Bottom text:", bottomText);
}
let defaultmeme = document.getElementsByClassName("meme")[0];
makexbutton(defaultmeme);
