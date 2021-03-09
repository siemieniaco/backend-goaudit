class Cliente {
    nome_cliente:string;
    cpf:string;
    data_cliente:Date;
    email_cliente:string;
    endereco:string;
    cod_cliente:string;

    constructor(nome_cliente:string,cpf:string, data_cliente:Date, email_cliente:string, endereco:string,cod_cliente:string){
        this.nome_cliente = nome_cliente;
        this.cpf = cpf;
        this.data_cliente = data_cliente;
        this.email_cliente = email_cliente;
        this.endereco = endereco;
        this.cod_cliente = cod_cliente;
    }
}

export default Cliente;