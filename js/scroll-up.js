/*
(function() {
  
  var scrollup = document.querySelector(".scroll-up");
    
  window.addEventListener("scroll", function() {
    
    if (window.pageYOffset < 300) {
        
      scrollup.classList.add("display-none");
        
    } else if (window.pageYOffset > 300) {
        
      scrollup.classList.remove("display-none");
        
    }
    
  }, false);
  
})(); */

(function() {
    
    var scrollup = document.querySelector(".scroll-up");
    
    window.addEventListener("scroll", function() {
        
        if (window.pageYOffset < 300) {
            
            scrollup.classList.add("display-none");
            
        } else if (window.pageYOffset > 300) {
            
            scrollup.classList.remove("display-none");
            
        }
    }, false);
    
})();