import path from 'path';
import express from 'express';

const app = express();

// Serve our static stuff like css
app.use(express.static(path.join(__dirname, 'public')));

// Send all requests to index.html
app.get('*', (req, res) => { res.sendFile(path.join(__dirname, 'public', 'index.html')); });

app.listen(process.env.PORT || 3000);
