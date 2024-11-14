// document.querySelectorAll("button")[1].addEventListener("click", () => { //=> arrow function
//     alert ("ปุ่ม a ถูกกด")
// } ); 
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    //document.querySelectorAll(".drum")[i].addEventListener("onclick", function() { //ถ้าใช้ keydown ไม่ต้องใช้ querySelectorAll เพราะไม่ได้ click ไปที่ปุ่ม
      document.addEventListener("keydown", (event) => {
      console.log(event.key);
      var b = event.key;
      switch (b) {
        case 'w':
          var audio = new Audio('sounds/tom-1.mp3');
          audio.play();
          break;
        case 'a':
          var audio = new Audio('sounds/tom-2.mp3');
          audio.play();
          break;
        case 's':
          var audio = new Audio('sounds/tom-3.mp3');
          audio.play();
          break;
        case 'd':
          var audio = new Audio('sounds/tom-4.mp3');
          audio.play();
          break;
        case 'j':
          var audio = new Audio('sounds/crash.mp3');
          audio.play();
          break;
        case 'k':
          var audio = new Audio('sounds/kick-bass.mp3');
          audio.play();
          break;
        case 'l':
          var audio = new Audio('sounds/snare.mp3');
          audio.play();
          break;
      }
    });
  }

  var student1 = {

    name: "oak",
    age: 20,
    isStudent: true,
    languages: ["thai", "japanese"],
    id: 5550891  
   
    }
console.log(student1.name); 

var student2 = { //JavaScript Object

    name: "Boss",
    age: 28,
    isStudent: true,
    languages: ["thai", "english"],
    id: 6652300931 
   
    }
console.log(student2.languages[1]); 
console.log(JSON.stringify(student2)); 

function Student (name, age, isStudent, languages, id) { //ใน javascript ไม่ต้องระบุ type
    this.name=name
    this.age=age
    this.isStudent = isStudent
    this.languages = languages
    this.id = id
}
var student3 = new Student("Boss",28,true,["thai", "english"],6652300931) //เรียกใช้ Student Function
console.log(student3.id)

  
  