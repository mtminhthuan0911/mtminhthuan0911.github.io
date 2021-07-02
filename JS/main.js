

let intro = document.querySelector('.intro');
        let logo = document.querySelector('.intro-Logo');

        window.addEventListener('DOMContentLoaded', ()=>{
           setTimeout(() => {
               setTimeout(() => {
                   intro.classList.add('active');
                    document.body.classList.add('acc')
               });

               setTimeout(()=> {
                    intro.classList.remove('active');
                    document.body.classList.remove('acc')
                    intro.classList.add('fade');
               },5500)
           })
        })

setTimeout (() => {
    document.getElementById("Twriter").play();
},8900)
       
