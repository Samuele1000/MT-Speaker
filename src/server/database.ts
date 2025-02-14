import { Database } from 'some-database-library'; // Replace with actual database library import
import { Music, Speaker, UserAccess } from '../types';

const db = new Database('your-database-connection-string'); // Replace with actual connection string

export const saveMusic = async (music: Music): Promise<void> => {
    await db.insert('music_library', music);
};

export const getMusicLibrary = async (): Promise<Music[]> => {
    return await db.query<Music>('SELECT * FROM music_library');
};

export const saveSpeaker = async (speaker: Speaker): Promise<void> => {
    await db.insert('speakers', speaker);
};

export const getSpeakers = async (): Promise<Speaker[]> => {
    return await db.query<Speaker>('SELECT * FROM speakers');
};

export const saveUserAccess = async (access: UserAccess): Promise<void> => {
    await db.insert('user_access', access);
};

export const getUserAccess = async (speakerId: string): Promise<UserAccess[]> => {
    return await db.query<UserAccess>('SELECT * FROM user_access WHERE speaker_id = ?', [speakerId]);
};