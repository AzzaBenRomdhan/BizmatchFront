export class OffreMarche {
  idoffre: number;
  location: string;
  nomOffre: string;
  detailsOffre: string;
  capacite: number;
  price: number;

  constructor(
    idoffre: number,
    location: string,
    nomOffre: string,
    detailsOffre: string,
    capacite: number,
    price: number
  ) {
    this.idoffre = idoffre;
    this.location = location;
    this.nomOffre = nomOffre;
    this.detailsOffre = detailsOffre;
    this.capacite = capacite;
    this.price = price;
  }
}
