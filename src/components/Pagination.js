function Pagination({pageNum, setPageNumber, isLoading}){
    const isPrevDisabled = pageNum === 1 || isLoading;
    const isNextDisabled = false;
    return(
        <div className="pagination">
            <div className="box">
                <button 
                    disabled={isPrevDisabled}
                    onClick={()=>{setPageNumber(prev => prev-1)}} 
                    className="material-icons"
                >chevron_left</button>
                <span>{pageNum}</span>
                <button 
                    disabled={isLoading}
                    onClick={()=>{setPageNumber(prev => prev+1)}}
                    className="material-icons"
                >chevron_right</button>
            </div>
        </div>
    )

}
export default Pagination;