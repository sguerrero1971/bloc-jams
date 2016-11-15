var animatePoints = function() {

    var points = document.getElementsByClassName('point');

    var revealPoint = function(item) {
        points[item].style.opacity = 1;
        points[item].style.transform = "scaleX(1) translateY(0)";
        points[item].style.msTransform = "scaleX(1) translateY(0)";
        points[item].style.WebkitTransform = "scaleX(1) translateY(0)";
    }

   for (i = 0; i < points.length; i++) {
       revealPoint(i);
   }

};
