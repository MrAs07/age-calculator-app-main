// inputs
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

// Output
const showDay = document.getElementById('DD');
const showMonth = document.getElementById('MM');
const showYear = document.getElementById('YY');

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

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let dd = parseInt(day.value); // Convert to integer
    let mm = parseInt(month.value); // Convert to integer
    let yy = parseInt(year.value); // Convert to integer

    // Get current date
    let time = new Date();
    let current_year = time.getFullYear();
    let current_month = time.getMonth() + 1; // Month is zero-based, so add 1
    let current_day = time.getDate();

    // Day validation
    if(validateNum(dd)){
        if(dd > 0 && dd <= 31 ){
            // Month validation
            if(validateNum(mm)){
                if(mm > 0 && mm <= 12 ){
                    // Year validation
                    if(validateNum(yy)){
                        if(yy > 1900 && yy <= current_year ){
                            // Calculate age difference
                            let yearsDiff = current_year - yy;
                            let monthsDiff = current_month - mm;
                            let daysDiff = current_day - dd;

                            if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
                                yearsDiff--;
                                monthsDiff += 12;
                            }
                            if (daysDiff < 0) {
                                monthsDiff--;
                                let prevMonth = new Date(yy, mm - 1, 0);
                                daysDiff += prevMonth.getDate();
                            }

                            showYear.innerHTML = yearsDiff;
                            showMonth.innerHTML = monthsDiff;
                            showDay.innerHTML = daysDiff;
                        } else{
                            year.nextElementSibling.innerHTML = "<span> Must be a valid year</span>";
                            year.previousElementSibling.style.color = "red";
                        }
                    } else {
                        year.nextElementSibling.innerHTML = "<span> This field is required</span>";
                        year.previousElementSibling.style.color = "red";
                    }
                } else{
                    month.nextElementSibling.innerHTML = "<span> Must be a valid month</span>";
                    month.previousElementSibling.style.color = "red";
                }
            } else {
                month.nextElementSibling.innerHTML = "<span> This field is required</span>";
                month.previousElementSibling.style.color = "red";
            }
        }
        else{
            day.nextElementSibling.innerHTML = "<span> Must be a valid day</span>";
            day.previousElementSibling.style.color = "red";
        }
    }
    else{
        day.nextElementSibling.innerHTML = "<span> This field is required</span>";
        day.previousElementSibling.style.color = "red";
    }
});
