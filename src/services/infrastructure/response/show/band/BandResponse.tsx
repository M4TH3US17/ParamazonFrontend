import { MediaResponse } from "../../media/MediaResponse";
import { MusicResponse } from "../../music/MusicResponse";
import { BandMemberResponse } from "./BandMemberResponse";

export class BandResponse {
    idBand?: number;
    name: string = '';
    totalPayment: number = 0.0;
    description: string = '';
    playlist: MusicResponse[] = [];
    members: BandMemberResponse[] = [];
    photograph: MediaResponse = new MediaResponse();
}