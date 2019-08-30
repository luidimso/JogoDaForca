export abstract class Letra{
    private codigo:string;

    protected constructor(codigo:string){
      this.codigo = codigo;
    }

    getCodigo():string{
      return this.codigo;
    }

    abstract exibir(contexto:object):void;

    equals(o:object):boolean{
      if(!(o instanceof Letra)){
        return false;
      } else {
        return true;
      }
    }

    hashcode():number{
      return 0;
    }

    toString():string{
      return this.codigo;
    }

    getLetra
}
