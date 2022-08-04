const usernameField = document.querySelector("#id_username");
const feedBackArea = document.querySelector(".invalid_feedback");
const retypePasswordField = document.querySelector("#id_password2");
const PasswordField =  document.querySelector("#id_password1");
const feedBackArea2 = document.querySelector(".invalid_password")
const emailField = document.querySelector("#id_email")
const feedBackArea3 = document.querySelector(".invalid_email")

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

retypePasswordField.addEventListener('keyup', (f) =>{
    const retypePasswordVal = f.target.value;
    feedBackArea2.style.display = "none";

    if (retypePasswordVal != PasswordField.value ){
        feedBackArea2.style.display = "block";
        feedBackArea2.innerHTML = `<h6 style="color:#dc3545">${"Nhập lại mật khẩu không khớp"}</h6>`
    }
});

emailField.addEventListener('keyup', (g)=>{
    const emailVal = g.target.value;
    feedBackArea3.style.display = "none";
    
    if (!emailVal.includes("@") ){
        feedBackArea3.style.display = "block";
        feedBackArea3.innerHTML = `<h6 style="color:#dc3545">${"Địa chỉ email không hợp lệ"}</h6>`
    }
})