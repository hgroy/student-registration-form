//
let formdata = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let firstName, lastName, email, password;
let errrorMesssages = document.querySelectorAll(".error-message");
let emptyFieldMessage = document.querySelectorAll(".empty-field");
let showPasswordButton = document.querySelector(".btn");
let fnTarget,lnTarget,emailTarget,pwdTarget;
let fnFlag,lnFlag,eFlag,pwdFlag;
let field;

let nameRegrex = /^[a-z]+$/i;   // creating regular expresssion which allows a to z and i is flag which allows both lowerand upercase

// for hiding the errormesssge which is shown on the webpage before checking

let emailRegrex =  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/; // regular expression for email valid 
let passwordRegrex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

for(let errormesssge of errrorMesssages){
    errormesssge.classList.add("d-none");
}

// for hiding empty field message which is shown default
for(let element of emptyFieldMessage){
    element.classList.add("d-none");
}
 
// for input value 
formdata.addEventListener("keyup", (event) => {
    event.preventDefault();
    field = event.target.dataset.key;
    switch (field){
        case "firstName":
            firstName = event.target.value
            fnTarget = event.target
            break;
         case "lastName":
            lastName = event.target.value
            lnTarget = event.target
            break;
        case "email":
            email = event.target.value
            emailTarget = event.target
            break;
        case "password":
            password= event.target.value
            pwdTarget = event.target
            break;
         default:
            firstName = lastname = email = password = "";
            break;              
    }

}
)

// on submit button 

submitButton.addEventListener("click",(event) => {
    event.preventDefault();
    console.log(firstName,lastName,email,password);
    if(firstName){
        if(!nameRegrex.test(firstName)){   // the firstname which is collected satiesfied the regular expression or not we check using test 
            errrorMesssages[0].classList.remove("d-none");
            console.log("name must contain only alphabets ");
            fnFlag = false;
        }else {
           errrorMesssages[0].classList.add("d-none");
            console.log("good to go ");
            fnFlag = true;
        }   
        }
        else{
         console.log("please fill this field");
        }

        if(lastName){
            if(!nameRegrex.test(lastName)){
                errrorMesssages[1].classList.remove("d-none");
                console.log("name must contain only alphabets only")
                lnFlag = false;
            }else{
                 errrorMesssages[1].classList.add("d-none");
                console.log("good to go")
                lnFlag = true;
            }
        }
            else{
                console.log("please fill this field");

            }
        


         if(email){
            if(!emailRegrex.test(email)){
                errrorMesssages[2].classList.remove("d-none");
                console.log("invalid email-id")
                eflag = false;
            }else{
                errrorMesssages[2].classList.add("d-none");
                console.log("good to go");
                eflag = true;
            }
         } else{
            console.log("please fill this field ");
         }  
       


         if(password){
            if(!passwordRegrex.test(password)){
                errrorMesssages[3].classList.remove("d-none");
                console.log("password not valid");
                pwdFlag = false;
            }else{
                errrorMesssages[3].classList.add("d-none");
                console.log("better password");
                pwdFlag = true;
            }
         }else{
            console.log("please fill this field");
         }


         if(fnFlag && lnFlag && eFlag && pwdFlag){
            fnTarget.value = lnTarget.value = emailTarget.value = pwdTarget.value = "";
            window.location.href = "/success.html"
         }
});

// for checking the data get is correct or not using regular expression


// for visibility of password 

showPasswordButton.addEventListener("click", (event)=>{
    event.preventDefault();
    if(pwdTarget.getAttribute("type") === "text"){
        pwdTarget.setAttribute("type","password");
    }else{
        pwdTarget.setAttribute("type","text")
    }

})