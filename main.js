Mother = "";
Father = "";
Jiya = "";
Brother = "";
function start(){
    speak();
    Mother = "My mothers name is Reshma. She was a scientist. She loves the subject Maths and She also loves drawing. Drawing relaxes her mind.";
    Father = "My fathers name is Akash. My Father wanted to be a car racer but now he does bussiness of Export and Import. He loves to hear song while he is driving his car.";
    Jiya = " And this is ME Jiya. I want to be an astronomer when I grow up and fix the problems of the rocket. I love to do coding as It relaxes my mind and I love to do Maths and english too";
    Brother = "My brothers name is Rajveer. My brother loves animals. He can walk perfectly like a dinosuar.We all see him walk like that and laugh. He also wants to be a car racer when he grows up like our dad";
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data1 = Mother;
    speak_data2 = Father;
    speak_data3 = Jiya;
    speak_data4 = Brother;
    var c = new SpeechSynthesisUtterance(speak_data1+speak_data2+speak_data3+speak_data4);
    synth.speak(c);
}