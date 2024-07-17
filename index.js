function subscribe(){
    const UserEmails = document.getElementById("user-email").value;
    if(UserEmails == "" ){
        alert('Please enter valid email address!');
    }
    else{
        alert('You are now subscribed to our newsletter and will receive all the latest news.');
        document.getElementById("user-email").value = "";
    }
}