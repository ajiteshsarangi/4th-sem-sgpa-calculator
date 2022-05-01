const btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  // variables
  const mk1 = document.getElementById("mk1").value;
  const mk2 = document.getElementById("mk2").value;
  const mk3 = document.getElementById("mk3").value;
  const mk4 = document.getElementById("mk4").value;
  const mk5 = document.getElementById("mk5").value;
  const mk6 = document.getElementById("mk6").value;
  const mk7 = document.getElementById("mk7").value;
  const mk8 = document.getElementById("mk8").value;
  const mk9 = document.getElementById("mk9").value;
  const mk10 = document.getElementById("mk10").value;

  let gradeShow = document.querySelector(".grade-show");
  const marks = [mk1, mk2, mk3, mk4, mk5, mk6, mk7, mk8, mk9, mk10];
  const credit = [3, 3, 4, 4, 4, 4, 1, 1, 1, 1];
  const point = [];
  const grade = [];
  let creditpoint = 0,
    sgpa,
    sgpaFixed,
    sumcredit = 0;
  const LEN = 10;
  const arr = [];
  // func 1
  function creditPoints() {
    for (let i = 0; i < LEN; i++) {
      if (marks[i] >= 90 && marks[i] <= 100) {
        point.push(10);
        grade.push("O");
      } else if (marks[i] >= 80 && marks[i] <= 89) {
        point.push(9);
        grade.push("E");
      } else if (marks[i] >= 70 && marks[i] <= 79) {
        point.push(8);
        grade.push("A");
      } else if (marks[i] >= 60 && marks[i] <= 69) {
        point.push(7);
        grade.push("B");
      } else if (marks[i] >= 50 && marks[i] <= 59) {
        point.push(6);
        grade.push("C");
      } else if (marks[i] >= 40 && marks[i] <= 49) {
        point.push(5);
        grade.push("D");
      } else if (marks[i] >= 0 && marks[i] < 39) {
        point.push(4);
        grade.push("F");
      } else {
        console.log("fail");
      }
    }
  }
  //func 2
  function calc() {
    for (let i = 0; i < LEN; i++) {
      creditpoint += credit[i] * point[i];
      sumcredit += credit[i];
      sgpa = creditpoint / sumcredit;
      sgpaFixed = sgpa.toFixed(2);
      // return creditpoint,sumcredit,sgpa;
    }
  }

  creditPoints();
  console.log(point);
  console.log(grade);
  calc();
  console.log(sgpaFixed);

  // const marks1 = grade.map(function (item) {
  //   return `<span>${item}</span>`;
  // })
  //contactinput.innerHTML = marks1.join("");

  const gd1 = document.getElementById("gd1");
  gd1.textContent = grade[0] + " - grade";

  const gd2 = document.getElementById("gd2");
  gd2.textContent = grade[1] + " - grade";

  const gd3 = document.getElementById("gd3");
  gd3.textContent = grade[2] + " - grade";

  const gd4 = document.getElementById("gd4");
  gd4.textContent = grade[3] + " - grade";

  const gd5 = document.getElementById("gd5");
  gd5.textContent = grade[4] + " - grade";

  const gd6 = document.getElementById("gd6");
  gd6.textContent = grade[5] + " - grade";

  const gd7 = document.getElementById("gd7");
  gd7.textContent = grade[6] + " - grade";

  const gd8 = document.getElementById("gd8");
  gd8.textContent = grade[7] + " - grade";

  const gd9 = document.getElementById("gd9");
  gd9.textContent = grade[8] + " - grade";

  const gd10 = document.getElementById("gd10");
  gd10.textContent = grade[9] + " - grade";

  const showCgpa = document.getElementById("showCgpa");
  showCgpa.textContent = sgpaFixed;

  // const styles =  e.currentTarget.classList;
  //        if (styles.contains('reset')) {

  //           console.log('hvy')
  //        }
});

// --------------------- validation --------------------------------------

//-----------------reset----------
