canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_image="mars.jpg";
rover_image= "rover.png";

function add(){

    background_img= new Image();
    background_img.onload=upload_background;
    background_img.src=background_image;

    rover_img= new Image();
    rover_img.onload=upload_rover;
    rover_img.src=rover_image;
}
function upload_background(){
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}

function upload_rover(){
    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
key_pressed=e.keyCode;

if (key_pressed=="38"){
    up();
}
if (key_pressed=="40"){
    down();
}
if (key_pressed=="37"){
    left();
}
if (key_pressed=="39"){
    right();
}
}

function up(){
    if(rover_y>=0){
        rover_y= rover_y-10;
        upload_background();
        upload_rover();



    }

}

function down(){
if(rover_y<=500){
    rover_y= rover_y+10;
    upload_background();
    upload_rover();
}

}

function left(){
    if(rover_x>=0)
{ 
    rover_x= rover_x-10;
    upload_background();
    upload_rover();
}
}

function right(){
    if(rover_x<=600){
rover_x= rover_x+10;
upload_background();
upload_rover();
    }
}