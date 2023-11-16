import axios from 'axios';
import { API_URL_GOOGLE } from '../config/api';

export const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

export const MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY;

export const loginFromGoogleService = async ( data ) =>{
  try {
    const res =  await axios.post(API_URL_GOOGLE,data)
    return res.data
  } catch ({ message } ) {
    return {}    
  }
}
