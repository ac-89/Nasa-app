//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

const img = document.querySelector("img");
const imgName = document.querySelector("h2");
const desc = document.querySelector("h3");
const frame = document.querySelector("iframe");
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const imgDate = document.querySelector("#picDate").value;

  img.src = "";
  frame.src = "";
  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=rAt0O9U2zA4ILAdQi5g5P3hnPzIIoghtmS0Me5D6&date=${imgDate}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      if (data.media_type === "image") {
        img.src = data.hdurl;
      } else if (data.media_type === "video") {
        frame.src = data.url;
      }
      img.style.width = "800px";
      imgName.innerText = data.title;
      desc.innerText = data.explanation;
    });
}

getFetch();
