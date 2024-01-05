
function getDetails(){
    let data={
        "first name":document.querySelector("#fname").value,
        "last name":document.querySelector("#lname").value,
        "phone":document.querySelector("#phone").value,
        "email":document.querySelector("#email").value,
        "password":document.querySelector("#password").value,
    
    }

    localStorage.setItem("data",JSON.stringify(data));

}
