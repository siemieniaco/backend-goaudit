class Pergunta {
    corpo:string;
    requisito:number;
    categoria:string;
    id:number;
    conformidade:string;

    constructor(corpo:string, requisito:number, categoria:string, id:number, conformidade:string){
        this.corpo = corpo;
        this.requisito = requisito;
        this.categoria = categoria;
        this.id = id;
        this.conformidade = conformidade;
    }
}

export default Pergunta;