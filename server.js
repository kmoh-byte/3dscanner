const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Health check endpoint for Railway
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy' });
});

// Serve the IPD measurement page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`IPD Measurement Server running on port ${PORT}`);
    console.log(`Visit: http://localhost:${PORT}`);
});
