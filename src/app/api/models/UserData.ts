export interface UserData {
    login: string;
    password: string;
}

export interface LoginResponse {
    succesful: number;
    error?: any;
    token?: string;
}