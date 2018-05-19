var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var p1score=document.querySelector("#p1score");
var p2score=document.querySelector("#p2score");
var reset=document.querySelector("#reset");
var a=0;
var b=0;
var win=5;
var flag=false;
var input=document.querySelector("input");
var setScore=document.querySelector("p span");
p1.addEventListener("click",function(){
	if(a!==win && flag==false){
		a++;
		p1score.textContent=a;	
	}
	if(a===win)
	{
		p1score.classList.add("winner");
		p2score.classList.add("loser");
		flag=true;
	}
});

p2.addEventListener("click",function(){
	if(b!==win && flag==false){
		b++;
		p2score.textContent=b;
	}
	if(b===win)
	{
		p2score.classList.add("winner");
		p1score.classList.add("loser");
		flag=true;
	}
	
});
reset.addEventListener("click",function(){
	a=0;
	b=0;
	p1score.textContent=0;
	p2score.textContent=0;
	flag=false;
	p1score.classList.remove("winner");
	p1score.classList.remove("loser");
	p2score.classList.remove("winner");
	p2score.classList.remove("loser");
});
input.addEventListener("change",function(){
	setScore.textContent=Number(input.value);
	win=Number(input.value);
	a=0;
	b=0;
	p1score.textContent=0;
	p2score.textContent=0;
	flag=false;
	p1score.classList.remove("winner");
	p1score.classList.remove("loser");
	p2score.classList.remove("winner");
	p2score.classList.remove("loser");
});

