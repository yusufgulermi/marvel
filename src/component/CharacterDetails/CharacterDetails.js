import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from "react-router-dom"
import { Container, Typography, Button, Box, CircularProgress } from "@mui/material";
import Header from '../Header/Header';
import Comics from './Comics/Comics';

const CharacterDetails = () => {
  const [charData, setCharData] = useState([]);
  const [comicsData, setComicsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentID = useParams();


  useEffect(() => {

    const getUser1 = async () => {

      const response_comics = await axios(`${process.env.REACT_APP_BASE_URL}/characters/${currentID.id}/comics?dateRange=2005-01-01%2C2022-07-07&limit=10&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_HASH}`);
      setComicsData(response_comics.data.data.results)

      const response_char = await axios(`${process.env.REACT_APP_BASE_URL}/characters/${currentID.id}?apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_HASH}`);
      setCharData(response_char.data.data.results[0])
      setLoading(false)
    }

    getUser1()
  }, []);

  return loading ?
    <Box className='loading'>
      <CircularProgress />
    </Box>
    :
    <Container>
      <Header head={charData.name} />

      <div className='container-card'>
        <div className='content-card'>
          <div className='img-card'>
            <img src={charData.thumbnail.path + "." +charData.thumbnail.extension} alt="" className='img' />
          </div>
          <div className='text-card'>
            <Typography>{charData.description ==="" ? "NO DESCRIPTION FOUND!":charData.description}</Typography>
          </div>
        </div>
        <Header head={"Comics"} />

        <div className='container'>
          {comicsData=="" ? "NO COMICS FOUND!":
            comicsData.map(comicsData => (<Comics key={comicsData.id} comicsData={comicsData} />))
          }
        </div>

        <Link to="/marvel">
          <Button variant='contained'>HOME PAGE</Button>
        </Link>
      </div>


    </Container>
  
}

export default CharacterDetails