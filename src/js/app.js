import "../scss/app.scss";
const R = require('ramda');


window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
   
  
  const arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ];
  
  let pluckedOut = R.pluck('class');
  const pluckedClasses = pluckedOut(arrayToPluck);
  
  
  const articles = document.querySelectorAll("article");

  articles.forEach((article, index) => {
    article.classList.add(pluckedClasses[index])
  })
});
