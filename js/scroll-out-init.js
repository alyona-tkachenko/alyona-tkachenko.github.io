ScrollOut({
    
//    once:true,
    threshold: 0.3,
    
    onShown: function (el) {

        if (el.hasAttribute('data-animation')) {
            var animationName = el.getAttribute('data-animation');
            if (!el.classList.contains(animationName))
                el.classList.add(animationName);
        }
    },
    
    onHidden: function (el) {

        if (el.hasAttribute('data-animation')) {
            var animationName = el.getAttribute('data-animation');
            if (el.classList.contains(animationName))
                el.classList.remove(animationName);
        }
    }
});
