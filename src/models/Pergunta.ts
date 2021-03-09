class Pergunta {
    corpo:string;
    requisito:number;
    categoria:string;
    id:number;

    constructor(corpo:string, requisito:number, categoria:string, id:number){
        this.corpo = corpo;
        this.requisito = requisito;
        this.categoria = categoria;
        this.id = id;
    }
}

export default Pergunta;