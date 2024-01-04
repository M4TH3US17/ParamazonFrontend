import { PresentationResponse } from "./ShowResponse";

export class ShowVoteResponse {
    idShowVote?: number;
    startVoting!: Date;
    endVoting!: Date;
    totalVotes?: number;
    presentationVoteList: PresentationVoteResponse[] = [];
}

export class PresentationVoteResponse {
    idPresentationVote?: number;
    votes: number = 0;
    votingPresentation: PresentationResponse = new PresentationResponse();
}