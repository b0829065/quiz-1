
function myFunction(){
    var btn = document.createElement("BUTTON");
        btn.innerHTML = "Change this document";
        document.body.appendChild(btn)
        btn.addEventListener("click",change);
            ///也可以寫 document.body.appendChild(btn).addEventListener("click",change)
            ///# Listener by myFunction click  to do function change.
}
function change() {     
    var header = document.getElementById("aa");     
        header.innerHTML = "CSIE@CGU";     
    var para = document.getElementById("zz");     
        para.innerHTML = "怎麼那麼棒！！.";   
}