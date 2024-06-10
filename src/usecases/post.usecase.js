const createError = require("http-errors");
const Post = require ("../models/post.models");

async function create(postData) {
    const newPost = await Post.create(postData);
    return newPost;
}

async function getAll() {
    const allPost = await Post.find().populate("user");
    return allPost;
}

async function getByTittle() {
    const query = { tittle: { $regex: tittle, $options: "i"} };
    const getByTittle = await Post.find(query).populate("user");
    return getByTittle;
}

async function updateById(id, newPostData) {
    const ogUser = await Post.findById(id);
    newPostData.user = ogUser.user;
    newPostData.updated_at = new Date();
    const updatePost = await Post.findByIdAndUpdate(id, newPostData,{
        new: true,
    })
    return updatePost
}

async function getById (id) {
    const post = await Post.findById(id);
    return post;
}

async function deleteById (idPost, idUserPost, idUserActive) {
    if (idUserPost != idUserActive) throw createError(403, "The user is not the creator of this post");


    const postDelete = await Post.findByIdAndDelete(idPost)
    return postDelete;
}

module.exports = {
    create,
    getAll,
    getById,
    getByTittle,
    deleteById,
    updateById,
}