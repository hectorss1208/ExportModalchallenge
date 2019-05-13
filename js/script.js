//run when page is executed
window.onload = function(){
    
    //add evento to the button and add the funtion showModal
    document.querySelector('.btn-export').addEventListener("click", showModal);
    
    //get the divs and add to variable.
    const WRAPPER= document.querySelector('.modal-wrapper');
    const BACKDROOP= document.querySelector('.modal-backdroop');

    
    function showModal(event){
      //prevent the redirect of the page.
        event.preventDefault();    
        
        //call funtion to add or remove the modal.
        showOrHide(WRAPPER, true);
        showOrHide(BACKDROOP, true);

        //call funtion to incress the progress bar.
        move();            
    }

    function move() {
        const BAR = document.getElementById("myBar");
        const EXPORTVALUE = document.getElementById("exportValue");        
        let width = 1;
        const id = setInterval(frame, 100);

        //function to increment he progress bar
        function frame() {
          if (width >= 100) {
            //insert text to the div exportValue
            EXPORTVALUE.innerHTML=`<p>Exporting compeleted</p>`
            clearInterval(id);
            width = 1;
            //hidde de modal
            const timerId=setInterval(function(){                
                showOrHide(WRAPPER, false);
                showOrHide(BACKDROOP, false);        
               clearInterval(timerId);
              }, 3000);
          } else {
            //increment the % in the progress bar and isert by html
            width++; 
            BAR.style.width = width + '%'; 
            BAR.innerHTML = `<span>${width}%</span>`
            EXPORTVALUE.innerHTML=`<p>Exporting...</p>`            
          }
        }
      }

      function showOrHide(panel, show ){
        if(show){
          panel.classList.remove("hide");
          panel.classList.add("show");
        }else{
          panel.classList.remove("show");
          panel.classList.add("hide");  
        }      
      }

}