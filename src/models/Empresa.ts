class Empresa {
    nome_emp:string;
    chave_acesso_emp:string;
    chave_acesso2_emp:string;
    data_emp: Date;
    cod_emp: string;
    CNPJ_emp: string;
    afiliacao_emp:string;
    id:any;

    constructor(nome_emp:string, chave_acesso_emp:string, chave_acesso2_emp:string, data_emp:Date, cod_emp:string, CNPJ_emp:string, afiliacao_emp:string, id:any) {
        this.nome_emp = nome_emp;
        this.chave_acesso_emp = chave_acesso_emp;
        this.chave_acesso2_emp = chave_acesso2_emp;
        this.data_emp = data_emp;
        this.cod_emp = cod_emp;
        this.CNPJ_emp = CNPJ_emp;
        this.afiliacao_emp = afiliacao_emp;
        this.id = id;
    }
}

export default Empresa;