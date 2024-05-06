import { Perfil } from "./perfil";

export interface CadastroUsuario {
    nome: string;
    login: string;
    senha: string;
    data_nascimento: Date;
    email: string;
}
