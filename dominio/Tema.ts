import {ObjetoDominioImpl} from "./ObjetoDominioImpl";

export class Tema extends ObjetoDominioImpl{
  private nome:string;

  private constructor(id:number, nome:string){
    super(id);
    this.nome = nome;
  }

  criar(id:number, nome:string):Tema{
    return new Tema(id, nome);
  }

  reconstituir(id:number, nome:string):Tema{
    return new Tema(id, nome);
  }

  getNome():string{
    return this.nome;
  }

  setNome(nome:string):void{
    this.nome = nome;
  }
}
