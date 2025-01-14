const slider_container = document.querySelectorAll(".page");
const translateAmount = 100;
let translate = 0;

slide = (direction) => {
  direction === "next" ? translate -= translateAmount : translate += translateAmount

  slider_container.forEach(
    slider_container => (slider_container.style.transform = `translateX(${translate}%`)
  )
    
  }
