//!  secondo snack
btnSnack2.addEventListener('click',function(){
    inputGroup.classList.remove('d-none');
    btnSnack3Control.classList.add('d-none');
    btnSnack2Control.classList.remove('d-none');
    btnSnack1Control.classList.add('d-none');
    divRisposta.innerHTML='quanti elementi vuoi nel array?';
});
let last2= false;
let array= [];
btnSnack2Control.addEventListener('click',function(){
    let min=1;
    let max=100;
    let useNum = parseInt(input.value);
    divRisposta.innerHTML=``;   

    if(last2){
        if(array.length>useNum)
            {
                for(let i=(array.length-useNum);i<array.length;i++){
                    divRisposta.innerHTML=`  ${divRisposta.innerHTML}  ${array[i]}  `;
                }
            }
            else{
                divRisposta.innerHTML= 'bro che cavolo stai a fa che sappia gli array non possono andare in negativo'
            }
        last2=false;
        array= [];
    }
    else{
        if(isNaN(useNum)){
            last2= true;
            divRisposta.innerHTML=`fra ora devi scrivere quanti elemeti vuoi estrare`
        }
        else{
            for(let i=0;i<useNum;i++){
                array.push(getRndInteger(min,max));
                divRisposta.innerHTML=`fra per piacere ora metti una stringa cosi capisco che posso anda avanti`
            }
        }
    }
});