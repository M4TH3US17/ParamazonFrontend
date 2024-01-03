export enum MusicalStyleResponse {
   /* Pop = 'Pop',
    Rock = 'Rock',
    */
}

export class MusicResponse {
    idMusic?: number;
    name: string = '';
    style!: MusicalStyleResponse;
}