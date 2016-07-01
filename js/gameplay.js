// document.onkeydown = function(event) {
//      var key_pressed; 
//      if(event == null){
//           key_pressed = window.event.keyCode; 
//      }
//      else {
//           key_pressed = event.keyCode; 
//      }
//      switch(key_pressed){
//           case 37:
//                left=true;
//                break; 
//           case 38:
//                up=true;
//                break; 
//           case 39:
//                right=true;
//                break;
//           case 40:
//                down=true;
//                break; 
//      } 
// }
 
// document.onkeyup = function(event) {
//      var key_pressed; 
//      if(event == null){
//           key_pressed = window.event.keyCode; 
//      }
//      else {
//           key_pressed = event.keyCode; 
//      }
//      switch(key_pressed){
//           case 37:
//                left=false;
//                break; 
//           case 38:
//                up=false;
//                break; 
//           case 39:
//                right=false;
//                break;
//           case 40:
//                down=false;
//                break; 
//      } 
// }
 
// var context;
// var x_speed=0;
// var y_speed=0;
// var y=250;
// var x=250;
// var left=false;
// var right=false;
// var up=false;
// var down=false;
// var friction=0.95;
 
// function on_enter_frame(){
//      if(left){
//           x_speed--;
//      }
//      if(right){
//           x_speed++;
//      }
//      if(up){
//           y_speed--;
//      }
//      if(down){
//           y_speed++;
//      }
//     context=World.context;
//     context.clearRect(0,0,500,500);
//     context.beginPath();
//     context.fillStyle="#000000";
//     context.arc(x,y,30,0,Math.PI*2,true);
//     context.closePath();
//     context.fill();
//     x+=x_speed;
//     y+=y_speed;
//     x_speed*=0.7;
//     y_speed*=0.7;
// }
// setInterval(on_enter_frame,3);
