// Your JavaScript goes here.
window.addEventListener("load", function(){
    const toggleButton = document.getElementById('toggle_button')

    toggleButton.addEventListener('click', function(e){
        var toggleMe = document.querySelectorAll(".second_five li"); 
        if(toggleMe[0].style.display == 'none'){
            for (i = 0; i < toggleMe.length; i++) {
                toggleMe[i].style.display = "list-item";
            }
        }
        else{
            for (i = 0; i < toggleMe.length; i++) {
                toggleMe[i].style.display = "none";
                
            }
        }
            
        
        
    });
    
})