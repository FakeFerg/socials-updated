//Snowing animation by Szecska
p=document.getElementById("canvas")
p.width=document.body.clientWidth
p.height=document.body.clientHeight

ctx=p.getContext("2d")
window.addEventListener("resize",()=>{var a=ctx.getImageData(0,0,p.width,p.height);p.width=document.body.clientWidth;p.height=document.body.clientHeight;ctx.putImageData(a,0,0);for(a=0;a<20;a++)new Flake()})
flakes=[]
maxFlakes=350

class Flake{
  constructor(x){
    this.x=x||(Math.random()*canvas.width)|0
    this.y=-10+Math.random()*70-90
    this.size=Math.random()*6
    this.opacity=Math.random()
    flakes.push(this)
  }
  get speed(){
    return 2-Math.random()+this.size/15
  }
}


cls=()=>ctx.clearRect(0,0,p.width,p.height)

function drop(){
  cls()
  var g
  for(g of flakes){
    g.x+=Math.random()*4-2
    g.y+=g.speed
    if(g.y>canvas.height+10){
      if(flakes.length>maxFlakes&&Math.random()<0.4){
        flakes.splice(flakes.indexOf(g),1)
        continue
      }
      g.y=-10
      g.x=(Math.random()*canvas.width)|0
    }
    //drawing the snowflake
    ctx.beginPath()
    ctx.fillStyle="rgba("+[230,230,230,50+Math.random()*205]+")"
    ctx.arc(g.x,g.y,g.size,0,2*Math.PI)
    ctx.fill()
  }
  requestAnimationFrame(drop)
}


for(let a=0;a<maxFlakes;a++)flakes.push(new Flake())
requestAnimationFrame(drop)