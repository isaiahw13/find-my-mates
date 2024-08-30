function getStudentNames() {
  //get all student card elements from page
  let users = document.getElementsByClassName(
    "roster_user_name student_context_card_trigger",
  );

  //extract all names from student cards to an array
  let userNames = [];
  for (i of users) {
    let fullName = i.innerText.split(" ");
    userNames.push({
      firstName: fullName[0],
      lastName: fullName[1],
    });
  }

  //return the array of student names
  return userNames;
}

function openWindows(schoolName) {
  let userNames = getStudentNames();
  let linkedInURL = "https://www.linkedin.com/search/results/all/?keywords=";
  let separatedSchoolName = schoolName.split(" ");

  //open LinkedIn search windows for each student name
  for (user of userNames) {
    //generate search url
    let searchURL =
      linkedInURL + "%20" + user.firstName + "%20" + user.lastName;
    for (i of separatedSchoolName) {
      searchURL += "%20" + i;
    }
    searchURL += "&origin=GLOBAL_SEARCH_HEADER";

    //open windows
    window.open(searchURL, "_blank", "noopener");
    setTimeout(1000);
  }
}

openWindows("California State University East Bay");
