let rect = document.querySelector("#center")
const { left, right } = rect.getBoundingClientRect();

function colorRectangle() {
  rect.addEventListener("mousemove", (dets) => {
    let DistanceFromCenterIs = (left + right) / 2 - dets.clientX;
    let distanceInPercentage =
      (DistanceFromCenterIs / (right - (left + right) / 2)) * 100;
    let percentageForColor = 255 * (distanceInPercentage / 100);
    if (dets.clientX <= (left + right) / 2) {
      rect.style.backgroundColor = `rgb(${percentageForColor},0,0)`;
    } else {
      rect.style.backgroundColor = `rgb(0,0,${percentageForColor * -1})`;
    }
  });
}
colorRectangle();

