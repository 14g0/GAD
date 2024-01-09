import { checarBranch, printTraineeBranch, checkIagoRepo } from './gitBranch.js';
import { createInterface } from "node:readline/promises";

export const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});



async function main() {
    while(true) {
        console.clear();
        const resposta = await readline.question(`Insira sua opção:
\x1b[34;1m[1] Ver o nome da sua branch.
[2] Checar se você pushou sua branch.
[3] Checar se seu PR foi aprovado.\x1b[33;1m
[SAIR] para sair.\x1b[m\n> `);

        if(resposta.toUpperCase() == 'SAIR') break;
        else {
            switch(resposta) {
                default:
                    await readline.question(`\x1b[31;1mA opção inserida não corresponde a nenhuma da apresentadas 😠
\n\x1b[33m[Aperte qualquer tecla para voltar ao menu principal]\x1b[m`);
                    break;

                case '1':
                    await printTraineeBranch();
                    break;

                case '2':
                    await checarBranch();
                    break;

                case '3':
                    await checkIagoRepo();
                    break;
            }
        }
    }
}

await main();

readline.close();