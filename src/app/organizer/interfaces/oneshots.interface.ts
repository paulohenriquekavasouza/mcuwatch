import { ITitles, IOrders, IStreaming, IRuntime, IRatings, IRates } from "./movies.interface";

export interface IOneShots {
    titles?: ITitles;
    producer?: string;
    releaseDate?: string;
    orders?: IOrders;
    streamings?: IStreaming[];
    theaters?: boolean;
    runtime?: IRuntime;
    ratings?: IRatings;
    rates?: IRates;
    phase?: number;
    isOneShot?: boolean;
}