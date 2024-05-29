import "./post.css"

export default function Post (){
    return(
        <div className="post">
            <img  className="postImg" src="/images/post_1.jpg" alt="" />
            <div className="postInfo">
                <div className="postCasts">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                    <span className="postTitle">Lorem ipsum dolor sit amet 
                    </span>
                    <hr/>
                    <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in, animi obcaecati molestiae repudiandae mollitia. Nemo enim inventore modi numquam asperiores error quas aliquid atque iure, sunt minus, consectetur laudantium.
            </p>
        </div>
    )
}