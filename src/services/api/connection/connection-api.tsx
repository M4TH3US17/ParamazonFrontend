import axios, { AxiosInstance } from 'axios';

/**
 * Classe que encapsula uma instância do Axios configurada para uma base URL específica.
 * Fornece métodos para realizar operações HTTP básicas (GET, DELETE, POST, PUT).
 */
export default class ConnectionApi {
    axios: AxiosInstance;

    /**
     * Construtor da classe ConnectionApi.
     * @param baseURL A base URL para todas as solicitações feitas pela instância do Axios.
     */
    constructor() {
        this.axios = axios.create({ baseURL: 'http://localhost:8081/api/v1' });
    }

    async get<T>(url: string): Promise<T> {
        return this.axios.get(url);
    }

    delete(url: string) {
        return this.axios.delete(url);
    }

    post(url: string, data: any) {
        return this.axios.post(url, data);
    }

    put(url: string, data: any) {
        return this.axios.put(url, data);
    }
}