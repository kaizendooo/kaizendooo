window.onclick = (e) => {
	let shopBtn = document.getElementById("shopBtn");
	let content = document.getElementById("dropDownContent");
	let dropdown = document.getElementById("dropdown");
	if(shopBtn.contains(e.target))content.style.display = "block";
	else{
		if(!content.contains(e.target))content.style.display = "none";
	}
	let rect = shopBtn.getBoundingClientRect();
	dropdown.style.left = ((rect.left+(rect.width/2)) - (dropdown.getBoundingClientRect().width / 2)) + "px";
	dropdown.style.top = rect.bottom + "px";
}

//---------------------------//

//collection div size effects when hovered//
document.getElementById("mens").onmouseenter = (e) => zoomBG(document.getElementById('men_img'), '110%');
document.getElementById("mens").onmouseleave = (e) => zoomBG(document.getElementById('men_img'), '100%');
//
document.getElementById("womens").onmouseenter = (e) => zoomBG(document.getElementById('women_img'), '110%');
document.getElementById("womens").onmouseleave = (e) => zoomBG(document.getElementById('women_img'), '100%');
//
function zoomBG(elem, perc){ elem.style['background-size'] = perc; }
//----------------------------------------//

//collection div auto adjust height relative to width// 
let collectionDiv = document.getElementById('collection');
collectionDiv.style.height = Math.floor(document.body.offsetWidth * 0.289) + "px";
collectionDiv.style['font-size'] = Math.floor(document.body.offsetWidth * 0.01156) + "px";
collectionDiv.getElementsByTagName("h1")[0].style.marginTop = -(Math.floor(document.body.offsetWidth * 0.289)/2) + "px";
collectionDiv.getElementsByTagName("h1")[1].style.marginTop = -(Math.floor(document.body.offsetWidth * 0.289)/2) + "px";

let min_prev_dialog = document.getElementById("min_prev_dialog");
min_prev_dialog.style['font-size'] = Math.floor(document.body.offsetWidth * 0.017) + "px";
window.addEventListener('resize', () => {
	document.getElementById('collection').style.height = Math.floor(document.body.offsetWidth * 0.289) + "px";
	collectionDiv.getElementsByTagName("h1")[0].style.marginTop = -(Math.floor(document.body.offsetWidth * 0.289)/2) + "px";
	collectionDiv.getElementsByTagName("h1")[1].style.marginTop = -(Math.floor(document.body.offsetWidth * 0.289)/2) + "px";
	collectionDiv.style['font-size'] = Math.floor(document.body.offsetWidth * 0.01156) + "px";
	
	min_prev_dialog.style['font-size'] = Math.floor(document.body.offsetWidth * 0.017) + "px";
});
//---------------------------------------------------//


// MID SCRIPT //
let mid_interval = window.setInterval(function(){
	document.getElementById("mid_prev").style['background-image'] = "url('img/"+images[index]+"')";
	index = ++index % images.length;
}, 500);


// COLLAGE SCRIPT //
let collage_items = document.getElementsByClassName("collage_img");
for(let i=0; i<collage_items.length; i++){
	collage_items[i].style['background-image'] = "url('img/"+images[i]+"')";
}