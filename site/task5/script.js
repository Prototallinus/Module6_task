function fnamecopy(txt) {
    document.querySelector("#duplicatefname").value = txt.value;
}

function mnamecopy(txt) {
    document.querySelector("#duplicatemname").value = txt.value;
}

function lnamecopy(txt) {
    document.querySelector("#duplicatelname").value = txt.value;
}

function printText() {
    console.log('This is the inserted first Name: ' + delete_fnameForm.value);
    console.log('This is the inserted middle Name: ' + delete_mnameForm.value);
    console.log('This is the inserted last Name: ' + delete_lnameForm.value);
    console.log('This is the copied first Name: ' + delete_fnameDuplicate.value);
    console.log('This is the copied middle Name: ' + delete_mnameDuplicate.value);
    console.log('This is the copied last Name: ' + delete_lnameDuplicate.value);
}

function submit_Delete() {
    delete_fnameForm.value = "";
    delete_mnameForm.value = "";
    delete_lnameForm.value = "";
    delete_fnameDuplicate.value = "";
    delete_mnameDuplicate.value = "";
    delete_lnameDuplicate.value = "";
}

const delete_fnameForm = document.querySelector("#fname");
const delete_mnameForm = document.querySelector("#mname");
const delete_lnameForm = document.querySelector("#lname");
const delete_fnameDuplicate = document.querySelector("#duplicatefname");
const delete_mnameDuplicate = document.querySelector("#duplicatemname");
const delete_lnameDuplicate = document.querySelector("#duplicatelname");
const submit_cancel = document.querySelector("#submit_cancel");

submit_cancel.addEventListener('mouseup', printText);
submit_cancel.addEventListener('mouseup', submit_Delete);