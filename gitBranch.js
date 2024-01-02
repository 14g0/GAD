import { promisify } from 'node:util';
import { exec } from 'node:child_process';
import { readline } from './execute.js';

const terminal = promisify(exec);

const nomeUsuario = process.env.USER_NAME;
const nomeBranch = process.env.BRANCH_NOME;
const nomeRepo = process.env.REPO_NOME;


export async function checarBranch() {
    console.clear();
    // const nomeUsuario = await readline.question('Insira o seu nome de usuário no GitHub\n> ');
    // const nomeBranch = await readline.question('\nInsira o nome da Branch\n> ');
    console.log('\n\x1b[33;1m[Checando...]\x1b[m\n');

    const comando = `git ls-remote --heads git@github.com:${nomeUsuario}/${nomeRepo}.git ${nomeBranch}`
    const retorno = await terminal(comando);
    const branchNome = retorno.stdout.trim().split('/')[2];

    if(branchNome && (branchNome != 'main')){
        console.log(`🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉
🎉  \x1b[32;1mTudo certo✅, você criou a sua branch com sucesso 🥳  \x1b[m🎉
🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉`);
    }
    else {
        console.log(`\x1b[31;1mNão consegui encontrar sua branch 😔
Tente novamente ou fale com algum membro da EJCM.\x1b[m`);
    }

    return await readline.question('\n\x1b[33m[Aperte qualquer tecla para voltar ao menu principal]\x1b[m');
}

export async function checkIagoRepo() {
    console.clear();
    const nomeBranch = await readline.question('Insira o nome da Branch\n> ');

    console.log('\n\x1b[33;1m[Checando...]\x1b[m\n');
    const retorno = await terminal(`git ls-remote --heads git@github.com:14g0/GAD.git ${nomeBranch}`);
    const branchNome = retorno.stdout.trim().split('/')[2];

    if(branchNome && (branchNome != 'main')){
        console.log(`🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉
🎉  \x1b[32;1mTudo certo✅, seu PR foi fechado 🥳 \x1b[m🎉
🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉` )
    }
    else {
        console.log(`\x1b[31;1mNão consegui encontrar sua branch 😔
Tente novamente ou fale com o Iago para ele fechar seu PR\x1b[m`);
    }

    return await readline.question('\n\x1b[33m[Aperte qualquer tecla para voltar ao menu principal]\x1b[m');
}