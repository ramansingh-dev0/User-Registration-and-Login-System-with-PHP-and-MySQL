const birds = document.querySelector("#birds");
const sound = document.querySelector(".sound");
const high= document.querySelector("#high");


let x = true;
sound.addEventListener('click',()=>{
if(x===true){
    birds.play();
    
    high.classList.remove('fa-volume-xmark');
    high.classList.add('fa-volume-high');
    x=false;
}
else if (x===false){
    birds.pause();
    high.classList.add('fa-volume-xmark');
    high.classList.remove('fa-volume-high');
    x=true;

} 
    
});

const user = document.querySelector("#user");
const password = document.querySelector("#password");

function isvalid() {
    if (user.value === "") {
        alert("Enter any Email/Username");
        user.focus(); // To set focus on the input field
        return false; // To prevent form submission if not valid
    }
    else if (password.value === "") {
        alert("Enter any password");
        password.focus(); // To set focus on the input field
        return false; // To prevent form submission if not valid
    }
    return true; // If everything is valid
}
