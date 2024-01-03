import { MediaResponse } from "../media/MediaResponse";
import { BandMemberResponse } from "./band/BandMemberResponse";


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
    band: BandMemberResponse = new BandMemberResponse();
    photograph: MediaResponse = new MediaResponse();
}