export class Entreprise {
  
  nom!: string;
  adresse!: string;
  details!: string;
  photo: File | null = null; // Utilisez le type File pour stocker l'image.
  budget!: number;
  accepte!: boolean;
  domaine!: string;
}
