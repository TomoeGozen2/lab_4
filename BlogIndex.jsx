import { Posts } from "./posts";

export default function BlogIndex(){
      const blogPosts = Posts.map(blogPost => <li>{blogPost.id} {blogPost.title}
    {blogPost.content}</li>)
    
return(<ul>{blogPosts}</ul>)
}
    
