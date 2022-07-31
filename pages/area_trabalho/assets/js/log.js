const signUpButton = document.querySelector("#signIn");
const signOutButton = document.querySelector("#signOut");
const container = document.querySelector("#container");

signUpButton.onclick = () =>{
    container.classList.add("right-panel-active");
}

signOutButton.onclick = () =>{
    container.classList.remove("right-panel-active");
}