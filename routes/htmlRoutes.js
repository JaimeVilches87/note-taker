const path = require('path');
const router = require('express').Router();

// *** Server send ./public/index.html back to the client *** // 
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  
/// *** Serve route to the notes.html  *** //
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// Export this routes to be used by serer.js main script
  
module.exports = router;