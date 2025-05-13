const express = require('express');
const router = express.Router();

const mockUsers = [
    { id: 1, username: 'test1', token: 'token1' },
    { id: 2, username: 'test2', token: 'token2' }
];

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    const user = mockUsers.find(u => u.username === username);
    if (!user) {
        return res.status(401).json({ error: 'Neplatné prihlasovacie údaje' });
    }
    
    res.json({
        success: true,
        token: user.token,
        userId: user.id
    });
});

router.post('/connect-tiktok', (req, res) => {
    const { userId, tiktokToken } = req.body;
    
    if (!userId || !tiktokToken) {
        return res.status(400).json({ error: 'Chýbajúce údaje' });
    }
    
    res.json({
        success: true,
        message: 'Účet úspešne prepojený',
        tiktokUsername: 'tiktok_user_' + userId
    });
});

module.exports = router;