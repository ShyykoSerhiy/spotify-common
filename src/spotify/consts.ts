
export const deviceExample = {
    "id": "5fbb3ba6aa454b5534c4ba43a8c7e8e45a63ad0e",
    "is_active": false,
    "is_private_session": true,
    "is_restricted": false,
    "name": "My fridge",
    "type": "Computer",
    "volume_percent": 100
};
export type Playlist = {
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
export type Album = {
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
export type Track = {
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

export const userExample = {
    "birthdate": "1937-06-01",
    "country": "SE",
    "display_name": "JM Wizzler",
    "email": "email@example.com",
    "external_urls": {
        "spotify": "https://open.spotify.com/user/wizzler"
    },
    "followers": {
        "href": null,
        "total": 3829
    },
    "href": "https://api.spotify.com/v1/users/wizzler",
    "id": "wizzler",
    "images": [
        {
            "height": null,
            "url": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/t1.0-1/1970403_10152215092574354_1798272330_n.jpg",
            "width": null
        }
    ],
    "product": "premium",
    "type": "user",
    "uri": "spotify:user:wizzler"
}

const playerExample = {
    "device": {
        "id": "4c048f453d45e4352073b81e2052c468fd14ea0",
        "is_active": true,
        "is_private_session": false,
        "is_restricted": false,
        "name": "Some dude's macbook",
        "type": "Computer",
        "volume_percent": 100
    },
    "shuffle_state": false,
    "repeat_state": "context" as "track" | "context" | "off",
    "timestamp": 1538016939274,
    "context": {
        "external_urls": {
            "spotify": "https://open.spotify.com/artist/6uothxMWeLWIhsGeF7cyo4"
        },
        "href": "https://api.spotify.com/v1/artists/6uothxMWeLWIhsGeF7cyo4",
        "type": "artist",
        "uri": "spotify:artist:6uothxMWeLWIhsGeF7cyo4"
    },
    "progress_ms": 166444,
    "item": {
        "album": {
            "album_type": "compilation",
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
                    },
                    "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                    "id": "0LyfQWJT6nXafLPZqxe9Of",
                    "name": "Various Artists",
                    "type": "artist",
                    "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
                }
            ],
            "available_markets": [
                "AD",
                "ZA"
            ],
            "external_urls": {
                "spotify": "https://open.spotify.com/album/04rz93AqGy9JduzV3K81Dh"
            },
            "href": "https://api.spotify.com/v1/albums/04rz93AqGy9JduzV3K81Dh",
            "id": "04rz93AqGy9JduzV3K81Dh",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/7bcfc7d27bb7cdb914e5b01fbeea246d91c52938",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/8a4756d520b2c0973de9a6fd67e1c3b16cdc0860",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/b1b6c27bff91023db412f1affb88b2b9b5a5111a",
                    "width": 64
                }
            ],
            "name": "The Lord Of The Rings: The Fellowship Of The Ring (Original Motion Picture Soundtrack)",
            "release_date": "2001-11-19",
            "release_date_precision": "day",
            "total_tracks": 18,
            "type": "album",
            "uri": "spotify:album:04rz93AqGy9JduzV3K81Dh"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/6uothxMWeLWIhsGeF7cyo4"
                },
                "href": "https://api.spotify.com/v1/artists/6uothxMWeLWIhsGeF7cyo4",
                "id": "6uothxMWeLWIhsGeF7cyo4",
                "name": "Enya",
                "type": "artist",
                "uri": "spotify:artist:6uothxMWeLWIhsGeF7cyo4"
            }
        ],
        "available_markets": [
            "AD",
            "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 257760,
        "explicit": false,
        "external_ids": {
            "isrc": "GBAHT0108619"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/7LAJWSKK8JMIZAcblgUMS6"
        },
        "href": "https://api.spotify.com/v1/tracks/7LAJWSKK8JMIZAcblgUMS6",
        "id": "7LAJWSKK8JMIZAcblgUMS6",
        "is_local": false,
        "name": "May It Be",
        "popularity": 64,
        "preview_url": "https://p.scdn.co/mp3-preview/1c16e8f9f27460d600fbfcb75d067672bacb961e?cid=774b29d4f13844c495f206cafdad9c86",
        "track_number": 18,
        "type": "track",
        "uri": "spotify:track:7LAJWSKK8JMIZAcblgUMS6"
    },
    "currently_playing_type": "track",
    "is_playing": true
};

const currentlyPlayingExample = {
    "context": {
        "external_urls": {
            "spotify": "http://open.spotify.com/user/spotify/playlist/49znshcYJROspEqBoHg3Sv"
        },
        "href": "https://api.spotify.com/v1/users/spotify/playlists/49znshcYJROspEqBoHg3Sv",
        "type": "playlist",
        "uri": "spotify:user:spotify:playlist:49znshcYJROspEqBoHg3Sv"
    },
    "timestamp": 1490252122574,
    "progress_ms": 44272,
    "is_playing": true,
    "currently_playing_type": "track",
    "item": {
        "album": {
            "album_type": "album",
            "external_urls": {
                "spotify": "https://open.spotify.com/album/6TJmQnO44YE5BtTxH8pop1"
            },
            "href": "https://api.spotify.com/v1/albums/6TJmQnO44YE5BtTxH8pop1",
            "id": "6TJmQnO44YE5BtTxH8pop1",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/8e13218039f81b000553e25522a7f0d7a0600f2e",
                    "width": 629
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/8c1e066b5d1045038437d92815d49987f519e44f",
                    "width": 295
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/d49268a8fc0768084f4750cf1647709e89a27172",
                    "width": 63
                }
            ],
            "name": "Hot Fuss",
            "type": "album",
            "uri": "spotify:album:6TJmQnO44YE5BtTxH8pop1"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu"
                },
                "href": "https://api.spotify.com/v1/artists/0C0XlULifJtAgn6ZNCW2eu",
                "id": "0C0XlULifJtAgn6ZNCW2eu",
                "name": "The Killers",
                "type": "artist",
                "uri": "spotify:artist:0C0XlULifJtAgn6ZNCW2eu"
            }
        ],
        "available_markets": [
            "AD",
            "AR",
            "TW",
            "UY"
        ],
        "disc_number": 1,
        "duration_ms": 222075,
        "explicit": false,
        "external_ids": {
            "isrc": "USIR20400274"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/0eGsygTp906u18L0Oimnem"
        },
        "href": "https://api.spotify.com/v1/tracks/0eGsygTp906u18L0Oimnem",
        "id": "0eGsygTp906u18L0Oimnem",
        "name": "Mr. Brightside",
        "popularity": 0,
        "preview_url": "http://d318706lgtcm8e.cloudfront.net/mp3-preview/f454c8224828e21fa146af84916fd22cb89cedc6",
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:0eGsygTp906u18L0Oimnem"
    }
};

export type Device = typeof deviceExample;
export type User = typeof userExample;
export type Player = typeof playerExample;
export type currentlyPlaying = typeof currentlyPlayingExample;