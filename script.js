//your JS code here. If required.
const count=document.getElementById("counter");
const btn =document.getElementById("incrementBtn");
btn.addEventListener('click',()=>{
	let currVal = Number(count.textContent)
	alert(currVal)
	count.textContent=currVal+1
});