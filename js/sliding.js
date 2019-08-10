function toggleCp(){
    var cp=document.getElementById("cp");
    cp.style.height = window.innerHeight - 100+"px";
    if(cp.style.left == "-260px")
    {
        cp.style.left = "0px";

    }
    else{
        cp.style.left = "-260px";
    }
}