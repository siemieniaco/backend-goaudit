class Users {
    nome_u:string;
    email_u:string;
    senha_u:string;
    vinculo_emp_u:boolean;
    //chave_acesso_u:string;

    constructor(nome_u:string, email_u:string, senha_u:string, vinculo_emp_u:boolean){
        this.nome_u = nome_u;
        this.email_u = email_u;
        this.senha_u = senha_u;
        this.vinculo_emp_u = vinculo_emp_u;
        //this.chave_acesso_u = chave_acesso_u;
    }

}

export default Users;