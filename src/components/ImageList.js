import { calculateTimeDifference } from "../utils/timedifference";

function ImageList({data,apiResponse}){
    if(apiResponse === 0 || apiResponse === 1){
        return <h2>loading......</h2>
    }
    return(
        <div className="image-list">
            {
                data?.results?.map((Image)=>{
                    return (
                        <div className="image-card">
                        <img src={Image.urls.regular}/>
                        <div className="likes" >
                            <span className="material-icons">favorite</span>
                            <span className="">{Image.likes}</span>
                        </div>
                        <p className="title">{ Image?.breadcrumbs[1]?.title??Image.description}</p>
                        <span>{calculateTimeDifference(Image.updated_at)}</span>
                        </div>
                        )
                    })
            }
        </div>
    )
}
export default ImageList;