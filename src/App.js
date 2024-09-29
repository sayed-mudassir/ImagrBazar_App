import Search from './components/search.js';
import ImageList from './components/ImageList.js';
import Pagination from './components/Pagination.js';
import './app.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const client_id = "1l6cMqf1zGWg5KUibQDD8twh7KITnaey-RAZrRntBDA";

function App() {
  const [query,setQuery] = useState('nature');
  const [pageNumber,setPageNumber] = useState(1);
  const [response, setResponse] = useState({apiStatus: 0, data: null});

  const isLoading = response.apiStatus === 1;

  const onSearch = ()=>{
    if(pageNumber === 1) fetchData();
    setPageNumber(1);
  }

  const fetchData = async ()=>{
    try{
      setResponse({...response,apiStatus:1});
      const serverResponse = await axios(`https://api.unsplash.com/search/photos?page=${pageNumber}
        &query=${query}&client_id=${client_id}`);
      setResponse({data: serverResponse.data,apiStatus:2});

    }
    catch(err){
      setResponse({...response,apiStatus:3})
    }
  }

  useEffect(()=>{
    fetchData();
  },[pageNumber])
  // const updatePageNumber = (newPageNum)=>{

  // }
  return ( 
    <div className='app'>
    <Search 
      isLoading={isLoading}
      onChangeText={(e)=>{setQuery(e.target.value)}} 
      onSearch={onSearch} />
    <ImageList data={response.data} apiStatus={response.apiStatus}/>
    <Pagination 
        pageNum={pageNumber} 
        setPageNumber={setPageNumber} 
        isLoading = {response.apiStatus === 1} />
    </div>
  );
}
export default App;
