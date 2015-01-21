setInterval(function() {
function r(el, deg) {
	'use strict';
el.setAttribute('transform', 'rotate('+ deg +' 50 50)');
}
var d = new Date();
r(sec, 6*d.getSeconds());
r(min, 6*d.getMinutes());
r(hour, 30*(d.getHours()%12) + d.getMinutes()/2);
}, 1000);

var colours=['#ff0000','#00ff00','#0000ff','#acacac'];  // List of colors
    var tempID=0;
    var changeInterval=1000;    // Change interval in miliseconds
    var objectID='#bgcolor';      // Object to change colours. 
    
    $(document).ready(function(){        
        setInterval(function(){
                $(objectID).animate({backgroundColor: colours[tempID]},200);
                tempID=tempID+1
                if (tempID>colours.length-1) tempID=0;
            },changeInterval);
    });
