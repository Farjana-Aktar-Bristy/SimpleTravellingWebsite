function checkAge(event) {
    event.preventDefault();
    let inputCheckAge = document.getElementById("inputAge").value;
    let inputAge = parseInt(inputCheckAge);
    // console.log("input age:", inputAge);
    let message = "";
    let photo = "";
    if (inputAge >= 0 && inputAge < 18) {
        message = "You are a Child.";
        photo = "./Images/childPicture.jpg";
    } else if (inputAge >= 18) {
        message = "You are an Adult.";
        photo = "./Images/agedPicture.jpg";
    } else {
        message = "Please input valid age.";
        photo = "./Images/error.png";
    }

    document.getElementById("personCard").classList.remove("d-none");
    document.getElementById("personImage").src = photo;
    document.getElementById("personMsg").innerText = message;
}

function clearPersonCard(event) {
    document.getElementById("personCard").classList.add("d-none");
}