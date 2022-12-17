const elUrlShortner = document.querySelector(".url-shortener")
const elUrlShortenerForm = document.querySelector(".js-url-shortener-form");
const elUrlShortenerResults = document.querySelector(".url-shortener__results");

if (elUrlShortenerForm) {
  elUrlShortenerForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    elUrlShortenerResults.classList.add("url-shortener__results--open")
  });
}


if (elUrlShortner) {
  elUrlShortner.addEventListener("click", function(evt) {
    if (evt.target.matches(".js-copy-short-linkbutton")) {
      evt.target.textContent = "Copied!"
      evt.target.style.backgroundColor = "#3A3054"
      
      setTimeout(() => {
        evt.target.textContent = "Copy"
        evt.target.style.backgroundColor = "#2bd0d0"
      }, 2500);
    }
  })
}