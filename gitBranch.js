import { promisify } from 'node:util';
import { exec } from 'node:child_process';
import { readline } from './execute.js';

const terminal = promisify(exec);

const trainees = [
    ['Iago Cesar', 'iagoC'],
    ['Alex Aguiar Lana', 'alexA'],
    ['Antônio Pedro Corrêa Rodrigues', 'antonioC'],
    ['Bruna Nobrega', 'brunaN'],
    ['Bruna Melloni', 'brunaM'],
    ['Cauã Parangaba Pinto', 'cauaP'],
    ['Davi Alves', 'daviA'],
    ['David Cubric Russo', 'davidC'],
    ['Diego Samim Da Silva', 'diegoS'],
    ['Emilly Tavares', 'emilyT'],
    ['Esther Mussi de Castro', 'estherM'],
    ['Fernanda Bussi', 'fernandaB'],
    ['Gabriel de Araujo de Souza', 'gabrielS'],
    ['Gabriel Ayres Fortunato', 'gabrielF'],
    ['Guilherme Lemos Oliveira', 'guilhermeL'],
    ['Gustavo Teixeira Breda', 'gustavoT'],
    ['João Moraes', 'joaoM'],
    ['Jorge Henrique Santiago Moreira Júnior', 'jorgeH'],
    ['Leonardo de Barros Fernandes', 'leonardoB'],
    ['Luiz Ricardo Nogueira Dias', 'luizR'],
    ['Miguel Ângelo De Souza Vieira', 'miguelA'],
    ['Pedro Rizzo Soares Pinto', 'pedroR'],
    ['Pedro Favato', 'pedroF'],
    ['Rafael El Shafie Ribeiro Pinto', 'rafaelE'],
    ['Sòcrates de Sousa', 'socratesS'],
    ['Thiago Simões Blandi Correa', 'thiagoS'],
]

export async function printTraineeBranch() {
    console.clear();
    console.table(trainees.map((trainee) => trainee[0]));
    
    const resposta = await readline.question('\x1b[33mInsira o número do seu nome\x1b[m\n> ');
    console.log(`O nome da sua branch é \x1b[33;1m[${trainees[resposta][1]}]\x1b[m`);

    return await readline.question('[Aperte qualquer tecla para continuar]');
}

export async function checarBranch() {
    console.clear();
    const nomeUsuario = await readline.question('Insira o seu nome de usuário no GitHub\n> ');
    const nomeBranch = await readline.question('\nInsira o nome da Branch\n> ');
    console.log('\x1b[33;1m[Checando...]\x1b[m');

    const comando = `git ls-remote --heads git@github.com:${nomeUsuario}/GAD.git ${nomeBranch}`
    console.log(comando);
    const retorno = await terminal(comando);
    const branchNome = retorno.stdout.trim().split('/')[2];

    if(branchNome && (branchNome != 'main')){
        console.log(`\n🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉
🎉  Tudo certo✅, você criou a sua branch com sucesso 🥳  🎉
🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉` )
    }
    else {
        console.log(`\x1b[31;1mNão consegui encontrar sua branch 😔
Tente novamente ou fale com algum membro da EJCM.\x1b[m`);
    }

    return await readline.question('[Aperte qualquer tecla para continuar]');
}

export async function checkIagoRepo() {
    console.clear();
    const nomeBranch = readline.question('Insira o nome da Branch:');

    const retorno = await terminal(`
        git ls-remote --heads git@github.com:14g0/GAD.git ${nomeBranch}
    `);
    const branchNome = retorno.stdout.trim().split('/')[2];

    if(branchNome && (branchNome != 'main')){
        console.log(`🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉
        🎉  Tudo certo✅, seu PR foi fechado 🥳  🎉
        🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉` )
    }

    return await readline.question('[Aperte qualquer tecla para continuar]');
}