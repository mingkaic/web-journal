export interface ITopic {
    id: number,
    title: string,
    subject: string, // normalize
    author: string, // normalize
    startdate: Date,
    lastupdate: Date;
}