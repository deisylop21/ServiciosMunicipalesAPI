export enum AccountStatus {
  Pendiente = 'Pendiente',
  Activo = 'Activo',
  Inactivo = 'Inactivo',
}

export enum UserType {
  administrador = 'administrador',
  ciudadano = 'ciudadano',
}

export class UserEntity {
  constructor(
    public user_id: number,
    public type: UserType,
    public names: string,
    public father_lastname: string,
    public mother_lastname: string,
    public email: string,
    public password: string,
    public username: string,
    public birth_date: Date | null,
    public phone: string | null,
    public recovery_token: string | null,
    public token_exp: Date | null,
    public profile_picture: string | null,
    public registration_date: Date,
    public account_status: AccountStatus,
  ) {}
}
