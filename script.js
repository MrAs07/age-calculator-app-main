// inputs

console.log('hello');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year =document.getElementById('year');

// Output
const showDay =document.getElementById('DD');
const showMonth =document.getElementById('MM');
const showYear =document.getElementById('YY');

// form
const form = document.querySelector("form");


function validateNum(e){
    
     if(e===''){
        return false;
    }
    else{
        return true;
    }
}

let time =new Date();
let current_year =time.getFullYear();
let current_month =time.getMonth();
let current_day = time.getDate();
console.log(current_year);

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let dd= (day.value);
    let mm= month.value;
    let yy= year.value;

    if(validateNum(dd)){
        console.log("boom");
        if(dd>0 && dd<32 ){
            showDay.innerHTML=Math.abs(dd-current_day);

        }
        else{
            day.nextElementSibling.innerHTML="<span> Must be a Valid day</span>";
            day.previousElementSibling.style.color="red";
        }
    }
    else{
        day.nextElementSibling.innerHTML="<span> This field is required</span>";
        day.previousElementSibling.style.color="red";
    }

    // month
    if(validateNum(mm)){
        console.log("boom");
        if(mm>0 && mm<13 ){
            showMonth.innerHTML=Math.abs(mm-current_month);


        }
        else{
            month.nextElementSibling.innerHTML="<span> Must be a Valid month</span>";
            month.previousElementSibling.style.color="red";
        }
    }
    else{
        month.nextElementSibling.innerHTML="<span> This field is required</span>";
        month.previousElementSibling.style.color="red";

    }


    // year
    if(validateNum(yy)){
        console.log("boom");
        if(yy>1 && yy<current_year+1 ){
            showYear.innerHTML=Math.abs(yy-current_year);

        }
        else{
            year.nextElementSibling.innerHTML="<span> Must be a Valid year</span>";
            year.previousElementSibling.style.color="red";
        }
    }
    else{
        year.nextElementSibling.innerHTML="<span> This field is required</span>";
        year.previousElementSibling.style.color="red";
    }

    
})

setTimeout(() => {
    
}, timeout);

// function displayMsg(val) {
    
// }

//