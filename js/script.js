window.onload = function(){

    
    document.querySelector('.btn-export').addEventListener("click", showModal);
    var panel= document.querySelector('.modal-wrapper');

    function showModal(event){
        event.preventDefault(); 
        panel.classList.remove("hide");
        panel.classList.add("show");
        this.style.opacity = "0";
        move();            
    }

    function move() {
        var elem = document.getElementById("myBar");
        var exportValue = document.getElementById("exportValue");
        
        var width = 1;
        var id = setInterval(frame, 100);
        function frame() {
          if (width >= 100) {
            exportValue.innerHTML=`<p>Exporting compeleted</p>`
            clearInterval(id);
            width = 1;
            var timerId=setInterval(function(){
                panel.classList.remove("show");
                panel.classList.add("hide"); 
                document.querySelector('.btn-export').style.opacity= "1";
               clearInterval(timerId);
              }, 3000);
          } else {
            width++; 
            elem.style.width = width + '%'; 
            elem.innerHTML = `<span>${width}%</span>`
            exportValue.innerHTML=`<p>Exporting...</p>`
            
          }
        }
      }

}