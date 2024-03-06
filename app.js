
 document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.connect-btn').addEventListener('click', function() {
        var coin = document.getElementById('coin');
        coin.style.display = 'block'; // Make the coin visible to start the animation
        coin.style.animation = 'none'; // Reset the animation by removing it
        
        // Force reflow/repaint to ensure the animation reset is acknowledged
        void coin.offsetWidth;
        
        // Reapply the animation
        coin.style.animation = 'flipCoin 4s ease-in-out forwards';
    
        // Listen for when the animation ends
        coin.addEventListener('animationend', function() {
            coin.style.display = 'none'; // Hide the coin again
        }, {once: true}); // Use the {once: true} option so the event is only handled once and then removed
    });
    
    const cardContainer = document.getElementById('cardContainer');

cardContainer.addEventListener('click', function() {
    this.classList.toggle('clicked');
});
    
  });
 
