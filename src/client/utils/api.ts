import axios from 'axios';
import { Music, Speaker } from '../../types';

const API_BASE_URL = 'http://localhost:3000/api'; // Adjust the base URL as needed

export const fetchMusicLibrary = async (): Promise<Music[]> => {
    const response = await axios.get(`${API_BASE_URL}/music`);
    return response.data;
};

export const addSongToLibrary = async (youtubeUrl: string): Promise<Music> => {
    const response = await axios.post(`${API_BASE_URL}/music`, { url: youtubeUrl });
    return response.data;
};

export const fetchSpeakerStates = async (): Promise<Speaker[]> => {
    const response = await axios.get(`${API_BASE_URL}/speakers`);
    return response.data;
};

export const updateSpeakerState = async (speakerId: string, state: any): Promise<void> => {
    await axios.put(`${API_BASE_URL}/speakers/${speakerId}`, { state });
};

export const removeSpeaker = async (speakerId: string): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/speakers/${speakerId}`);
};