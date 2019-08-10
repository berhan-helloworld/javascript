window.addEventListener("load", function(){
    setInterval(adjstClock, 1000);
    });
    var d, h, m, s, hdeg;
    const hh=document.getElementById("hh");
    let mh=document.getElementById("mh");
    let sh=document.getElementById("sh");
     function adjstClock()
     {
        
    d= new Date();
    h= d.getHours();
    m= d.getMinutes();
    s= d.getSeconds();
    
    hdeg= h*30 + m/2 +"deg";
    document.getElementById("hh").style.transform= "rotate("+hdeg+"deg)";
    document.getElementById("mh").style.transform = "rotate("+m*6+"deg)";
    document.getElementById("sh").style.transform = "rotate("+s*6+"deg)";
    
     }