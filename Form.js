document.addEventListener('DOMContentLoaded', function(){
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let emailInput = document.getElementById('email');
    let textArea = document.getElementById('textarea');
    let checkbox = document.getElementById('checkbox')
    let x = document.getElementById('x')
    let button = document.getElementById('button');
    let aside = document.getElementById('aside');

    aside.classList.add('hidden');
    button.addEventListener('click', clickListener)

    aside.addEventListener('click', xListener)
    
    function xListener(){
        aside.classList.add('hidden');
    }

    function isFnameValid(){
        if(fname.value === ""){    
            document.getElementById('fnameRequired').classList.remove('hidden');
            return false;
        } else{
            return true;
        }
    }

    function isLnameValid() {
        if(lname.value === ""){    
            document.getElementById('lnameRequired').classList.remove('hidden');
            return false;
        } else{
            return true;
        }
    }

    function isEmailValid() {
        if(!emailValidation()){    
            document.getElementById('validEmail').classList.remove('hidden');
            return false;
        } else{
            return true;
        }
    }

    function isMessageValid() {
        if(textArea.value === ""){    
            document.getElementById('messageEmpty').classList.remove('hidden');
            return false;
        } else{
            return true;
        }
    }

    function isCheckboxValid() {
        if(checkbox.checked == true){    
            return true;
        } else{
            document.getElementById('checkboxEmpty').classList.remove('hidden');
            return false;
        }
    }

    function validate(){
        let fnameValid = isFnameValid();
        let lnameValid = isLnameValid();
        let emailValid = isEmailValid();
        let messageValid = isMessageValid();
        let checkboxValid = isCheckboxValid();

        if (fnameValid && lnameValid && emailValid && messageValid && checkboxValid) return true;
        return false;
    }

    function clickListener(){
        if(validate()){
        aside.classList.remove('hidden');

        fname.value = "";
        lname.value = "";
        emailInput.value = "";
        textArea.value = "";
        checkbox.checked = false;

        } else {
            return false;
        }
    }

    function focusListener(e){
        e.target.closest('.validation-parent').querySelector('.validation').classList.add('hidden');
    }

    checkbox.addEventListener('click', checkboxListener);

    function checkboxListener(){
        document.getElementById('checkboxEmpty').classList.add('hidden');
    }

    document.querySelectorAll('.text-input').forEach(inp => {
        inp.addEventListener('focus', focusListener);
       });

    function emailValidation(){
        let email = emailInput.value;
        if (email.includes('@')){
            return true;
        } else {
            return false;
        }
    }
});