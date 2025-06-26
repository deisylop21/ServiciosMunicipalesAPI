export class UserServiceEntity {
    id: number;
    user_id: number;
    alias: string;
    numero_servicio: string;
    servicio: 'CFE' | 'CONAGUA' | 'BASURA';
}