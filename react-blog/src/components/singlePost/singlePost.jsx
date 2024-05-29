import "./singlePost.css"

export default function SinglePost() {
    return(
        <div className="SinglePost">
            <div className="singlePostWrapper">
                <img src="./images/singlepost.jpg  " alt="" className="singlePostImg" />
            </div>
            <h1 className="singlePostTittle">
                Lorem ipsum dolor sit amet consectetur.
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Suleiman</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis culpa sint maiores blanditiis facilis accusantium corrupti mollitia dolorem officia fugit sequi error aspernatur nemo officiis recusandae similique et, saepe consequatur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis culpa sint maiores blanditiis facilis accusantium corrupti mollitia dolorem officia fugit sequi error aspernatur nemo officiis recusandae similique et, saepe consequatur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis culpa sint maiores blanditiis facilis accusantium corrupti mollitia dolorem officia fugit sequi error aspernatur nemo officiis recusandae similique et, saepe consequatur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis culpa sint maiores blanditiis facilis accusantium corrupti mollitia dolorem officia fugit sequi error aspernatur nemo officiis recusandae similique et, saepe consequatur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis culpa sint maiores blanditiis facilis accusantium corrupti mollitia dolorem officia fugit sequi error aspernatur nemo officiis recusandae similique et, saepe consequatur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis culpa sint maiores blanditiis facilis accusantium corrupti mollitia dolorem officia fugit sequi error aspernatur nemo officiis recusandae similique et, saepe consequatur.
            </p>
        </div>
    )
}