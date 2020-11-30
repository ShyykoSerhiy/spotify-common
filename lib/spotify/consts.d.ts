export declare const deviceExample: {
    id: string;
    is_active: boolean;
    is_private_session: boolean;
    is_restricted: boolean;
    name: string;
    type: string;
    volume_percent: number;
};
export declare type Playlist = {
    collaborative: boolean;
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    images: {
        height: number;
        url: string;
        width: number;
    }[];
    name: string;
    owner: {
        display_name: string;
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        type: string;
        uri: string;
    };
    primary_color: null;
    public: boolean;
    snapshot_id: string;
    tracks: {
        href: string;
        total: number;
    };
    type: string;
    uri: string;
};
export declare type Album = {
    added_at: string;
    album: {
        album_type: string;
        artists: {
            external_urls: {
                spotify: string;
            };
            href: string;
            id: string;
            name: string;
            type: string;
            uri: string;
        }[];
        available_markets: string[];
        copyrights: {
            text: string;
            type: string;
        }[];
        external_ids: {
            upc: string;
        };
        external_urls: {
            spotify: string;
        };
        genres: never[];
        href: string;
        id: string;
        images: {
            height: number;
            url: string;
            width: number;
        }[];
        label: string;
        name: string;
        popularity: number;
        release_date: string;
        release_date_precision: string;
        total_tracks: number;
        tracks: {
            href: string;
            items: {
                artists: {
                    external_urls: {
                        spotify: string;
                    };
                    href: string;
                    id: string;
                    name: string;
                    type: string;
                    uri: string;
                }[];
                available_markets: string[];
                disc_number: number;
                duration_ms: number;
                explicit: boolean;
                external_urls: {
                    spotify: string;
                };
                href: string;
                id: string;
                is_local: boolean;
                name: string;
                preview_url: string;
                track_number: number;
                type: string;
                uri: string;
            }[];
            limit: number;
            next: null;
            offset: number;
            previous: null;
            total: number;
        };
        type: string;
        uri: string;
    };
};
export declare type Track = {
    track: {
        album: {
            id: string;
            name: string;
        };
        artists: {
            external_urls: {
                spotify: string;
            };
            href: string;
            id: string;
            name: string;
            type: string;
            uri: string;
        }[];
        id: string;
        name: string;
        uri: string;
    };
};
export declare const userExample: {
    birthdate: string;
    country: string;
    display_name: string;
    email: string;
    external_urls: {
        spotify: string;
    };
    followers: {
        href: null;
        total: number;
    };
    href: string;
    id: string;
    images: {
        height: null;
        url: string;
        width: null;
    }[];
    product: string;
    type: string;
    uri: string;
};
declare const playerExample: {
    device: {
        id: string;
        is_active: boolean;
        is_private_session: boolean;
        is_restricted: boolean;
        name: string;
        type: string;
        volume_percent: number;
    };
    shuffle_state: boolean;
    repeat_state: "track" | "context" | "off";
    timestamp: number;
    context: {
        external_urls: {
            spotify: string;
        };
        href: string;
        type: string;
        uri: string;
    };
    progress_ms: number;
    item: {
        album: {
            album_type: string;
            artists: {
                external_urls: {
                    spotify: string;
                };
                href: string;
                id: string;
                name: string;
                type: string;
                uri: string;
            }[];
            available_markets: string[];
            external_urls: {
                spotify: string;
            };
            href: string;
            id: string;
            images: {
                height: number;
                url: string;
                width: number;
            }[];
            name: string;
            release_date: string;
            release_date_precision: string;
            total_tracks: number;
            type: string;
            uri: string;
        };
        artists: {
            external_urls: {
                spotify: string;
            };
            href: string;
            id: string;
            name: string;
            type: string;
            uri: string;
        }[];
        available_markets: string[];
        disc_number: number;
        duration_ms: number;
        explicit: boolean;
        external_ids: {
            isrc: string;
        };
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        is_local: boolean;
        name: string;
        popularity: number;
        preview_url: string;
        track_number: number;
        type: string;
        uri: string;
    };
    currently_playing_type: string;
    is_playing: boolean;
};
export declare type Device = typeof deviceExample;
export declare type User = typeof userExample;
export declare type Player = typeof playerExample;
export {};
