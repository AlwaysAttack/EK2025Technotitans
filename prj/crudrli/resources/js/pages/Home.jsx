import { Link } from "@inertiajs/react";
export default function Home({posts}){
    console.log(posts);
    return(
        <>
      

        <a href="/" className="block title mt-[1000px]">{new Date().toLocaleTimeString}</a>
            <div>
                {posts.data.map(post=>(
                    <div key={post.id}>
                        <div>
                            <span>Создано</span>
                            <span>{
                                new Date(post.created_at).toLocaleTimeString()
                                }
                            </span>
                        </div>
                        <p>{post.body}</p>
                    </div>
                ))}
                <div className="py-12 px-4">
                    {posts.links.map(link=>(
                        <Link href={link.url} key={link.label}
                        dangerouslySetInnerHTML={{__html : link.label}}/>
                    ))}
                </div>
            </div>
        </>
    );
}