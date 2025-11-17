import { useEffect, useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { blogList } from "@/blogList";

const BlogList = () => {
    const [items, setItems] = useState()

    const blogs = blogList

    return ( <div className="flex flex-row gap-3">
        {blogs.map((blog) => (
                  <Card key={blog.id} className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
            </CardHeader>
            <CardDescription>
                <img src={blog.featuredImage} alt={blog.category} />
            </CardDescription>
        </Card>  
        ))}
    </div> );
}
 
export default BlogList;