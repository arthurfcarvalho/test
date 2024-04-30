import { Permissao } from "./permissao";
import { Usuario } from "./usuario";

export interface Perfil {
    id: number;
    nome: string;
    usuarios: Usuario[];
    permissoes: Permissao[];
}
