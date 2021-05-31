
//circle object definition
let circle ={
    radius : 1,
    location:{
        x:1,
        y:2
    },
    draw:function(){
        console.log("draw circle");
    }
};


//calling circle object's method draw
circle.draw();



// creating circle object with factory function
//factory functions return objects

function createCircle(radius){
    return{
        radius,
        draw:function(){
            console.log("draw circle from factory function");
    }
    }
}

let circleFactory = createCircle(1);
circleFactory.draw();

//create circle object with constructor function

function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log("draw circle from constructor");
    }
}

let circleConstruct = new Circle(5);

console.log(circleConstruct.radius);
circleConstruct.draw();