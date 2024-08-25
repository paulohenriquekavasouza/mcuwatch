import { IOrders, IRates, IRatings, IRuntime, IStreaming, ITitles } from "./movies.interface";
import { ISeasons } from "./shows.interface";

export interface IDays {
    day?: string;
    list: IList[];
    totalTime?: number;
}

export interface IList {
    titles: ITitles;
    producer?: string;
    releaseDate?: string;
    orders?: IOrders;
    streamings: IStreaming[];
    theaters?: boolean;
    runtime: IRuntime;
    ratings?: IRatings;
    rates?: IRates;
    phase?: number;
    seasons?: ISeasons[];
    isSpecialPresentation?: boolean;
    isOneShot?: boolean;
    showTitles: ITitles;
    season?: number;
    episode?: number;
}