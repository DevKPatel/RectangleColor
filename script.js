let rect = document.querySelector("#center")
rect.addEventListener('mousemove',function(details){
    const rectangleLocation = rect.getBoundingClientRect();
    var insiderRectangle = details.clientX - rectangleLocation.left;

    if(insiderRectangle < rectangleLocation.width/2){
        console.log("left");
    }
    else{
        console.log("right");

    }
})
const centerLine = document.createElement("div");
centerLine.style.width = "2px"; // Set the width of the vertical line
centerLine.style.height = "100%"; // Set the height to cover the entire rectangle
centerLine.style.backgroundColor = "green"; // Change the color as needed
centerLine.style.position = "absolute";
centerLine.style.top = "0";
centerLine.style.left = "50%";

// Append the center line element to the rectangle
rect.appendChild(centerLine);