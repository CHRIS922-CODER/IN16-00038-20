// when user clicks the team link 
function myFunction(){
    document.getElementById("dropdown").classList.toggle("show");
}
// close the dropdown when the user clicks outside the team link

window.onclick = function(event){
    if(!event.target.matches('.droplink')){
        var dropDowns = document.getElementsByClassName("dropdown-content");
        
        for(var i=0; i<dropDowns.length; i++){
             var openDropdown = dropDowns[i];
             if(openDropdown.classList.contains('show')){
                 openDropdown.classList.remove('show');
             }
        }

    }
}