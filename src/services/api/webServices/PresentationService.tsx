import { PresentationVoteResponse } from "../../infrastructure/response/show/ShowVoteResponse";
import ConnectionApi from "../connection/connection-api";

export default class PresentationService extends ConnectionApi {


    /**
     * Obtém todos os votos de apresentações disponíveis na API.
     *
     * @returns Uma Promise contendo a resposta da API com a lista de votos de apresentações.
     * @throws Retorna um erro se houver algum problema durante a requisição.
     */
    async getAllPresentationVotes(): Promise<any> {
        try {
            const url = '/presentation/votes/';
            const response = await this.get<PresentationVoteResponse[]>(url);
            return response;
        } catch (error) { return error; }
    }

    /**
     * Obtém um voto de apresentação específico com base no ID.
     *
     * @param id - O ID do voto de apresentação a ser recuperado.
     * @returns Uma Promise contendo a resposta da API com os detalhes do voto de apresentação.
     * @throws Retorna um erro se houver algum problema durante a requisição.
     */
    async getPresentationVoteById(id: number): Promise<any> {
        try {
            const url = `/presentation/votes/${id}`;
            const response = await this.get<PresentationVoteResponse>(url);
            return response;
        } catch (error) {
            throw error;
        }
    }
};