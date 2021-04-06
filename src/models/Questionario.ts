class Questionario {
    iso:string;
    nome_q:string;
    data_q:Date;
    cod_q:string;
    nome_auditor:string;

    constructor(iso:string, nome_q:string, data_q:Date, cod_q:string, nome_auditor:string){
        this.iso = iso;
        this.nome_q = nome_q;
        this.data_q = data_q;
        this.cod_q = cod_q;
        this.nome_auditor = nome_auditor;
    }
}

export default Questionario;