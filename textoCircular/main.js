const text = document.getElementById('text');

text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

const ele = document.querySelectorAll('span');

for (let k = 0; k < ele.length; k++) {
     ele[k].style.transform="rotate("+ k * 20 +"deg)";
    
}