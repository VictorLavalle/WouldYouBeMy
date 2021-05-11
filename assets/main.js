let btnNo = document.getElementById('btn-no');
let btnYes = document.getElementById('btn-yes');
let title = document.getElementById('title');
let cheems = document.getElementById('cheems');

btnYes.addEventListener("click", function () {
    saidYes();
  });

  btnNo.addEventListener("mouseover",function () {
    moveButton();
  });

function saidYes(){
    btnYes.style.display = "none";
    btnNo.style.display = "none";
    title.innerHTML = "I Know U Would Say Yes🙊 <br> 💕ILYSM💕";
    cheems.src = "./assets/img/cheems.png";
}

function moveButton(){
    width = window.innerWidth;
    height = window.innerHeight;

    newWidth = (Math.random() * width);
    newHeight = (Math.random() * height);

    btnNo.style.position = "absolute";
    btnNo.style.left = newWidth + "px";
    btnNo.style.top = newHeight + "px";
}
