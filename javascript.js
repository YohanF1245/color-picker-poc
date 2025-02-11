
let colors = ['ffffff','ffffff','ffffff','ffffff','ffffff','ffffff']
let fillColors = ['f80c12','ee1100', 'ff3311', 'ff3322', 'ff6644', 'ff6633', 'feae2d']

let pull = `<svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 185 195" style="enable-background:new 0 0 185 195;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#${colors[0]};stroke:#000000;stroke-miterlimit:10;}
	.st1{fill:#${colors[1]};}
	.st2{fill:#${colors[2]};}
	.st3{fill:#${colors[3]};}
	.st4{fill:#${colors[4]};}
	.st5{fill:#${colors[5]};}
</style>
<path class="st0" d="M182.5,38.5v137h-35l-3-137v154h-104v-154l-3,138h-35V29.3c0-13.7,11.1-24.8,24.8-24.8l22.2-1.4l8.2-0.5
	c8.8,6.8,19.8,10.9,31.8,10.9c12.5,0,23.9-4.4,32.8-11.7l9,0.4L148.5,3c18.7,0.8,33.4,15.9,34,34.5
	C182.5,37.8,182.5,38.2,182.5,38.5z"/>
<path class="st0" d="M182.5,37.5v1C182.5,38.2,182.5,37.8,182.5,37.5L182.5,37.5z"/>
<rect x="40.5" y="66.5" class="st1" width="104" height="34"/>
<rect x="3" y="168" class="st2" width="34" height="8"/>
<rect x="41" y="183" class="st3" width="103" height="9"/>
<rect x="148" y="168" class="st4" width="34" height="7"/>
<path class="st5" d="M132.8,1.9c-0.8,1-1.7,1.9-2.6,2.8C119.9,15,105.7,21.3,90,21.3c-16.6,0-31.6-7.1-42-18.5l8.5-0.5
	c9.1,7.1,20.5,11.3,32.9,11.3c12.9,0,24.7-4.5,34-12.1L132.8,1.9z"/>
</svg>`

function init() {
    document.getElementById('pull draw').innerHTML = pull
}
function changeColor(id) {
    colors[id] = (document.getElementById(id).value).slice(1);
    document.getElementById('pull draw').innerHTML = `<svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 185 195" style="enable-background:new 0 0 185 195;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#${colors[0]};stroke:#000000;stroke-miterlimit:10;}
	.st1{fill:#${colors[1]};}
	.st2{fill:#${colors[2]};}
	.st3{fill:#${colors[3]};}
	.st4{fill:#${colors[4]};}
	.st5{fill:#${colors[5]};}
</style>
<path class="st0" d="M182.5,38.5v137h-35l-3-137v154h-104v-154l-3,138h-35V29.3c0-13.7,11.1-24.8,24.8-24.8l22.2-1.4l8.2-0.5
	c8.8,6.8,19.8,10.9,31.8,10.9c12.5,0,23.9-4.4,32.8-11.7l9,0.4L148.5,3c18.7,0.8,33.4,15.9,34,34.5
	C182.5,37.8,182.5,38.2,182.5,38.5z"/>
<path class="st0" d="M182.5,37.5v1C182.5,38.2,182.5,37.8,182.5,37.5L182.5,37.5z"/>
<rect x="40.5" y="66.5" class="st1" width="104" height="34"/>
<rect x="3" y="168" class="st2" width="34" height="8"/>
<rect x="41" y="183" class="st3" width="103" height="9"/>
<rect x="148" y="168" class="st4" width="34" height="7"/>
<path class="st5" d="M132.8,1.9c-0.8,1-1.7,1.9-2.6,2.8C119.9,15,105.7,21.3,90,21.3c-16.6,0-31.6-7.1-42-18.5l8.5-0.5
	c9.1,7.1,20.5,11.3,32.9,11.3c12.9,0,24.7-4.5,34-12.1L132.8,1.9z"/>
</svg>`
}