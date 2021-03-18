export interface IMongoUser {
    _id: string,
    name: string,
    email: string,
    password: string,
    tickets: Array<any>
    _v: number
}