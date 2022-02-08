let ratingStar = document.querySelectorAll(".r-star");
let starContainer = document.querySelector(".ratings");
Object.values(ratingStar).map((star, idx) => {
  star.addEventListener("click", () => {
    if(star.innerText === "star_outline") for(let i = idx; i >= 0; i--) ratingStar[i].innerText = "star";
    else for(let i = idx+1; i < ratingStar.length; i++) ratingStar[i].innerText = "star_outline";
  })
})