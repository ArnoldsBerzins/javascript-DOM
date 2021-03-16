// Your JavaScript goes here.
window.addEventListener("load", function(){
    const toggleButton = document.getElementById('button')

    toggleButton.addEventListener('click', function(e){
        var toggleMe = document.getElementsByClassName('toggle_me')
        if(toggleMe[0].style.display == 'none'){
            for (i = 0; i < toggleMe.length; i++) {
                toggleMe[i].style.display = "block";
            }
        }
        else{
            for (i = 0; i < toggleMe.length; i++) {
                toggleMe[i].style.display = "none";
                
            }
        }
            
        
        
    });
    
})