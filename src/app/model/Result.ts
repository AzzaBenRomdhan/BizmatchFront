import {AnalyseSentiment} from "./AnalyseSentiment";
import {PourcentageSentiment} from "./PourcentageSentiment";

export class Result {
  analyseSentiment: AnalyseSentiment = new AnalyseSentiment(50, 20);
  pourcentageSentiment: PourcentageSentiment = new PourcentageSentiment(50, 20);
}
