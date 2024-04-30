import { Perfil } from "./perfil";

export interface Usuario {
    id: number;
    nome: string;
    login: string;
    senha: string;
    data_nascimento: Date;
    email: string;
    perfis: Perfil[];
}
