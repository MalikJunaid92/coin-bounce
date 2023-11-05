class BlogDetailsDTO {
  constructor(blog) {
    if (blog) {
      this._id = blog._id;
      this.content = blog.content;
      this.title = blog.title;
      this.photo = blog.photoPath;
      this.createdAt = blog.createdAt;
      this.authorName = blog.author.name;
      this.authorUsername = blog.author.username;
    }
    //  else {
    //   // Handle the case when 'blog' is null
    //   this._id = null;
    //   this.content = null;
    //   this.title = null;
    //   this.photo = null;
    //   this.createdAt = null;
    //   this.authorName = null;
    //   this.authorUsername = null;
    // }
  }
}

module.exports = BlogDetailsDTO;
