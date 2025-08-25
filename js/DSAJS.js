
//
function flipBottle(event) {
  // Use 'event.currentTarget' to get the element that the event listener is on.
  // This is the entire bottle container, not just a colored div.
  let bottle = event.currentTarget;
  // 'toggle' adds the class if it's not there, and removes it if it is.
  bottle.classList.toggle("flipped");
}

// Get the correct HTML element, which should be the whole bottle container.
// Based on your HTML, 'touch-1' is the container.
let clickingBottle = document.getElementById("touch-1");

// Add the event listener to the container.
clickingBottle.addEventListener("click", flipBottle);

// finding small letter from the given scribbled letters
   
function addThem(nums,target){
for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i] + nums[j]===target){
            console.log([i,j]);
        }
    }
}
}
  
let nums=[2,7,11,15]
let target=9;
addThem(nums,target);

var me = "Abebe beso bela";
var select = /be/gi; // ✅ This is a RegExp object
console.log(select.exec(me)); // ✅ This will return the first match
 
const text = "Abebe beso bela";
const regex = /be/g;
let match;

while ((match = regex.exec(text)) !== null) {
  console.log(match[0]);
   // Logs each "be"
}