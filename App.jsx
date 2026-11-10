import { Posts } from "../lib/posts";
import BlogIndex from "../pages/BlogIndex";
import Login from "./login";

export default function App(){
    return(
        <div>
            <BlogIndex />
            <Login />
        </div>
    )
}