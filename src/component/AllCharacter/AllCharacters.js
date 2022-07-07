
import axios from 'axios';
import CharacterCard from '../CharacterCard/CharacterCard';
import Header from '../Header/Header';
import { useEffect, useState } from "react";
import { decrement, increment } from '../pageCount';
import { useDispatch } from 'react-redux';
import { Button, CircularProgress, Box } from "@mui/material";

const AllCharacters = ({ offset }) => {

  const dispatch = useDispatch()
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      const response = await axios(`${process.env.REACT_APP_BASE_URL}/characters?limit=30&offset=${offset}&ts=1&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_HASH}`);
      setData(response.data.data.results);
      setLoading(false);
      window.scrollTo(0,0);
    }

    getUser();
  }, [offset]);



  return loading ?
    <Box className='loading'>
      <CircularProgress />
    </Box>
    :
    <>
      <Header head={"MARVEL DATABASE"}></Header>
      <div className='container'>
        {
          data.map(data => (<CharacterCard key={data.id} data={data} />))
        }
        <Button variant="contained" onClick={() => dispatch(decrement())}>Previous Page</Button>
        <Button variant="contained" onClick={() => dispatch(increment())}>Next Page</Button>

      </div>

    </>
}



export default AllCharacters