import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

/* Endereços para cada emulador/simulador:
 ** Genymotion:              http://10.0.3.2:3333/
 ** Emulador Android Studio: http://10.0.2.2:3333/
 ** Simulador IOS:           http://localhost:3333/
 */

const api = axios.create({
  baseURL: 'https://e9751383.ngrok.io/',
});

api.interceptors.request.use(async config => {
  try {
    const token = await AsyncStorage.getItem('@AirBnbApp:token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (err) {
    console.warn(err.message);
  }
});

export default api;
