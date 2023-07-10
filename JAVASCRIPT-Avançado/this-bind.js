
function speakGeneric(){
    document.write(this.sound);
}

let dog = {
    sound: "Au Au",
    speak: speakGeneric
}

let cat = {
    sound: "Miau",
    speak: speakGeneric
}

dog.speak();
document.write('<br>');
cat.speak();
document.write('<br>');
document.write('<br>');

let bindedFunction = speakGeneric.bind(dog);
bindedFunction()