import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'src', 'index.html')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});