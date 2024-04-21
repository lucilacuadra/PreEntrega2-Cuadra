let listElements = document.querySelectorAll('.list__button--click'); 


listElements.forEach(listElement => {
listElement.addEventListener ('click', ()=> {

listElement.classList.toggle('arrow');

   let height = 0;
   let menu = listElement.nextElementSibling;
console.log (menu.scrollHeight)


if(menu.clientHeight == "0"){
    height=menu.scrollHeight;
}


menu.style.height = `${height}px`;


})

return false;
});


document.getElementById("btn_open").addEventListener("click", open_close_menu);


var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");


    function open_close_menu(){
        body.classList.toggle("body_move");
        side_menu.classList.toggle("menu__side_move");
    }



if (window.innerWidth < 760){

    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}


window.addEventListener("resize", function(){

    if (window.innerWidth > 760){

        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (window.innerWidth < 760){

        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }

});

const image_input= document.querySelector("#image_input")
var uploaded_image = "";
image_input.addEventListener("change",function(){
 const reader = new FileReader();
 reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
 });

 reader.readAsDataURL(this.files[0]);
})


