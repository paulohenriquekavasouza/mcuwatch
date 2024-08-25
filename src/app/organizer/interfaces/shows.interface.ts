import { IOrders, IRates, IRatings, IRuntime, IStreaming, ITitles } from "./movies.interface";

export interface IShows {
    titles?: ITitles;
    releaseDate?: string;
    orders?: IOrders;
    streamings?: IStreaming[];
    seasons?: ISeasons[];
    ratings?: IRatings;
    rates?: IRates;
    phase?: number;
    isSpecialPresentation?: boolean;
}

interface ISeasons {
    episodes?: IEpisodes[];
    phase?: number;
}

interface IEpisodes {
    titles?: ITitles;
    releaseDate?: string;
    orders?: IOrders;
    streamings?: IStreaming[];
    ratings?: IRatings;
    rates?: IRates;
    runtime?: IRuntime;
}