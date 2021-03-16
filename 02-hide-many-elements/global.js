window.addEventListener("load", function(){
       const hide = document.getElementById('button')
   
       hide.addEventListener('click', function(e){
           var hideMe = document.getElementsByClassName('hide_me')
           for (i = 0; i < hideMe.length; i++) {
               hideMe[i].style.display = "none";
               
           }
           
       });
       
   })
