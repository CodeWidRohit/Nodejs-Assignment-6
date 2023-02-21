const mongooose = require('mongoose');
const blogSchema = new mongooose.Schema({
    // Your code goes here
    topic:string,
    description:string,
    posted_at:timestamp,
    posted_by:string
    
})

const Blog = mongooose.model('blogs', blogSchema);

module.exports = Blog;