
let bolds = document.getElementsByTagName("strong");

function highlight() {
    //Write your code here
  for(let i=0; i<bolds.length; i++) {
	  bolds[i].style.color = "green";
  }

}


function return_normal() {
    //Write your code here
  for(let i=0; i<bolds.length; i++) {
	  bolds[i].style.color = "black";
  }
    
}
