//! Terzo snack
btnSnack3.addEventListener('click',function(){
    inputGroup.classList.remove('d-none');
    btnSnack1Control.classList.add('d-none');
    btnSnack2Control.classList.add('d-none');
    btnSnack3Control.classList.remove('d-none');
    divRisposta.innerHTML='ORA bro mi devi dare la lunghezza di due array DIVERSI (occhi che controllo). ma ora una cosa per volta dammi la lunchezza del PRIMO array';
});
let last3=0;
let lastNum=0;
let array2=[];
let array3=[];
btnSnack3Control.addEventListener('click',function(){
    userNum= parseInt(input.value);
    let min = 1;
    let max = 99;
    let risultato = 0;
    let stampaAray='';
    if(last3<1){
        for(let i; i<userNum; i++){
            array2.push(getRndInteger(min,max));
        }
        divRisposta.innerHTML='ora bro dammi il secondo numero';
        last3++;
        lastNum = userNum;
    }
    else if(last3<2){
        for(let i; i<userNum; i++){
            array3.push(getRndInteger(min,max));
        }
        divRisposta.innerHTML='ora bro premi di nuovo(scusa per i modi macchinosi)';
        last3++;
    }
    else if(last3<3){
        if(userNum === lastNum){
            divRisposta.innerHTML='fra dai te avevo detto che non doveva essere uguale';
        }
        else if(userNum > lastNum){
            risultato = lastNum;
            divRisposta.innerHTML='fra te dico il SECONDO array e quello piu grosso mo aggiungo qualsosa al PRIMO'
        }
        else if(userNum < lastNum){
            risultato = userNum;
            divRisposta.innerHTML='fra te dico il PRIMO array e quello piu grosso mo aggiungo qualsosa al SECONDO';
        }
        last++;
    }
    else if(last3<4){
        for(let i = 0;i<risultato;i++){
            if(risultato == userNum){
                lastNum.push(getRndInteger(min,max));
                stampaAray = `  ${stampaAray}   ${lastNum[i]}  `;
            }
            else if(risultato == lastNum){
                userNum.push(getRndInteger(min,max));
                stampaAray = `  ${stampaAray}   ${userNum[i]}  `;
            }
            divRisposta.innerHTML=`l'aray pompato${stampaAray}`;
            last3 = 0;
            lastNum = 0;
            array2= [];
            array3= [];
        }

    }
});