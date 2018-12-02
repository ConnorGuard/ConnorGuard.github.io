let angle = 0;
let w = 42;
let ma;
let maxD;

function setup() { 
  createCanvas(400, 600, WEBGL);
  ma = atan(1/sqrt(2));
  maxD = dist(0,0,200, 200)
}

function draw() { 
  background(300);
  ortho(-500,500,500,-500,0,1000);
  directionalLight(200,200,200,0,-1,1);
   directionalLight(200,200,200,0,1,1);
 
  
  rotateX(-QUARTER_PI);
  rotateY(0.75);
  
 
  
  
  let offset = 0;
  for (let z = 0; z < height; z += w) {
     for(let x = 0; x < width; x += w) {
   		 push();
       let d = dist(x,z,width/2,height/2)
       let offset = map(d,0,maxD,-2.5,2.5); 
  		 let a = angle + offset;
  		 let h = floor(map(sin(a), -1, 1, 50, 500));
 			 translate(x-width/2 , 0, z - height / 2);
  		 box(w-2, h, w-2 );
 			 ambientMaterial(225);
 				//rect(x - width / 2 + (w / 2), 0 , w - 2 ,h);
    
   		 
   		 pop();
     }
    offset += 0.1;
  }
  angle -= 0.1
}
