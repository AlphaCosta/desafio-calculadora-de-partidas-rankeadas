  
ranking(0, 0);     // saldo 0  → Ferro
ranking(9, 0);     // saldo 9  → Ferro
ranking(10, 0);    // saldo 10 → Ferro
ranking(11, 11);   // saldo 0  → Bronze
ranking(20, 5);    // saldo 15 → Bronze
ranking(21, 0);    // saldo 21 → Prata
ranking(50, 40);   // saldo 10 → Prata
ranking(51, 50);   // saldo 1  → Ouro
ranking(80, 79);   // saldo 1  → Ouro
ranking(81, 0);    // saldo 81 → Diamante
ranking(90, 89);   // saldo 1  → Diamante
ranking(91, 0);    // saldo 91 → Lendário
ranking(100, 99);  // saldo 1  → Lendário
ranking(101, 0);   // saldo 101→ Imortal


function ranking(vitorias,derrotas){
    let nivel = ""
    let saldoVitorias = vitorias - derrotas

    if ( vitorias <= 10){ // No desafio é <10, porém achei mais logico usar o <= 10.
        nivel = "Ferro" 
    }else if (vitorias >= 11 && vitorias <= 20){
        nivel = "Bronze"
    }else if (vitorias >= 21 && vitorias <= 50){
        nivel = "Prata"
    }else if (vitorias >= 51 && vitorias <= 80){
        nivel = "Ouro"
    }else if (vitorias >= 81 && vitorias <= 90){
        nivel = "Diamante"
    }else if (vitorias >= 91 && vitorias <= 100){
        nivel = "Lendário"
    }else{
        nivel = "Imortal"
    }
    console.log (`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)

}
