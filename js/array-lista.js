//!  primo snack
let frigo= ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
btnSnack1.addEventListener('click',function(){
    inputGroup.classList.remove('d-none');
    btnSnack2Control.classList.add('d-none');
    btnSnack1Control.classList.remove('d-none');
    divRisposta.innerHTML='che frutta abbiamo sul tavolo che devo mettere in frigo? (scrivi nella casella di input facendo attenzione a scrivere una cosa alla volta e poi premere invio)';
});
let last = false;
btnSnack1Control.addEventListener('click',function(){
    let userWord= input.value;
    let flag = false;
    let flag2= false;
    let message = '';
    if(isNaN(userWord)){
        if(last){
            for(let i=0;i<frigo.length;i++){
                
                if((userWord == frigo[i])){
                    flag2= true;
                }
            }
            if(flag2){
                divRisposta.innerHTML='bro te poi fa il drick'
            }
            else{
                divRisposta.innerHTML= 'fra devi usci';
            }
        }
        else if(userWord== 'n' || userWord=='N'){
            message= 'fra sto aspettando cosa cerca'
            divRisposta.innerHTML=message;
            last= true;
        }  
        else if((userWord== 'y' || userWord=='Y') || isNaN(userWord)){
            divRisposta.innerHTML='che frutta abbiamo sul tavolo che devo mettere in frigo? (scrivi nella casella di input facendo attenzione a scrivere una cosa alla volta e poi premere invio)';
            if(last){}
            else{
                for(let i=0;i<frigo.length;i++){
                    if((userWord === frigo[i])){
                        flag= true;
                    }   
                }
                if(flag){
                    message= 'bro gia c era'
                    divRisposta.innerHTML= message;
                }
                else{
                    frigo.push(userWord);
                    message='bro devi mette altro o possiamo cerca nel frigo? (digita solo y o n i minuscolo possibilmete)'
                    divRisposta.innerHTML= message;
                }
            if(userWord== 'y' || userWord=='Y'){
                message='bro scrivi altro'
                divRisposta.innerHTML=message;
                last = false;
                }
            }
                
        }
    }
    else{
        divRisposta.innerHTML= 'bro che cavolo hai scritto'; 
    }
});