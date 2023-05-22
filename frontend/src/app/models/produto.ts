import { Categoria } from "./categoria.model"
import { Tag } from "./tag.model"

export class Produto{
    id?    : number
    id_categoria      : number =null
    descricao         : string =null
    capa              : string =null
    sempre_disponivel : boolean=false; 
    quantidade        : number =null
    valor             : number =null
    Tags              : Array<Tag>=[]
    Categoria         : Categoria

}