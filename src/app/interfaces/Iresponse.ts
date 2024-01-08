export interface IResponse {
    results: Array<any>[];
    pages: number;
    records: number;
    current: number;
    filter?: string;
}