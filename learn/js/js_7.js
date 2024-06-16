window.onload=function(){
    let submit = document.getElementById("submit");
    submit.addEventListener("click",function(){
            let user = document.getElementById("user").value;
            let password = document.getElementById("password").value;
            
            if(user == "1" && password == "1"){
                alert("success");
                location.href = "html_6.html";
            }else{
                alert("false");
            }
        })

    let logup = document.getElementById("logup");
    logup.addEventListener("click",function(){
        let user = document.getElementById("user").value;
        let password = document.getElementById("password").value;

        console.log(user+" "+password)
    })
}