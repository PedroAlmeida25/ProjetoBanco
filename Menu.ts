import readline = require("readline-sync");
import { Conta } from "./model/Conta";

export function main(){
    let opcao: number;

    // Instanciando um novo Objeto da Classe Conta
    console.log("\nCriar o Objeto da Classe Conta")
    let c1: Conta = new Conta(1, 355, 1, "Pedro", 1500000.00);

    // Visualizando todos os dados da conta criada
    c1.visualizar();

    // Modificando o Saldo através do método set
    console.log("\nAlterar o Saldo para R$ 1500000.00")
    c1.set_saldo(1500000);

    // Recuperando o valor do Saldo através do método get
    console.log(`\nNovo Saldo da Conta: ${c1.get_saldo()}`);

    // Verificando se o Saque deu certo
    console.log(`\nSacar R$ 2000000.00 da conta: ${c1.sacar(2000000)}`);
    c1.visualizar();

    // Verificando se o Saque deu certo
    console.log(`\nSacar R$ 2000.00 da conta: ${c1.sacar(2000)}`);
    c1.visualizar();

    // Depositar dinheiro na conta
    console.log("\nDepositar R$ 5000.00 na Conta: ");
    c1.depositar(5000);

    // Visualização da conta
    c1.visualizar();

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