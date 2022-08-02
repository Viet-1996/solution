const usernameField = document.querySelector("#id_username");
const feedBackArea = document.querySelector(".invalid_feedback");
const retypePasswordField = document.querySelector("#id_password2");
const PasswordField =  document.querySelector("#id_password1");
const feedBackArea2 = document.querySelector(".invalid_password")

usernameField.addEventListener('keyup', (e) =>{
    const usernameVal = e.target.value;
    usernameField.classList.add("is-invalid");
    feedBackArea.style.display = "none";

    if (usernameVal.length > 0) {
        fetch("/solution_page/validate-username", {
        body: JSON.stringify({username : usernameVal}),
        method: "POST"
        }).then(res=>res.json()).then(data=>{
            console.log("data",data);
            if(data.username_error){
                usernameField.classList.add("is-invalid");
                feedBackArea.style.display = "block";
                feedBackArea.innerHTML = `<h6>${data.username_error}</h6>`
            }
        });
    }
});

retypePasswordField.addEventListener('keyup', (e) =>{
    const retypePasswordVal = e.target.value;
    feedBackArea2.style.display = "none";

    if (retypePasswordVal != PasswordField.value ){
        feedBackArea2.style.display = "block";
        feedBackArea2.innerHTML = `<h6 style="color:#dc3545">${"Nhập lại mật khẩu không khớp"}</h6>`
    }
});