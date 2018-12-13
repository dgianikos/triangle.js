var r = 51;
var g = 255;
var b = 255;

function setup() {
	createCanvas(600,600);
	background(204,153,255);

	
	fill(r,g,b);
  quad(0+40,315+50,105*sqrt(3)+40,0+50,120*sqrt(3)+40,45+50,15*sqrt(3)+40,360+50);
  quad(105*sqrt(3)+40,90+50,120*sqrt(3)+40,45+50,195*sqrt(3)+40,270+50,165*sqrt(3)+40,270+50);
  
  fill(r,g,b);
	quad(105*sqrt(3)+40,0+50,135*sqrt(3)+40,0+50,225*sqrt(3)+40,270+50,195*sqrt(3)+40,270+50);
  quad(225*sqrt(3)+40,270+50,240*sqrt(3)+40,315+50,60*sqrt(3)+40,315+50,75*sqrt(3)+40,270+50);
  
  fill(r,g,b);
  quad(60*sqrt(3)+40,315+50,240*sqrt(3)+40,315+50,225*sqrt(3)+40,360+50,45*sqrt(3)+40,360+50);
  quad(105*sqrt(3)+40,90+50,120*sqrt(3)+40,135+50,45*sqrt(3)+40,360+50,15*sqrt(3)+40,360+50);
	
// took code for shape of the triangle form
//https://editor.p5js.org/YuanHau/sketches/Bys_uYLsZ
}

function draw() {
}
