function currentTime() {
    var time = new Date();
    var date = time.getDate()+'/'+(time.getMonth()+1)+'/'+time.getFullYear();
    var today= time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    var dateTime1 = '<b> Date: '+date+'</b>';
    var dateTime2 = '<b> Time: '+today+'</b>';
    document.getElementById("date").innerHTML = dateTime1;
    document.getElementById("time").innerHTML = dateTime2;
    let t = setTimeout(function(){ currentTime() }, 1000);
}

currentTime();
