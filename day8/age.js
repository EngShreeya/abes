
const callBackFun=()=>{
    const inputDob=document.getElementById("dob").ariaValueMax;
    const currentDate=new Date();
    const userDate= new Date (inputDob);
    const currentDateInYear=currentDate.getFullYear();
    const userDateInyear=userDate.getcurrentYear();
    const age=currentDateInYear-userDateInyear;
    output.innerText=`User's age is ${age} year`;

    console.log(inputDob);
}
const btn=document.getElementById("btn");
btn.addEventListener("click",callBackFun);