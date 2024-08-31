import React from 'react';

import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { Box, Button } from '@mui/material';

import './index.scss';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

export const EventCard: React.FC<{}> = ({ }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Box sx={{ /*maxWidth: 400*/ }} className='card'>

            <Box className='scene'>
                <Box className='scene-flip'>
                    <Box className='flip-front'></Box>
                    <Box className='flip-back'>
                        <Button variant="outlined" className='btn'> BOTAO </Button>
                    </Box>
                </Box>
            </Box>

            <Box className='card-text'>
                <Typography component='span'>
                    Aqui uma descricao
                </Typography>
            </Box>
        </Box>
    );
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

{/*
                        <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                        stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                </CardContent>
            </Collapse>
            */}