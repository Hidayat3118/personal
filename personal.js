
    
// Dom Top
    
    const btn = document.getElementById('btn');
    btn.addEventListener("click", ()=>{
        window.scroll({top:0, behavior: "smooth"});
    })



// Pop Up 


    document.getElementById("myButton2").addEventListener("click", function() {
      Swal.fire({
        title: "Cv di batasi pemilik",
        text: "Terima Kasih",
        icon: "warning"
      });
    });



    document.getElementById("myButton").addEventListener("click", function() {
      Swal.fire({
        title: "Pesan Terkirim!",
        text: "Terima Kasih",
        icon: "success"
      });
    });

// library Aos
   
    AOS.init();


// dark Mode

const darkMode = document.getElementById('darkMode');
const p = document.querySelectorAll('p');

darkMode.onclick = function(){
    document.body.classList.toggle('bg-black');
    p[0,1,2].classList.toggle('text-white');
}
  