import {ObjetoDominio} from "./ObjetoDominio";

export abstract class ObjetoDominioImpl implements ObjetoDominio {
    private id:number;

    constructor(id:number){
      this.id = id;
    }

    getId():number{
      return this.id;
    }
}
