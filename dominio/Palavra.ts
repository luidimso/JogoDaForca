import {Tema} from "./Tema";
import {LetraFactory} from "./LetraFactory";
import {ObjetoDominioImpl} from "./ObjetoDominioImpl";
import {Letra} from "./Letra";

export class Palavra extends ObjetoDominioImpl{
  private palavra:string;
  private tema:Tema;
  private factory:LetraFactory;
  private letras:Letra[];

  private constructor(id:number, palavra:string, tema:Tema){
    super(id);
    this.palavra = palavra;
    this.tema = tema;

    for(let i=0; i<palavra.length; i++){
      this.letras[i] = this.factory.getLetra(this.palavra.charAt(i));
    }
  }

  setLetraFactory(factory:LetraFactory):void{
    this.factory = factory;
  }

  getLetraFactory():LetraFactory{
    return this.factory;
  }

  criar(id:number, palavra:string, tema:Tema):Palavra{
    return new Palavra(id, palavra, tema);
  }

  reconstituir(id:number, palavra:string, tema:Tema):Palavra{
    return new Palavra(id, palavra, tema);
  }

  getLetras():Letra[]{
    return this.letras;
  }

  getLetra(posicao:number):Letra{
    return this.letras[posicao];
  }

  exibir(contexto:object, posicoes?:boolean[]):void{
    if(posicoes == undefined){
      for(let i; i<this.palavra.length; i++){
        this.letras[i].exibir(contexto);
      }
    } else {
      for(let i; i<this.palavra.length; i++){
        if(posicoes[i]){
          this.letras[i].exibir(contexto);
        }
      }
    }
  }

  tentar(codigo:string):number[]{
    
  }
}
