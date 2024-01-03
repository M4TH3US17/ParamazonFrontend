export class UserProfilePreferenceResponse {
    idBand?: number;
    name: string = '';
    photograph: string = '';
    description: string = '';
    members: UserPofileBandSingerPreferenceResponse[] = [];
};

export class UserPofileBandSingerPreferenceResponse {
    member: string = '';
    photograph: string = '';
}