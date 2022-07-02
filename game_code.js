
let ball_y;
let ball_dx,ball_dy,radius;
let life=3;
let paddle_width,paddle_height,paddle_dx,paddle_x,paddle_y;
let brick_width,brick_height,brick_dx,brick_x,brick_y;
var brick=[];
let score=0;
var count=0;
let win=[];

function setup() {
  createCanvas(400, 400);
 // score=0;
  ball_x=width/2;
  ball_y=height/2;
  //circle(x_width,height/2,50);
  ball_dx=4;
  ball_dy=2;
  radius=20/2;
  paddle_width=80;
  paddle_height=15;
  paddle_x=(width/2)-(80/2);
  paddle_y=(height-10);
  paddle_dx=6;
  
 brick=[
   {wid: 80,heig:10,x:10,y:190},
   {wid: 80,heig:10,x:100,y:50},
   {wid: 80,heig:10,x:20,y:10},
   {wid: 80,heig:10,x:250,y:100},
   {wid: 80,heig:10,x:50,y:120},
   {wid: 80,heig:10,x:180,y:150},
   {wid: 80,heig:10,x:280,y:260},
   {wid: 80,heig:10,x:80,y:100}];
  
  
}

function draw()
{
  background("black");
  fill("white");
  circle(ball_x,ball_y,2*radius);
  fill("blue");
  rect(paddle_x,paddle_y,paddle_width,paddle_height);
 for(var t=0;t<(brick.length-2);t++)
   {win[t]=0}
  
  fill("yellow");
 for(var i=0;i<(brick.length-2);i++)
    {
       rect(brick[i].x,brick[i].y,brick[i].wid,brick[i].heig);
    }
  fill("red");
  for(var j=6; j<(brick.length);j++)
    {
       rect(brick[j].x,brick[j].y,brick[j].wid,brick[j].heig);
    }
  fill("white");
  ball_x+=ball_dx;
  ball_y+=ball_dy;
  if(keyIsDown(RIGHT_ARROW)&& (paddle_x+paddle_width)<width)
  {
    paddle_x+=paddle_dx;
  }
  if(keyIsDown(LEFT_ARROW)&& (paddle_x>0))
  {
  paddle_x-=paddle_dx;
  }
 if((ball_x+radius)>width || (ball_x-radius)<0)
   ball_dx=-ball_dx;
 if((ball_y-radius)<0)
    {
    ball_dy=-ball_dy;
    }
  if((ball_y+radius)>paddle_y)
  {
    if((ball_x>paddle_x)&&(ball_x<(paddle_x+paddle_width))&&((ball_y+radius)>paddle_y))
    {
   ball_dy =-(ball_dy)
    }
    
  }
  
       

  

  // brick will disappear if you hit it
  //and score will increase by 10
  
  
 
for(var k=0;k<(brick.length-2);k++)
{ 
//lower side of brick 
if((ball_y-(radius))<(brick[k].y+brick[k].heig) &&(ball_y-(radius))>(brick[k].y)) 
{
if(((ball_x+(radius))>brick[k].x)&&(ball_x-(radius))<(brick[k].wid+brick[k].x))
{
ball_dy =-(ball_dy);
brick[k].wid=0;
brick[k].heig=0;
  
 score+=10;
  win[k]=1;
}

}

  
//uper side of brick
if((ball_y+(radius))>brick[k].y && (ball_y+(radius))<(brick[k].y+brick[k].heig) ) 
{
if(((ball_x+(radius))>brick[k].x)&&(ball_x-(radius))<(brick[k].wid+brick[k].x))
{
ball_dy =-(ball_dy);
brick[k].wid=0;
brick[k].heig=0;
  score+=10;
  win[k]=1;
}

}
  
  
//left of brick
if((ball_x+(radius))>brick[k].x && (ball_x+(radius))<(brick[k].wid+brick[k].x))
{
if(((ball_y+(radius))>brick[k].y) && (ball_y-(radius))<(brick[k].heig+brick[k].y))
{
ball_dx =-(ball_dx);
brick[k].wid=0;
brick[k].heig=0;
  score+=10;
  win[k]=1;
}

}

  
// right part of brick
if((ball_x-(radius))<(brick[k].x+brick[k].wid) && (ball_x-(radius))>(brick[k].x) )
{
if(((ball_y-(radius))>brick[k].y) && (ball_y+(radius))<(brick[k].heig+brick[k].y))
{
ball_dx =-(ball_dx);
brick[k].wid=0;
brick[k].heig=0;
  score+=10;
  win[k]=1;
}
  
}
  
}
 
  
  for(var l=6;l<(brick.length);l++)
{
  
  
//lower side of brick 
if((ball_y-(radius))<(brick[l].y+brick[l].heig) &&(ball_y-(radius))>(brick[l].y)) 
{
if(((ball_x+(radius))>brick[l].x)&&(ball_x-(radius))<(brick[l].wid+brick[l].x))
{
ball_dy =-(ball_dy);
brick[l].wid=10;
brick[l].heig=8;
  
}

}

  
//uper side of brick
if((ball_y+(radius))>brick[l].y && (ball_y+(radius))<(brick[l].y+brick[l].heig) ) 
{
if(((ball_x+(radius))>brick[l].x)&&(ball_x-(radius))<(brick[l].wid+brick[l].x))
{
ball_dy =-(ball_dy);
brick[l].wid=10;
brick[l].heig=8;
  
}

}
  
  
//left of brick
if((ball_x+(radius))>brick[l].x && (ball_x+(radius))<(brick[l].wid+brick[l].x))
{
if(((ball_y+(radius))>brick[l].y) && (ball_y-(radius))<(brick[l].heig+brick[l].y))
{
ball_dx =-(ball_dx);
brick[l].wid=10;
brick[l].heig=8;
}

}

  
// right part of brick
if((ball_x-(radius))<(brick[l].x+brick[k].wid) && (ball_x-(radius))>(brick[l].x) )
{
if(((ball_y-(radius))>brick[l].y) && (ball_y+(radius))<(brick[l].heig+brick[l].y))
{
ball_dx =-(ball_dx);
brick[l].wid=10;
brick[l].heig=8;
}
}
}
  text("Life Line:"+life,width-80,40);
  text(" Score:"+score,width-80,20);
   if((ball_y+(radius))>height)
         { 
           if(life>1)
           {
          
             ball_x = 200;
             ball_y = 200;
             life-=1;
             text("Life Line:"+life,width-80,40);
         
            }
           
           else
           {
             life=0;
             score=score;
             ball_dy=0;
             ball_dx=0;
             }
           
         }  
fill("green")
  if(life==0)
    {
      
      text("GAME OVER",150,200 )
      
    }
  
  
  if(score==60)
    {
      ball_dy=0;
             ball_dx=0;
      text("YON WON",150,200 );
      
    }
  
   
}