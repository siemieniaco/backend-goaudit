import firebase from '../config/db';

const firestore = firebase.firestore();


class questionarioController {

    public async novoQuestionario(request, response) {
        
        try{

           const {iso, nome_q, data_q, nome_auditor, requisito, categoria, id, corpo} = request.body;   

           var res;

            switch(id){
                case '1':
                    res = "Conforme";
                    break;
                case '2':
                    res = "Não Conforme";
                    break;
                case '3':
                    res = "Não Aplicável";
                    break;
                }

                const conformidade = res;

                const n = Math.floor(Math.random() * 1000000000);
                const cod_q = n.toString();
    
                await firestore.collection('Questionarios').doc(nome_q)
                .set({iso, nome_q, data_q, nome_auditor});
                
                var pergunta = [];
                pergunta[requisito] = corpo;
        
                 await firestore.collection('Questionarios').doc(nome_q).collection('Perguntas').doc(requisito)
                .set({ requisito, categoria, conformidade, id, corpo});
                
                
                response.send('Questionário salvo com sucesso!');

        }catch(error){
            response.status(400).send('Ocorreu um erro!');
        }
    }

    /*
    const novaPergunta = async (request, response) {
        
        try{
        const {requisito, categoria, conformidade, id, corpo} = request.body;
        
        var pergunta = [];
        pergunta[requisito] = corpo;
        
        await firestore.collection('Questionario').doc().collection('Perguntas').doc(requisito)
                .set({ requisito, categoria, conformidade, id, pergunta});

                response.send("Pergunta adicionada!");
        
        }catch(error){
            response.status(400).send('Ocorreu um erro!');
        }
    }
    */

   public async getQuestionario(request, response) {
    try{
        const nome = request.params.nome;
        const questionario = firestore.collection('Questionarios').doc(nome);
        const data = await questionario.get();
    
        const perguntas= questionario.collection('Perguntas').doc();
        const data2 = await perguntas.get();

        if(!data.exists) {
            response.status(404).send('Questionario nao existe!');
        }else {
            response.send(data.data(), data2.data());
        }
    }catch (error) {
        response.status(400).send(error.message);
    }
}

public async attQuestionario(request, response){
    try {
        const nome = request.params.nome;
        const data = request.body;
        const questionario =  firestore.collection('Questionarios').doc(nome);
        await questionario.update(data);
        response.send('Informações atualizadas!');        
    } catch (error) {
        response.status(400).send(error.message);
    }
}

public async delQuestionario(request, response){
    try {
        const nome = request.params.nome;
        await firestore.collection('Questionarios').doc(nome).delete();
        response.send('Questionario excluido!');
    } catch (error) {
        response.status(400).send(error.message);
    }
  }
}

export const questionarioControllers = new questionarioController();