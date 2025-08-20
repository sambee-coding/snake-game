const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake = [];
snake[0] = {
  x: (Math.floor(Math.random() * columns)) * scale,
  y: (Math.floor(Math.random() * rows)) * scale
};
let food={
    x:(Math.floor(Math.random() * columns)) * scale,
    y:(Math.floor(Math.random() * rows)) * scale
}

let d = "right";

document.onkeydown = direction;
function direction(event){
    let key=event.keyCode;
    if(key == 37 && d != "right"){
        d ="left"
    }
     if(key == 38 && d != "down"){
        d ="up"
    }
     if(key == 39 && d != "left"){
        d ="right"
    }
     if(key == 40 && d != "up"){
        d ="down"
    }
}
let playGame = setInterval(draw, 100);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //darw food
ctx.fillStyle="red";
ctx.strokeStyle="black";
ctx.fillRect(food.x,food.y,scale,scale);
ctx.strokeRect(food.x,food.y,scale,scale);
  

  // draw the snake
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "pink";
    ctx.fillRect(snake[i].x, snake[i].y, scale, scale);
    ctx.strokeRect(snake[i].x, snake[i].y, scale, scale);
  }

  // old head position
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  // which direction to move
  if (d == "left") snakeX -= scale;
  else if (d == "right") snakeX += scale;
  else if (d == "up") snakeY -= scale;
  else if (d == "down") snakeY += scale;
 if(snakeX > canvas.width){
    snakeX= 0;
 }
 if(snakeY > canvas.height ) {
    snakeY= 0;
 } 
 if(snakeX < 0){
    snakeX = 0;
 }
 if(snakeY < 0){
    snakeY = 0;
 }
 
 //if the snake eats the food ,it grows
 if(snakeX === food.x && snakeY === food.y){
    food={
        x:(Math.floor(Math.random() * columns)) * scale,
        y:(Math.floor(Math.random() * rows)) * scale
        }
 }
 else{
    snake.pop(); // remove the last element if the food is not eaten
 }
 
 
 // new head

  let newHead = {
    x: snakeX,
    y: snakeY
  };

  snake.unshift(newHead); // add new head
}