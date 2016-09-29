const qs = (query)=> document.querySelector(query);
const qsa = (query)=> document.querySelectorAll(query);
const accordionLis = qsa('.accordion > li > header');

for (var i = 0; i < accordionLis.length; i++) {
	var al = accordionLis[i];
	
	al.addEventListener("click",function (ev){
		var li = this.parentNode;
		var content = li.querySelector(".content");
		if(li.classList.contains("active")){
			li.classList.remove("active");
			content.style.height="0px";
		}else{
			li.classList.add("active");
			var h  = li.querySelector('.wrapper').offsetHeight;
			content.style.height= h+"px";
		}
	});
}


const getYPosition = (el)=>{
	 
	const bodyRect = document.body.getBoundingClientRect();
    const elemRect = el.getBoundingClientRect();

    return elemRect.top - bodyRect.top;
};

const pn = qs("#primaryNav");
window.addEventListener("scroll",function (ev){

	const paddingTop = 10;
	const yBox = (getYPosition(qs("main .box"))) - paddingTop;
	const y = window.scrollY;
	if (y >= yBox){
		pn.classList.add("active");
	}else{
		pn.classList.remove("active");
	}
});
