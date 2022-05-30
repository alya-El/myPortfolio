let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar')

menu.addEventListener("click", function(){
    navbar.classList.toggle('open-menu')
    menu.classList.toggle('move');
});
window.onscroll = () => {
    navbar.classList.remove('open-menu')
    menu.classList.remove('move');
};

//Email JS
function validate(){
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let message = document.querySelector('.message');
    let sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener("click", function(e){
        e.preventDefault();
        if(name.value == "" || email.value == "" || message.value == ""){
            emptyError();
        }
        else{
            sendMail(name.value, email.value, message.value);
            success();
        }
    });
};
validate();

function sendMail(name, email, message){
    emailjs.send("service_pw11kl7","template_6akf5tj",{
        to_name: name,
        from_name: email,
        message: message,
        });
};

function emptyError(){
    swal({
        title: 'Oops...',
        text: 'Fields cannot be empty!',
        icon: 'error',
      })
};
function success(){
    swal({
        title: 'Email sent successfully!',
        text: 'I will try to reply within 24 hours',
        icon: 'success',
      })
};

//change header background color when scrolled
let header = document.querySelector('header');

window.addEventListener("scroll", function(){
    if(this.window.scrollY > 0){
        header.classList.add('header-active');
    }
    else if(this.window.scrollY <= 0){
        header.classList.remove('header-active');
    }
});