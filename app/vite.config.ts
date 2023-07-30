import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    // Windowsだと以下の記述がないと動かないので
    watch: {
      usePolling: true,
    },
  },
  plugins: [react()],
});
