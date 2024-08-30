const LINKEDIN_URL = "https://www.linkedin.com/search/results/all/?keywords=";

//Extracts the student's first and last name from the HTML element that contains it
function getStudentName(studentCard) {
  let studentFullName = studentCard.innerText.split(" ");

  //return the student's name separated by first and last name
  return { firstName: studentFullName[0], lastName: studentFullName.at(-1) };
}

//Creates the connect link button HTML elements for each user
function generateConnectButtonHTML(studentName) {
  //link to LinkedIn search of student's name
  const link = `${LINKEDIN_URL}${studentName.firstName}%20${studentName.lastName}&origin=GLOBAL_SEARCH_HEADER`;
  const linkedinIcon =
    "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png";
  //return connect button element
  return `
  <a href="${link}" target="_blank">
    <img src="${linkedinIcon}" alt="LinkedIn Button" style="width:24px; height:24px; margin-left:10px" >
  </a>`;
}

//Inserts buttons next to each student's name with links to LinkedIn search for their name
function insertConnectButtons() {
  //get each student card element
  let studentCards = document.getElementsByClassName(
    "roster_user_name student_context_card_trigger",
  );

  //insert a connect button next to each student's name
  for (student of studentCards) {
    let html = generateConnectButtonHTML(getStudentName(student));
    student.insertAdjacentHTML("afterend", html);
  }
}

insertConnectButtons();
