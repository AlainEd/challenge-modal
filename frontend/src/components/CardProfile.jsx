import React from 'react'
import { Card, CardContent, CardHeader, CardActions, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';


const CardProfile = (props) => {

    return (
        <div className='my-2 w-full pb-3' key={props.id}>
            <div className='grid justify-start'>
                <Card sx={{ width: 280, borderRadius: 3, backgroundColor: '#F6F7F9' }}>
                    <CardHeader
                        titleTypographyProps={{ fontSize: 15, fontWeight: 700 }}
                        title={
                            <div className='grid'>
                                <BrightnessLowIcon sx={{ color: '#F8D014' }} />
                                <span className='text-[#b9c0cc]'>{props.name}</span>
                            </div>
                        }

                    />
                    <CardContent sx={{ pt: 0 }}>
                        <Typography variant="body2" color="text.secondary">
                            {props.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <div className='flex justify-between w-full px-4'>
                            <Button
                                sx={{ color: '#3a3c3b', borderColor: '#3a3c3b', fontSize: '10px', borderRadius: 3 }}
                                variant='outlined'
                                size="small"
                            >
                                See profile
                            </Button>
                            <Button
                                sx={{ backgroundColor: '#3a3c3b', fontSize: '10px', borderRadius: 3 }}
                                size="small"
                                variant='contained'
                            >
                                Generate profile
                            </Button>
                        </div>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default CardProfile