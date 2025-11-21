import { io } from 'socket.io-client';

// 🛠️ FIX: Dynamic URL Selection
// If we are on Vercel, use the Environment Variable. 
// If we are on a laptop, use localhost.
// Note: We remove '/api' because socket.io connects to the root, not the API route.
const BASE_URL = process.env.REACT_APP_API_URL 
  ? process.env.REACT_APP_API_URL.replace('/api', '') 
  : 'http://localhost:5001';

const socket = io(BASE_URL, {
    autoConnect: true, 
    reconnection: true,       
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
});

export default socket;