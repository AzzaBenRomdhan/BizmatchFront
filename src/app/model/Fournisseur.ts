import { User } from "./User";

export interface Fournisseur {
    idfournisseur: number;
    domainesactivite: string;
    details: string;
    username: string;
    prenom:String;
    email:String;
    address:String;
    partenaire:String;
    usersfournisseur: User[];
  }
 
 
  