import { Album, Device, Playlist, Track } from "./consts";
export declare const apiUrl = "https://api.spotify.com/v1/";
export declare const GET: {
    method: string;
};
export declare const POST: {
    method: string;
};
export declare const PUT: {
    method: string;
};
export declare const DELETE: {
    method: string;
};
export declare const getApi: (spotifyAuthServer: string, token: string, refreshToken: string, onTokenRefreshed?: ((token: string) => void) | undefined) => {
    me: {
        get: () => Promise<{
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
        }>;
        tracks: {
            get: (options?: {
                fields?: string | undefined;
                limit?: number | undefined;
                offset?: number | undefined;
            } | undefined) => Promise<{
                items: Track[];
                limit: number;
                offset: number;
                total: number;
            }>;
            getAll(): Promise<Track[]>;
            put: (trackUri?: string | undefined) => Promise<void>;
            delete: (trackUri: string) => Promise<void>;
            contains: {
                get: (trackUri: string) => Promise<boolean[]>;
            };
        };
    };
    player: {
        get: () => Promise<{
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
        }>;
        devices: {
            get: () => Promise<{
                devices: Device[];
            }>;
        };
        play: {
            put: (params: {
                trackUri?: string | undefined;
                offset?: number | undefined;
                albumUri?: string | undefined;
                deviceId?: string | undefined;
            }) => Promise<void>;
        };
        pause: {
            put: (deviceId?: string | undefined) => Promise<void>;
        };
        previous: {
            post: (deviceId?: string | undefined) => Promise<void>;
        };
        next: {
            post: (deviceId?: string | undefined) => Promise<void>;
        };
        shuffle: {
            put: (state: boolean, deviceId?: string | undefined) => Promise<void>;
        };
        repeat: {
            put: (state: "track" | "context" | "off", deviceId?: string | undefined) => Promise<void>;
        };
        volume: {
            put: (volumePersent: number, deviceId?: string | undefined) => Promise<void>;
        };
        seek: {
            put: (positionMs: number, deviceId?: string | undefined) => Promise<void>;
        };
    };
    playlists: {
        get: (options?: {
            fields?: string | undefined;
            limit?: number | undefined;
            offset?: number | undefined;
        } | undefined) => Promise<{
            items: Playlist[];
            total: number;
        }>;
        getAll(): Promise<Playlist[]>;
        tracks: {
            get: (playlist: Playlist, options?: {
                fields?: string | undefined;
                limit?: number | undefined;
                offset?: number | undefined;
            } | undefined) => Promise<{
                items: Track[];
                limit: number;
                offset: number;
                total: number;
            }>;
            getAll(playlist: Playlist): Promise<Track[]>;
        };
    };
    albums: {
        get: (options?: {
            fields?: string | undefined;
            limit?: number | undefined;
            offset?: number | undefined;
        } | undefined) => Promise<{
            items: Album[];
            total: number;
        }>;
        getAll(): Promise<Album[]>;
        tracks: {
            getAll({ album }: Album): Promise<Track[]>;
        };
    };
};
declare const tempAPI: {
    me: {
        get: () => Promise<{
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
        }>;
        tracks: {
            get: (options?: {
                fields?: string | undefined;
                limit?: number | undefined;
                offset?: number | undefined;
            } | undefined) => Promise<{
                items: Track[];
                limit: number;
                offset: number;
                total: number;
            }>;
            getAll(): Promise<Track[]>;
            put: (trackUri?: string | undefined) => Promise<void>;
            delete: (trackUri: string) => Promise<void>;
            contains: {
                get: (trackUri: string) => Promise<boolean[]>;
            };
        };
    };
    player: {
        get: () => Promise<{
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
        }>;
        devices: {
            get: () => Promise<{
                devices: Device[];
            }>;
        };
        play: {
            put: (params: {
                trackUri?: string | undefined;
                offset?: number | undefined;
                albumUri?: string | undefined;
                deviceId?: string | undefined;
            }) => Promise<void>;
        };
        pause: {
            put: (deviceId?: string | undefined) => Promise<void>;
        };
        previous: {
            post: (deviceId?: string | undefined) => Promise<void>;
        };
        next: {
            post: (deviceId?: string | undefined) => Promise<void>;
        };
        shuffle: {
            put: (state: boolean, deviceId?: string | undefined) => Promise<void>;
        };
        repeat: {
            put: (state: "track" | "context" | "off", deviceId?: string | undefined) => Promise<void>;
        };
        volume: {
            put: (volumePersent: number, deviceId?: string | undefined) => Promise<void>;
        };
        seek: {
            put: (positionMs: number, deviceId?: string | undefined) => Promise<void>;
        };
    };
    playlists: {
        get: (options?: {
            fields?: string | undefined;
            limit?: number | undefined;
            offset?: number | undefined;
        } | undefined) => Promise<{
            items: Playlist[];
            total: number;
        }>;
        getAll(): Promise<Playlist[]>;
        tracks: {
            get: (playlist: Playlist, options?: {
                fields?: string | undefined;
                limit?: number | undefined;
                offset?: number | undefined;
            } | undefined) => Promise<{
                items: Track[];
                limit: number;
                offset: number;
                total: number;
            }>;
            getAll(playlist: Playlist): Promise<Track[]>;
        };
    };
    albums: {
        get: (options?: {
            fields?: string | undefined;
            limit?: number | undefined;
            offset?: number | undefined;
        } | undefined) => Promise<{
            items: Album[];
            total: number;
        }>;
        getAll(): Promise<Album[]>;
        tracks: {
            getAll({ album }: Album): Promise<Track[]>;
        };
    };
};
export declare type Api = typeof tempAPI;
export {};
