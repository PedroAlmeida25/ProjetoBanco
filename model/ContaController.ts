import { Conta } from "../model/Conta";
import { ContaRepository } from "./ContaRepository";
import { colors } from "./Cores";

export class ContaController implements ContaRepository{
    
    // Collection Array que aramzenará os Objetos das Classes
    // ContaCorrente e ContaPoupanca
    private listaContas: Array<Conta> = new Array<Conta>();

    // Atributo que será utilizado para controlar o numero das
    // contas
    public numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null)
            buscaConta.visualizar()
        else
            console.log("\nConta não foi Encontrada!")
    }

    // Método para Listar os dados de todas as Contas
    // inseridas na Collection listaContas
    listarTodas(): void {
       for (let conta of this.listaContas){
            conta.visualizar();
       }
    }

     // Método para adicionar Objrtos das Classes 
     // ContaCorrente e ContaPoupanca
    // na Collection listaContas
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("A Conta foi adicionada!")
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if(buscaConta !== null){
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(`A Conta número ${conta.numero} foi Atualizada com êxito!`)
        }else
            console.log("\nConta não foi Encontrada!")
    }

    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1)
            console.log(`A Conta número ${numero} foi Excluída com êxito!`)
        }else
            console.log("\nConta não foi Encontrada!")
    }

    sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if(conta != null){
            if(conta.sacar(valor) == true)
            console.log(colors.fg.bluestrong + "\nO saque na conta numero: " + numero + "foi efetuado com sucesso!" + colors.reset);
        }else
        console.log(colors.fg.red + "\nA conta numero\n\n: " + numero + "\nnao foi encontrada" + colors.reset);
    }

    depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if(conta != null){
            conta.depositar(valor);
            console.log("\nO Deposito na conta numero: " + numero + "efetuado com sucesso!");
        }else
        console.log("\nA conta numero\n\n: " + numero + "\nnao foi encontrada");
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if(contaOrigem != null && contaDestino != null){
            if(contaOrigem.sacar(valor) == true){
                contaDestino.depositar(valor);
                console.log("\nA transferência da conta numero: " + numeroOrigem + "para a conta" + numeroDestino + "foi efetuada com sucesso");
            }
        }else
        console.log("\nA conta numero\n\n: " + numeroOrigem + "\ne/ou sua conta\n\n " + numeroDestino + "\nnao foram encontradas");
    }

    // Métodos Auxiliares

    public gerarNumero(): number{
        return ++ this.numero
    }
    
    public buscarNoArray(numero: number): Conta | null{
        for (let conta of this.listaContas){
            if (conta.numero === numero)
                return conta;
       }

       return null;
    }
}