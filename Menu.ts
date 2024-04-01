import readline = require("readline-sync");
import { colors } from "./model/Cores";
import { Conta } from "./model/Conta";
import { ContaCorrente } from "./model/ContaCorrente";
import { ContaPoupanca } from "./model/ContaPoupanca";
import { ContaController } from "./model/ContaController";

export function main(){
    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupanca'];
    
    
    const contas: ContaController = new ContaController();

    // Instanciando um novo Objeto da Classe Conta
    const contaCorrente: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 456, 1, "Pedro", 500000, 1000)
    contas.cadastrar(contaCorrente);

    // Instância da da Classe ContaPoupanca
    // Adicionada na Collection listaContas
    const contaPoupanca: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 123, 2, "Isabel", 1000, 10);
    contas.cadastrar(contaPoupanca);



    while(true){
        console.log(colors.bg.black, colors.fg.bluestrong, "");
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
                        console.log(colors.fg.green,
                            "\n Bem vindo ao Banco do Brazil com Z - Seu Futuro começa aqui!");
                        sobre();
                        console.log(colors.reset, "");
                        process.exit(0);
                    }//fim do if

            switch (opcao){
                case 1:
                    console.log(colors.fg.yellowstrong, "\n\n Criar Conta\n\n", colors.reset);

                    console.log("Digite o Número da Agência: ")
                agencia = readline.questionInt("")

                console.log("Digite o Nome do Titular: ")
                titular = readline.question("")

                console.log("Informe o tipo da Conta: ")
                tipo = readline.keyInSelect(tipoContas, "", { cancel: false }) + 1

                console.log("Digite o Saldo da Conta: ")
                saldo = readline.questionFloat("")

                switch (tipo) {
                    case 1:
                        console.log("Digite o Limite da Conta: ")
                        limite = readline.questionFloat("")
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                        )
                        break;
                    case 2:
                        console.log("Digite o dia do aniversário da Conta: ")
                        aniversario = readline.questionInt("")
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                        )
                        break;
                }
                keyPress();
                break;
                
                case 2:
                    console.log(colors.fg.yellowstrong, "\n\n Listar todas as Contas\n\n", colors.reset);

                    contas.listarTodas();

                    keyPress();
                break;

                case 3:
                    console.log(colors.fg.yellowstrong, "\n\n Buscar Conta por numero\n\n", colors.reset);
                    console.log("Digite o Número da Conta: ")
                numero = readline.questionInt("")

                contas.procurarPorNumero(numero);

                keyPress()
                break;
                
                case 4:
                    console.log(colors.fg.yellowstrong, "\n\n Atualizar dados da Conta\n\n", colors.reset);

                    console.log("Digite o Número da Conta: ")
                numero = readline.questionInt("")

                let conta = contas.buscarNoArray(numero)

                if (conta !== null) {

                    console.log("Digite o Número da Agência: ")
                    agencia = readline.questionInt("")

                    console.log("Digite o Nome do Titular: ")
                    titular = readline.question("")

                    tipo = conta.tipo

                    console.log("Digite o Saldo da Conta: ")
                    saldo = readline.questionFloat("")

                    switch (tipo) {
                        case 1:
                            console.log("Digite o Limite da Conta: ")
                            limite = readline.questionFloat("")
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                            )
                            break;
                        case 2:
                            console.log("Digite o dia do aniversário da Conta: ")
                            aniversario = readline.questionInt("")
                            contas.atualizar(
                                new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
                            )
                            break;
                    }

                    }else {
                        console.log("A Conta não foi Encontrada!")
                    }

                    keyPress()
                break;

                case 5:
                    console.log(colors.fg.yellowstrong, "\n\n Apagar Conta\n\n", colors.reset);

                    console.log("Digite o Número da Conta: ")
                numero = readline.questionInt("")

                contas.deletar(numero);

                keyPress()
                break;

                case 6:
                    console.log(colors.fg.yellowstrong, "\n\n Sacar\n\n", colors.reset);

                    console.log("\nDigite o numero da conta:")
                    numero = readline.questionInt("");

                    console.log("\nDigite o valor do saque ")
                    valor = readline.questionInt("");

                    contas.sacar(numero, valor);

                keyPress();
                break;

                case 7:
                    console.log(colors.fg.yellowstrong, "\n\n Depositar\n\n", colors.reset);

                    console.log("\nDigite o numero da conta:")
                    numero = readline.questionInt("");

                    console.log("\nDigite o valor do saque ")
                    valor = readline.questionInt("");

                    contas.depositar(numero, valor);

                keyPress();
                break;

                case 8:
                    console.log(colors.fg.yellowstrong, "\n\n Transferir valores entre Contas\n\n", colors.reset);

                    console.log("\nDigite o numero da conta de origem:")
                    numero = readline.questionInt("");

                    console.log("\nDigite o valor da conta de destino: ")
                    numeroDestino = readline.questionInt("");

                    console.log("\nDigite o valor do deposito (R$): ")
                    valor = readline.questionFloat("");

                    contas.transferir(numero, numeroDestino, valor);
                keyPress();
                break;

                default:
                    console.log(colors.fg.yellowstrong, "\n\n Opcao Invalida\n\n", colors.reset);
                keyPress();
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
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readline.prompt();
}

main();//Usando a função para executar o código
