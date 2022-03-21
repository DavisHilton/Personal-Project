//Section1 One code

// To switch between Icons have to remove and add classes:
//with remove()
//change through  all icons in order and with some time intervials
//this will select all the icons

const icons = document.querySelectorAll('.section-1-icons i')

//this will alow us to run funtion over and over again with set the 
//inervial. Has 2 perameters : call back function you want to repeat, and
//amout of time want it to take before removed.
let i = 1;
setInterval(() => {
  i++
  const icon = document.querySelector(".section-1-icons .change");
  // to remove class "change" need to use remove().
  // 1st have to use .classList( to get all classes
  // element has) and attach it to icon variable
  // so afetr 4 secs icon should be removed/dissappear
  //icon comes from within this function
  icon.classList.remove("change")

  if (i > icons.length){
    icons[0].classList.add('change')
    i = 1
  } else {
     icon.nextElementSibling.classList.add("change");
}
 
}, 3000)

//End of section one code.

