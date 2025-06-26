export class AddressEntity {
    constructor(
        public comisaria_id: number,
        public colonia_id: number,
        public calle: string,
        public cp: string,
        public referencia: string | null,
    )
    {}
}