const express = require('express');
const { auth, roleCheck } = require('../middleware/authMiddleware');
const { createBlog, getBlogs, deleteBlog } = require('../controllers/blogController');
const router = express.Router();

router.post('/', auth, roleCheck(['admin']), createBlog);
router.get('/', auth, getBlogs);
router.delete('/:id', auth, roleCheck(['admin']), deleteBlog);

module.exports = router;