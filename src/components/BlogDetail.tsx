import { blogList } from "@/blogList";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
    const {slug} = useParams()
    console.log(slug, "slugs")
    const blog = blogList.find((b) => b.slug === slug)
    if(!blog) {
        return <h1 className="flex justify-center font-bold text-red-600">No blog found!</h1>
    }
    return ( 
    <div className="flex flex-col m-4 mt-16">
        <h1 className="flex justify-center mb-4 font-bold text-gray-500">{blog.title}</h1>
        <div className="flex flex-row justify-between gap-8">
            <img src={blog.featuredImage} alt={blog.author.name} className="h-100 w-150 object-cover" />
            {/* profile details  */}
            <div className="flex flex-col">
                <div className="flex flex-row gap-4">
                <Avatar>
                    <AvatarImage className="rounded-full h-20 w-20" src={blog.author.avatar}/>
                </Avatar>
               <p className="text-2xl text-gray-600">{blog.author.name}</p>
                </div>
               <div>Bio: <span className="text-gray-400">{blog.author.bio}</span></div>
               <div>Twitter <span className="text-blue-600">{blog.author.twitter}</span></div>
               <div>Category: <span className="text-gray-600">{blog.category}</span></div>
               <div>Tags: <span className="text-gray-600">{blog.tags}</span></div>
               <div>Puublished Date: <span className="text-gray-600">{blog.publishedDate}</span></div>
            </div>
        </div>
        <div className="flex-col mt-4">
            <p>{blog.description}</p>
        </div>
    </div> );
}
 
export default BlogDetail;