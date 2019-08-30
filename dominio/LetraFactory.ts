import {Letra} from "./Letra";

export interface LetraFactory {
    getLetra(codigo:string):Letra;
    getLetraEncoberta():Letra;
}
