function uservalidation() {
     var img = document.getElementById("file-input").value
     var fname = document.getElementById("fname").value
     var lname = document.getElementById("lname").value
     var gender = document.getElementById("gender").value
     var city = document.getElementById("city").value
     var email = document.getElementById("Email").value
     var username = document.getElementById("username").value
     var password = document.getElementById("password").value
     var repassword = document.getElementById("re-password").value
     var dateofbirth = document.getElementById("dateofbirth").value
     var zipcode = document.getElementById("zipcode").value

     const regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if (img == "") {
          alert("Please Upload Your image")
          return false;
     }
     else if (fname == "") {
          alert("Please Enter Your First Name")
          return false;
     }
     else if (lname == "") {
          alert("Please Enter Your Second Name")
          return false;
     }
     else if (this.gender.value == "") {
          alert("Please Choose Gender");
          this.gender.focus();
          return false;
     }
     else if (this.city.value == "") {
          alert("Please Choose Country");
          this.city.focus();
          return false;
     }
     else if (email == "") {
          alert("Please Enter Your Email Id")
          return false;
     }
     else if (regex_pattern.test(email) == "") {
          alert('The Email Address Is Not Valid');
          return false;
     }
     else if (username == "") {
          alert("Please Enter Your Username")
     }
     else if (password == "" && repassword == "") {
          alert("Please Enter Your Password")
          return false;
     }
     else if (password.length < 8) {
          alert("Password length must be atleast 8 characters")
          return false;
     }
     else if (password != repassword) {
          alert("Password Not Match Please Try Again")
     }
     else if (dateofbirth == "") {
          alert("Password Enter Your Date Of Birth")
     }
     else if (zipcode == "") {
          alert("Password Enter Your Zip Code")
     }
     else if (zipcode.length < 6) {
          alert("Password Check Your Zip Code")
     }
     else {
          alert("Successfully Registered")
          alert("Welcome Mr. " + lname)
          saveUser();

     }
}

function saveUser() {
     var img = document.getElementById("file-input").value
     let fname = document.getElementById("fname").value
     let lname = document.getElementById("lname").value
     let gender = document.getElementById("gender").value
     let city = document.getElementById("city").value
     let email = document.getElementById("Email").value
     let username = document.getElementById("username").value
     let password = document.getElementById("password").value
     let repassword = document.getElementById("re-password").value
     let dateofbirth = document.getElementById("dateofbirth").value
     let zipcode = document.getElementById("zipcode").value


     let user_records = new Array();
     user_records = JSON.parse(localStorage.getItem("users"))
          ? JSON.parse(localStorage.getItem("users"))
          : [];

     user_records.push({
          First_Name: fname,
          Last_Name: lname,
          Gender: gender,
          City: city,
          Email: email,
          User_Name: username,
          Password: password,
          Confirm_Password: repassword,
          Date_Of_Birth: dateofbirth,
          Zip_Code: zipcode,
          Image: img,
     });
     localStorage.setItem("users", JSON.stringify(user_records));
     window.alert("Login Successfull");

}
function showData() {
     let nom = 0;
     let user_records = new Array();
     user_records = JSON.parse(localStorage.getItem("users"))
          ? JSON.parse(localStorage.getItem("users"))
          : [];
     if (user_records) {
          for (let i = 0; i < user_records.length; i++) {
               let row = table.insertRow();
               row.insertCell(0).innerHTML = nom++;
               row.insertCell(1).innerHTML = user_records[i].First_Name;
               row.insertCell(2).innerHTML = user_records[i].Last_Name;
               row.insertCell(3).innerHTML = user_records[i].City;
               row.insertCell(4).innerHTML = user_records[i].Email;
               row.insertCell(5).innerHTML = user_records[i].User_Name;
               row.insertCell(6).innerHTML = user_records[i].Password;
               row.insertCell(7).innerHTML = user_records[i].Date_Of_Birth;
               row.insertCell(8).innerHTML = user_records[i].Zip_Code;
               row.insertCell(9).innerHTML = user_records[i].Image;
               row.insertCell(10).innerHTML = `<button class="btn btn-success" onclick="editeUser(this)">Edit</button>`;
               row.insertCell(11).innerHTML = `<button type="button" class="btn btn-danger" onclick="deleteUser(this)">Delete</button>`;
          }
     }
}
function deleteUser(value) {
     let row = value.parentElement.parentElement;
     let deleteUser = row.cells[0].innerHTML;
     let user_records = new Array();
     user_records = JSON.parse(localStorage.getItem("users"));
     if (user_records) {
          for (let i = 0; i < user_records.length; i++) {
               if (i == deleteUser) {
                    console.log(deleteUser);
                    console.log(i);
                    if (i == 0) {
                         user_records.splice(i, i + 1);
                         localStorage.removeItem("users");
                         localStorage.setItem("users", JSON.stringify(user_records));
                    } else {
                         user_records.splice(i, i);
                         localStorage.removeItem("users");
                         localStorage.setItem("users", JSON.stringify(user_records));
                    }
               }
          }
     }
     window.location.reload("/home.html");
}
function changeUserValue(userDetailes) {
     let userIndex = userDetailes;
     let user_records = new Array();
     user_records = JSON.parse(localStorage.getItem("users"));
     if (user_records) {
       for (let i = 0; i < user_records.length; i++) {
         if (i== userIndex) {
           if (i == 0) {
             user_records.splice(i, i + 1);
             localStorage.removeItem("users");
             localStorage.setItem("users", JSON.stringify(user_records));
           } else {
             user_records.splice(i, i);
             localStorage.removeItem("users");
             localStorage.setItem("users", JSON.stringify(user_records));
           }
         }
       }
     }
   }
function editeUser(value) {
     let row = value.parentElement.parentElement;
     let userDetailes = row.cells[0].innerHTML;
     let updateUser = new Object();
     let user_records = new Array();
     user_records = JSON.parse(localStorage.getItem("users"));
     if (user_records) {
          for (let i = 0; i < user_records.length; i++) {
               if (i == userDetailes) {
                    updateUser = user_records[i]
               }
          }
     }
     window.location.replace("/user_list.html");
     changeUserValue(userDetailes);
}
function updateUser() {
     saveUser();
     window.location.replace("/user_list.html");
   }
   