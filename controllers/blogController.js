const Blog = require('../models/Blog');

exports.createBlog = async (req, res) => {
    try {
        const blog = new Blog({ ...req.body, author: req.user.id });
        await blog.save();
        res.status(201).json(blog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getBlogs = async (req, res) => {
    const blogs = await Blog.find().populate('author', 'name email');
    res.json(blogs);
};

exports.deleteBlog = async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.json({ message: 'Blog deleted' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};