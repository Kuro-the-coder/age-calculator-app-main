function calculate() {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;

  let yearError = document.getElementById("year-error");
  let monthError = document.getElementById("month-error");
  let dayError = document.getElementById("day-error");

  let displayYear = document.getElementById("display-year");
  let displayMonth = document.getElementById("display-month");
  let displayDay = document.getElementById("display-day");

  let currentDate = new Date();

  let error = false;

  if (year === "") {
    yearError.innerText = "Must be a valid year";
    error = true;
  } else {
    yearError.innerText = "";
    if (!error) error = false;
    else error = true;
  }
  if (month > 12 || month === "") {
    monthError.innerText = "Must be a valid month";
    error = true;
  } else {
    monthError.innerText = "";
    if (!error) error = false;
    else error = true;
  }
  if (day > new Date(year, month, 0).getDate() || day === "") {
    dayError.innerText = "Must be a valid date";
    error = true;
  } else {
    dayError.innerText = "";
    if (!error) error = false;
    else error = true;
  }
  if (!error) {
    let resultYear = currentDate.getFullYear() - year;
    let resultMonth = currentDate.getMonth() + 1 - month;
    let resultDay = currentDate.getDate() - day;

    if (resultDay < 0) {
      resultDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
      resultMonth -= 1;
    }
    if (resultMonth < 0) {
      resultMonth = 11;
      resultYear -= 1;
    }
    if (resultYear < 0) {
      error = true;
      dayError.innerText = "Must be in the past";
      return;
    }
    displayDay.innerText = resultDay;
    displayMonth.innerText = resultMonth;
    displayYear.innerText = resultYear;
  }
}
