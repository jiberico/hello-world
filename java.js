function changePageTo(pagenumber, back_num){
        document.getElementById('adv_text').innerHTML= document.getElementById(pagenumber).innerHTML;
    if (back_num =='0'){
 document.body.style.backgroundImage="url('images/PaginaBase.jpg')";
    }
    if (back_num =='1'){
 document.body.style.backgroundImage="url('images/Pagina1.jpg')";
    }
    if (back_num =='2'){
 document.body.style.backgroundImage="url('images/Pagina2.jpg')";
    }
    if (back_num =='3'){
 document.body.style.backgroundImage="url('images/Pagina3.jpg')";
    }
    if (back_num =='4'){
 document.body.style.backgroundImage="url('images/Pagina4.jpg')";
    }
    if (back_num =='5'){
 document.body.style.backgroundImage="url('images/PaginaAK-47.jpg')";
    }
    if (back_num =='6'){
 document.body.style.backgroundImage="url('images/PaginaHelicopter.jpg')";
    }
    if (back_num =='7'){
 document.body.style.backgroundImage="url('images/SableVermell.jpg')";
    }
    if (back_num =='8'){
 document.body.style.backgroundImage="url('images/SableVerd.jpg')";
    }
    if (back_num =='9'){
 document.body.style.backgroundImage="url('images/PaginaCazador.jpg')";
    }
}