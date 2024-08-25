export interface IMovies {
    titles?: ITitles;
    producer?: string;
    releaseDate?: string;
    orders?: IOrders;
    streamings?: IStreaming[];
    theaters?: boolean;
    runtime: IRuntime;
    ratings?: IRatings;
    rates?: IRates;
    phase?: number;
}

export interface ITitles {
    "en-US"?: string;
    "pt-BR"?: string;
}

export interface IOrders {
    releaseOrder: number;
    chronologicalOrder: number;
}

export interface IStreaming {
    name?: string;
    url?: string;
    logo?: string;
}

export interface IRuntime {
    minutes?: number;
    fullForm?: string;
}

export interface IRates {
    imdb?: IImdb;
}

export interface IImdb {
    id?: string;
}

export interface IRatings {
    esrb?: IRating;
    djctq?: IRating;
}

export interface IRating {
    title?: string;
}