export class AnalyseSentiment {
  motsPositifs: number;
  motsNegatifs: number;

  constructor(motsPositifsCount: number, motsNegatifsCount: number) {
    this.motsPositifs = motsPositifsCount;
    this.motsNegatifs = motsNegatifsCount;
  }
}
