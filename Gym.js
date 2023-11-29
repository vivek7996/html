gsap.from(".home h1, .home h3, .home p, .home a",({
    x:-100,
    duration:0.5,
    delay:0.2,
    opacity:0,
    stagger:0.2,
}))
gsap.from(".head h1, .crd img",({
    y:100,
    duration:0.5,
    delay:0.2,
    opacity:0,
    stagger:0.2,
}))
gsap.from(".scroll",({
    scale:0,
    opacityt:0,
}))
gsap.to(".scroll",({
    y: 20,
    repeat:-1,
    delay:0.4,
    duration:0.7,
    yoyo:true,
}))
function submit(){
    let name = document.getElementById("name");
    let number = document.getElementById("number");
    if(name.value == ""){
        alert("Please Enter Your Name")
    }else if(number.value == ""){
        alert("Please Enter Your Number")
    }else{
        alert("Thanks For Joining.Looking forward to serve you! : " + name.value)
    }
}
document.getElementById('exercise-form').addEventListener('submit', function(e) {
    e.preventDefault();
    addExercise();
});

