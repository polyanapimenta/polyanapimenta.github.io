// botao #TOP de rolagem da pagina
window.onscroll = function(){
   let top = window.pageYOffset || document.documentElement.scrollTop
   let btnscroll = document.getElementById("btn-scroll");
   let count = top

   if( top >= 240 ) {
      btnscroll.style.visibility = "visible"
      btnscroll.style.top = `${top+100}px`
   } else if (top < 240 )
     btnscroll.style.visibility = "hidden"

   btnscroll.onclick = function() {
      while (count > 0) {
        window.setTimeout(function(){
          // console.log(btnscroll.style.top = `${top-100}px`)
          window.scrollTo( 0, count);
        }, 330)
        count--;
      }
   }
}
