const nameInput=document.querySelector("#name");
const email=document.querySelector("#email");
const message=document.querySelector("#message");
const success=document.querySelector("#success");
const errorNodes=document.querySelectorAll(".error");    //error-nodes-3


function validateform()
{
   clearmessages();
   let errorflag=false;
   if(nameInput.value.length<1)
   {
    errorNodes[0].innerText="Name Cannot be blank";
    nameInput.classList.add("error-border"); //when error is shown that time border also visible
    errorflag=true;
   }
   if(!emailIsValid(email.value))
   {
    errorNodes[1].innerText="Invalid Email";
    email.classList.add("error-border");
    errorflag=true;
   }
   if(message.value.length<1)
   {
    errorNodes[2].innerText="Please Enter Proper Message";
    message.classList.add("error-border");
    errorflag=true;
   }
   if(errorflag==false)
   {
    success.innerHTML="Form Validation Successful";
   }
}
function clearmessages()
{
    for(let i=0;i<errorNodes.length;i++)
    {
         errorNodes[i].innerText=" ";
    } 
    success.innerText="";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border"); 
}
function emailIsValid(email)
{
     let pattern=/[^\s@]+@[^\s@]+\.[^\s@]+/;
     return pattern.test(email);   
}

