import { BandResponse } from "../../infrastructure/response/show/band/BandResponse";
import ConnectionApi from "../connection/connection-api";

/**
 * Serviço para interagir com recursos relacionados a bandas.
 * Estende a classe ConnectionApi para realizar operações HTTP básicas.
 */
export default class BandService extends ConnectionApi {

    async getAllBands(): Promise<any> {
        try {
            const url = '/band/';
            const response = await this.get<BandResponse[]>(url);
            return response;
        } catch(error) {
            throw error;
        }
    }

    async getBandById(idBand: number): Promise<any> {
        try {
            const url = `/band/${idBand}`;
            const response = await this.get<BandResponse>(url);
            return response;
        } catch(error) {
            throw error;
        }
    }
}