import { Perfil } from "./perfil";

export interface Permissao {
    id: number;
    nome: string;
    descricao: string;
    codigo: string;
    perfis: Perfil[];
}
