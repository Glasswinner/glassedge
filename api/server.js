// server.js
import express from 'express';
import cors from 'cors';

// Import route handlers
import handlerPrompt from './generatePrompt.js';
import handlerTranscript from './transcriptbackend.js';
import handlerGrade from './grade.js';
import handlerUpload from './uploadToCloudinary.js';

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.post('/api/generatePrompt', handlerPrompt);
app.post('/api/transcriptbackend', handlerTranscript);
app.post('/api/grade', handlerGrade);
app.post('/api/uploadToCloudinary', handlerUpload);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Express server running on port ${PORT}`);
});
