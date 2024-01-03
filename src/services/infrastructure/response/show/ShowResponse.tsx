import { MediaResponse } from "../media/MediaResponse";
import { BandResponse } from "./band/BandResponse";


export class ShowResponse {
    idShow?: number;
    date?: Date;
    budget: number = 0.0;
    presentations: PresentationResponse[] = [];
};

export class PresentationResponse {
    idPresentation?: number;
    startPresentation: string = '';
    endPresentation: string = '';
    description: string = '';
    band: BandResponse = new BandResponse();
    photograph: MediaResponse = new MediaResponse();
}