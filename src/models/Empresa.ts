class Empresa {
    nome_emp:string;
    chave_acesso:string;
    data_emp: Date;
    cod_emp: string;
    CNPJ: string;
    afiliacao:string;

    constructor(nome_emp:string, chave_acesso:string, data_emp:Date, cod_emp:string, CNPJ:string, afiliacao:string) {
        this.nome_emp = nome_emp;
        this.chave_acesso = chave_acesso;
        this.data_emp = data_emp;
        this.cod_emp = cod_emp;
        this.CNPJ = CNPJ;
        this.afiliacao = afiliacao;
    }
}

export default Empresa;