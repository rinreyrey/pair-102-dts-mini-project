import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
// import Logom from '../assets/logom.svg';
import { useGetMovieGenreQuery } from '../services/TMDBAPI';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Link } from 'react-router-dom';

export default function DetailMovieContainer({dataprop}) {
    const { data, error, isLoading } = useGetMovieGenreQuery();
    if(dataprop.overview.length>200){ var desc = `${dataprop.overview.slice(0, 200)}....`}
    else {  desc = dataprop.overview}
    return (
        <>
            <Box sx={{display: 'flex',justifyContent:'space-between',alignItems:'center',height:'56.25vw',backgroundPosition: 'cover',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',backgroundImage:`url("https://image.tmdb.org/t/p/original${dataprop.poster}")`}}>
                <Box className='main-carousel__item' sx={{flexBasis:'45%',marginTop:0}}>
                    <Box sx={{display:'flex',flexDirection:'column',gap:'0.2em'}}>
                        <Typography component="div" variant="h4" style={{color:"white"}}>{dataprop.title}</Typography>
                        <div style={{display:'flex',gap:'0.5em'}}>
                            <Typography variant="body2" style={{color:"white"}}>{dataprop.language}</Typography>
                            <Typography variant="body2" style={{color:"white"}}>{error?'':isLoading?'':data?(data.genres.map((item)=>{
                                if(item.id===dataprop.genre){
                                    return item.name;
                                }
                                return null;
                            })):null}</Typography>    
                        </div>   
                        <Typography variant='body2' style={{color:"white"}}>{desc}</Typography>
                        <div style={{display:'flex',gap:'10px',marginTop:'10px'}}>
                            <Link to={`/movie/${dataprop.id}/play`}><Button variant="contained"><PlayArrowIcon style={{marginRight:'7px'}}></PlayArrowIcon>Play</Button></Link>
                            <Button variant="outline" sx={{ "&.MuiButton-outline": {
    backgroundColor: "hsla(209.84, 78.72%, 46.08%, 0.50)",
    color:"white"
  }}}><InfoOutlinedIcon style={{marginRight:'7px'}}></InfoOutlinedIcon>More information</Button>
                        </div>
                    </Box>
                </Box>
            </Box>
            <Box className='main-carousel__item'>
            <Typography variant='h6'>Description :</Typography>
            <Typography variant='body1'>{dataprop.overview}</Typography>
            </Box>

        </>
    )
}