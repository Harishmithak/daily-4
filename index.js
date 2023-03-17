
function validation() {
    var name = document.register.name.value;
    var dob = document.register.dob.value;
    var gender = document.register.gender.value;
   var fathername = document.register.fathername.value;
    var address = document.register.address.value;
    var mobile = document.register.mobileno.value;
    var phone = document.register.phoneno.value;
    var email = document.register.mail.value;
    var college = document.register.college.value;
    var mark = document.register.mark.value;
    var interest = document.register.Interest.value;

    var markreg=/^[0-9]{3}.[0-9]{2}$/;
    var phonereg=/^[0-9]{2}-[0-9]{3}-[0-9]{6}$/;
    var mobilereg=/^[0-9]{10}$/;
    var namereg = /^[A-Za-z]+$/;
    var emailreg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (name == '') {
        alert('Please enter your name');
    } else if (!namereg.test(name)) {
        alert('Name field required only alphabet characters');
    } else if (email == '') {
        alert('Please enter your  email id');
    }
    else if (!phonereg.test(phone)) {
        alert('Invalid phone number');
    }
    else if (!mobilereg.test(mobile)) {
        alert('Invalid mobile number');
    }
     else if (!emailreg.test(email)) {
        alert('Invalid email');
    }else if (!markreg.test(mark)) {
        alert('Invalid mark');
    }
     else {
        alert('Thank you for registering');
        document.write("<h2>Registration Details:</h2>");
        document.write("<p>Name: " + name + "</p>");
        document.write("<p>Date of Birth:" + dob + "</p>");
        document.write("<p>Gender: " + gender + "</p>");
        document.write("<p>Father's Name:" + fathername + "</p>");
        document.write("<p>Address:" + address + "</p>");
        document.write("Mobile Number" + mobile + "</p>");
        document.write("<p>Phone Number:" + phone + "</p>");
        document.write("<p>Email: " + email + "</p>");
        document.write("<p>College Name: " + college + "</p>");
        document.write("<p>Mark: " + mark + "</p>");
        document.write("<p>personal interest:"+interest+"</p>");
    if (dancing) {
    document.write("<p>dancing</p>");
    }
    if (singing) {
    document.write("<p>singing</p>");
    }
    if (travelling) {
    document.write("<p>travellingi</p>");
    }
    if (acting) {
    document.write("<p>acting</p>");
    }
    
        // display(name, dob, gender, fathername, address, mobile, phone, email, college, mark, interest);
    }




// function display(name, dob, gender, fathername, address, mobile, phone, email, college, mark, interest) {
   
    
}

