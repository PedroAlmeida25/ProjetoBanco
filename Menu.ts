import readline = require("readline-sync");
import { Conta } from "./model/Conta";
import { ContaCorrente } from "./model/ContaCorrente";
import { ContaPoupanca } from "./model/ContaPoupanca";

export function main(){
    let opcao: number;

    // Instanciando um novo Objeto da Classe Conta
    console.log("\nCriar o Objeto da Classe Conta")

    const c1: Conta = new Conta(1, 123, 1, "Pedro", 10000);
    c1.visualizar();
    c1.sacar(5000);
    c1.visualizar();
    c1.depositar(1000);
    c1.visualizar();

    const c2: ContaCorrente = new ContaCorrente(1, 255, 2, "Isabel", 9999, 1000);
    c2.visualizar();
    c2.sacar(2500);
    c2.visualizar();
    c2.depositar(500);
    c2.visualizar();

    const c3: ContaPoupanca = new ContaPoupanca(1, 361, 1, "Diego", 2500, 12);
    c3.visualizar();
    c3.sacar(250);
    c3.visualizar();
    c3.depositar(50);
    c3.visualizar();



    while(true){
        console.log("                                                      ");
        console.log("                                                      ");
        console.log("                                                      ");
        console.log("           ****************************");
        console.log("                                     *");
        console.log("                                   *");
        console.log("                                 *");
        console.log("                               *");
        console.log("                             *");
        console.log("                           *");
        console.log("                         *");
        console.log("                       *");
        console.log("                     *");
        console.log("                   *");
        console.log("                 *");
        console.log("               *");
        console.log("             *");
        console.log("            ****************************");
        console.log("                                                      ");
        console.log("                                                      ");
        console.log("                                                      ");
        console.log("               BANCO DO BRAZIL COM Z                  ");
        console.log("                                                      ");
        console.log("------------------------------------------------------");
        console.log("                                                      "); 
        console.log("               1 - Criar Conta                        ");
        console.log("               2 - Listar todas as Contas             "); 
        console.log("               3 - Buscar Conta por Numero            "); 
        console.log("               4 - Atualizar Dados da Conta           "); 
        console.log("               5 - Apagar Conta                       "); 
        console.log("               6 - Sacar                              ");
        console.log("               7 - Depositar                          "); 
        console.log("               8 - Transferir valores entre Contas    "); 
        console.log("               9 - Sair                               "); 
        console.log("                                                      ");
        console.log("                                                      "); 
        console.log("------------------------------------------------------"); 
        console.log("                                                      ");

                    console.log("Entre com a opcao desejada: ");
                    opcao = readline.questionInt("");

                    if(opcao == 9){
                        console.log("\n Bem vindo ao Banco do Brazil com Z - Seu Futuro começa aqui!");
                        sobre();
                        process.exit(0);
                    }//fim do if

            switch (opcao){
                case 1:
                    console.log("\n\n Criar Conta\n\n");
                break;
                
                case 2:
                    console.log("\n\n Listar todas as Contas\n\n");
                break;

                case 3:
                    console.log("\n\n Buscar Conta por numero\n\n");
                break;
                
                case 4:
                    console.log("\n\n Atualizar dados da Conta\n\n");
                break;

                case 5:
                    console.log("\n\n Apagar Conta\n\n");
                break;

                case 6:
                    console.log("\n\n Sacar\n\n");
                break;

                case 7:
                    console.log("\n\n Depositar\n\n");
                break;

                case 8:
                    console.log("\n\n Transferir valores entre Contas\n\n");
                break;

                default:
                    console.log("\n\n Opcao Invalida\n\n");
                break;
            }//fim do switch

    }//fim do while
}//fim da função

export function sobre(): void{
        console.log("                               ");
        console.log("                               "); 
        console.log("-------------------------------"); 
        console.log("\nDesenvolvido por Pedro Almeida");
        console.log("                               "); 
        console.log("-------------------------------");
}//fim da função

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readline.prompt();
}

main();
