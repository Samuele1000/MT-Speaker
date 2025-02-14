export interface Music {
    id: string;
    title: string;
    artist: string;
    url: string;
}

export interface Speaker {
    id: string;
    position: { x: number; y: number; z: number };
    currentSong: Music | null;
    accessList: string[];
}

export interface UserAccess {
    userId: string;
    hasAccess: boolean;
}