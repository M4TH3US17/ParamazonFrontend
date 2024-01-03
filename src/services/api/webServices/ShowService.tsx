import { ShowResponse } from "../../infrastructure/response/show/ShowResponse";
import ConnectionApi from "../connection/connection-api"

export default class ShowService extends ConnectionApi {

    async getAllShowVotes(): Promise<any> {
        try {
            const url = '/show/votes/';
            const response = await this.get<ShowResponse[]>(url);
            return response;
        } catch(error) {throw error;}
    }

    async getShowVoteById(idShowVote: number): Promise<any> {
        try {
            const url = `/show/votes/${idShowVote}`;
            const response = await this.get<ShowResponse>(url);
            return response;
        } catch(error) {throw error;}
    }
}