import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="postContent">
            <div className="singlePostWrapper">
                
                <h1 className="singlePostTitle">
                    Titulo del articulo
                    
                </h1>
                <div className="singlePostInfo">
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pencil"></i>
                        <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                    <img className="singlePostImage" src="https://unsplash.it/id/0/1080/720" alt="" />
                    <span className="singlePostAuthor">Author: <b>Rola</b></span>
                    <span className="singlePostDate">1 hour Ago</span>
                </div>
                
                <p className="singlePostContent">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Impedit quas consequuntur nam sapiente nulla ex, facere voluptatum suscipit consectetur 
                    saepe facilis beatae mollitia architecto delectus veniam dicta maiores! 
                    Sed, aliquam?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Impedit quas consequuntur nam sapiente nulla ex, facere voluptatum suscipit consectetur 
                    saepe facilis beatae mollitia architecto delectus veniam dicta maiores! 
                    Sed, aliquam?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Impedit quas consequuntur nam sapiente nulla ex, facere voluptatum suscipit consectetur 
                    saepe facilis beatae mollitia architecto delectus veniam dicta maiores! 
                    Sed, aliquam?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Impedit quas consequuntur nam sapiente nulla ex, facere voluptatum suscipit consectetur 
                    saepe facilis beatae mollitia architecto delectus veniam dicta maiores! 
                    Sed, aliquam?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Impedit quas consequuntur nam sapiente nulla ex, facere voluptatum suscipit consectetur 
                    saepe facilis beatae mollitia architecto delectus veniam dicta maiores! 
                    Sed, aliquam?
                    </p>
            </div>
        </div>
    </div>
  )
}
