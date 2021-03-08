function validate(){
    var x=document.forms['validateMePls']['sharedText'].value;
    if(x == ""){
        alert('I need your data');
        return false;
    }
}