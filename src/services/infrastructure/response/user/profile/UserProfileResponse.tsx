import { MediaResponse } from "../../media/MediaResponse";
import { UserProfilePreferenceResponse } from "./preferences/UserProfilePreferenceResponse";

export class UserProfileResponse {
    idUser?: number;
    username: string = '';
    roles: RoleResponse[] = [];
    photograph: MediaResponse = new MediaResponse();
    preferences: UserProfilePreferenceResponse[] = [];
    email: ValidationEmailResponse = new ValidationEmailResponse();
};

export class ValidationEmailResponse {
    idEmail?: number;
    email: string = '';
    isConfirmed!: boolean;
}

export class RoleResponse {
    name: string = '';
}