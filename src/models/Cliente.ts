class Cliente {
    nome_c:string;
    cpf_cnpj_c:string;
    data_c:Date;
    email_c:string;
    endereco_c:string;
    cod_c:string;
    numero_c:string;

    constructor(nome_c:string,cpf_cnpj_c:string, data_c:Date, email_c:string, endereco_c:string, cod_c:string, numero_c:string){
        this.nome_c = nome_c;
        this.cpf_cnpj_c = cpf_cnpj_c;
        this.data_c = data_c;
        this.email_c = email_c;
        this.endereco_c = endereco_c;
        this.cod_c = cod_c;
        this.numero_c = numero_c;
    }
}

export default Cliente;