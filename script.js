// const box1= document.getElementById('box1');
// box1.addEventListener("click",()=>{
//   box1.style.backgroundColor = "red" ;
// })

const greeting = document.getElementById('grt');
const greetinginput= document.getElementById('inptgrt');
const grtbtn = document.getElementById('grtbtn');
 
grtbtn.addEventListener("click", (event)=>{
  const name = greetinginput.value.trim();
  event.preventDefault();
  if(name){
    greeting.textContent = `Hello, ${name} `;
  }
  else{
    greeting.textContent= "Hello";
  }
});

// Box colour change functionality
    const boxColors = {
      box1: "red",
      box2: "blue",
      box3: "green",
      box4: "yellow"
    };

    Object.keys(boxColors).forEach(id => {
      const box = document.getElementById(id);
      box.addEventListener("click", () => {
        box.style.backgroundColor = boxColors[id];
        box.style.color = "#fff4f4ff"; // text contrast
      });
    });