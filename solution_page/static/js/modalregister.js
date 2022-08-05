const studentnameField = document.querySelector("#student_name")
const feedBackArea = document.querySelector(".invalid_feedback")
const emailField = document.querySelector("#email")
const feedBackArea3 = document.querySelector(".invalid_email")
const parentnameField = document.querySelector("#parent_name")
const feedBackArea2 = document.querySelector(".invalid_parentname")
const phonenumberField = document.querySelector("#phone_number")
const feedbackArea4 = document.querySelector(".invalid_phonenumber")

studentnameField.addEventListener('keyup', (e) =>{
    const studentnameVal = e.target.value;
    studentnameField.classList.remove("is-invalid");
    feedBackArea.style.display = "none";

    if (studentnameVal.length > 0) {
        fetch("/solution_page/validate-studentname", {
        body: JSON.stringify({studentname : studentnameVal}),
        method: "POST"
        }).then(res=>res.json()).then(data=>{
            console.log("data",data);
            if(data.studentname_error){
                studentnameField.classList.add("is-invalid");
                feedBackArea.style.display = "block";
                feedBackArea.innerHTML = `<h6>${data.studentname_error}</h6>`
            }
        });
    }
});

emailField.addEventListener('keyup', (g)=>{
    const emailVal = g.target.value;
    emailField.classList.remove("is-invalid");
    feedBackArea3.style.display = "none";
    
    if (!emailVal.includes("@") ){
        feedBackArea3.style.display = "block";
        emailField.classList.add("is-invalid");
        feedBackArea3.innerHTML = `<h6 style="color:#dc3545">${"Địa chỉ email không hợp lệ"}</h6>`
    }
})

parentnameField.addEventListener('keyup', (f) =>{
    const parentnameVal = f.target.value;
    parentnameField.classList.remove("is-invalid");
    feedBackArea2.style.display = "none";

    if (parentnameVal.length > 0) {
        fetch("/solution_page/validate-studentname", {
        body: JSON.stringify({studentname : parentnameVal}),
        method: "POST"
        }).then(res=>res.json()).then(data=>{
            console.log("data",data);
            if(data.studentname_error){
                parentnameField.classList.add("is-invalid");
                feedBackArea2.style.display = "block";
                feedBackArea2.innerHTML = `<h6>${data.studentname_error}</h6>`
            }
        });
    }
});

phonenumberField.addEventListener('keyup', (h) =>{
    feedbackArea4.style.display = "none";
    const phoneno = /^\(?[0]{1}\)?([0-9]{9})$/;
    phonenumberField.classList.remove("is-invalid");

    if (!phonenumberVal.match(phoneno)){
        phonenumberField.classList.add("is-invalid");
        feedbackArea4.style.display = "block";
        feedbackArea4.innerHTML = `<h6 style="color:#dc3545">${"Số điện thoại không hợp lệ"}</h6>`
    }
})

$("#modalregister").submit(function(){
    if(is-invalid){
        alert("Form đăng kí không hợp lệ")
        return false;
    } else{
        return true;
    }
})