// import { useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Link } from "react-router-dom";
import { blogList } from "./blogList";

const Home = () => {
    //    const [items, setItems] = useState()

    const blogs = blogList
//    const navigate = useNavigate();


    return ( <div className="flex flex-row gap-3">
        {blogs.map((blog) => (
<Card key={blog.id} className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
            </CardHeader>
            <CardDescription>
                <Link to={`/details/${blog.slug}`}>
                <img src={blog.featuredImage} alt={blog.category} />
                </Link>
            </CardDescription>
        </Card>  
        ))}
    </div> );

}
 
export default Home;