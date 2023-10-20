export class Entreprise {
    id!: number;
    nom!: string;
    adresse!: string;
    details!: string;
    photo: File | string = ''; // Set it as File or string
    budget!: number;
    accepte!: boolean;
    domaine!: string;
    demandeAchatId?: number;  // Make the property optional with '?'
  recruteurId?: number;     // Make the property optional with '?'
  }
  