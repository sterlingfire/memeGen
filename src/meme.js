// document.getElementsByClassName("heading"); //example
var form = document.getElementById("options");

form.addEventListener("submit", function(event) {
        event.preventDefault();
        var imgURL = document.getElementById("imageURL").value;
        var topText =  document.getElementById("topTextbox").value;
        var bottomText =  document.getElementById("bottomTextbox").value;
        var memeText =  document.getElementById("midTextbox").value;
        if( memeText === null ) memeText = "";
        console.log("URL:", imgURL);
        if (imgURL.length<12) alert("You must specify a valid image URL to continue.");
        else createMeme(imgURL, topText, bottomText, memeText);
    });

function createMeme(imgURL, topText, bottomText, memeText=""){
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
    let font = document.querySelector("#fonts").value;
    // let color = document.getElementById("color").value;

    container.appendChild(newMeme);
    newMeme.appendChild(memeTop);
    newMeme.appendChild(image);
    //middle

    let midText = document.createElement("div");
    midText.innerHTML = memeText;
    midText.setAttribute("class","memeText");
    newMeme.appendChild(midText);
    midText.style.fontFamily = font;
    // midText.style.color = color;

    newMeme.appendChild(memeBottom);
    //set font
    memeTop.style.fontFamily = font;
    // memeTop.style.color = color;
    memeBottom.style.fontFamily = font;
    // memeBottom.style.color= color;
    //add x buttom
    makexbutton(newMeme);
    form.reset();
    dragElements();
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

// function changeFont(font){
//     console.log("font:",font);
//     let args = arguments;
//     // console.log(color);
//     //iterate through args
//     for (let arr of args){
//          let elements = document.querySelectorAll(".topText, .bottomText, .memeText")
//         for (let e of elements){
//             console.log(e);
//             e.style.fontFamily = font;
//             // e.style.color = color;
//         }
//     }

// }

function dragElements(){
    let elements = document.querySelectorAll(".topText, .bottomText, .memeText");
    console.log("Elements to be dragged:",elements);
    for (let e of elements) dragElement(e); // makes selected elements draggable
}
function dragElement(element){
    element.style.position = "absolute";
    var x0=0, y0=0, x1=0,y1=0;
    element.onmousedown = dragMouseDown;
    function dragMouseDown(event){
        event = event|| window.event;
        event.preventDefault();
        x1 = event.clientX;
        y1 = event.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    function elementDrag(event){
        event = event || window.event;
        event.preventDefault();
        // calculate new cursor position:
        x0 = x1 - event.clientX;
        y0 = y1 - event.clientY;
        x1 = event.clientX;
        y1 = event.clientY;
        // set new element position
        element.style.top = (element.offsetTop - y0) + "px";
        element.style.left = (element.offsetLeft - x0) + "px";
    }
    function closeDragElement(){
        // stop moving when click is released
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
// Initial page code
// Add 'x' button for default meme on page
let defaultmeme = document.getElementsByClassName("meme")[0];
makexbutton(defaultmeme);
// Make elements draggable
dragElements();
