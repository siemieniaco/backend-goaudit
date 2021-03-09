class Questionario {
    iso:string;
    nome_q:string;
    data_q:Date;
    cod_q:string;
    nome_auditor:string;
    pergunta:string;
    opc:string;
    conformidade:string;
    categoria:string;
    requisito:string;

    constructor(iso:string, nome_q:string, data_q:Date, cod_q:string, nome_auditor:string, pergunta:string, opc:string, conformidade:string, categoria:string, requisito:string){
        this.iso = iso;
        this.nome_q = nome_q;
        this.data_q = data_q;
        this.cod_q = cod_q;
        this.nome_auditor = nome_auditor;
        this.pergunta = pergunta;
        this.opc = opc;
        this.conformidade = conformidade;
        this.requisito = requisito;
        this.categoria = categoria;
    }
}

export default Questionario;