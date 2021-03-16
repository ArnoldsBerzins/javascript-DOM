window.addEventListener("load", function(){
    const show = document.getElementById('button')

    show.addEventListener('click', function(e){
        var showMe = document.getElementsByClassName('show_me')
        for (i = 0; i < showMe.length; i++) {
            showMe[i].style.display = "block";
            
        }
        
    });
    
})
