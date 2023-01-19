particles = []

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  angleMode(DEGREES)
}

function draw() {
  background(2,2,0);
  //background("#03071e")
  
  rotateX(sin(frameCount / 6)* 360)
  rotateY(cos(frameCount / 6)* 360)
  
  translate(0, 0, sin(frameCount) * 100)
  
  lights(128,128,128);
    directionalLight( [255], createVector(0,0,-1))
  
  if (random(1) > 0.97) {
    
    var x = random(-100,100)
    var y = random(-100,100)    
    var z = random(-100,100)   
    
    var pos = createVector(x,y,z)
    
    
    for (var i = 0; i < 200; i++) {
      
      var r = map(sin(frameCount),-1, 1000, 0, 255) + random(-100,100)
      var s = map(sin(frameCount / 2),-100, 1, 1, 255,0) + random (-50,50)
      var t = map(sin(frameCount / 4),-1, 1, 0, 255) + random (-50,50)
      
      var c = color(r, s, t)
      
      
      
      
      
      var p = new Particles(pos, c)
      particles.push(p)
      }
   }
  for (var i = particles.length - 1; i >=0; i--){
    if(dist(particles[i].pos.x,particles[i].pos.y,particles[i].pos.z,0,0,0) < 500) {
       particles[i].update()
       particles[i].show()
      } else {
        particles.splice(i,1)
   
    }
  }
  }

class Particles {
  constructor(pos, c){
    this.pos = createVector(pos.x,pos.y,pos.z)
    this.vel = p5.Vector.random3D().normalize().mult(random(4,6))
    
    this.c = c
    
    this.w = random(4,20)
    this.w1= random (10,70)
    }
  update(){
    this.pos.add(this.vel)
    }
  show(){
    push()

    noStroke()
    fill(255,255,250)
    //fill(255,255,0,60)
    
    translate(this.pos.x, this.pos.y, this.pos.z)
    sphere(random(1))
    //sphere(100,100,90)
    //box(this.w,80)
    //box(70,70)
    //cone(this.w, 80)
    //torus(this.w, 20)
    //cylinder(40, this.w);
    //plane(this.w, this.w)
    //ellipsoid(20, 70, 70);
  
    

    
    pop()
    }
  }