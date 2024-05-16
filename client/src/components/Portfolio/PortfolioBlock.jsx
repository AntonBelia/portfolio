import React from 'react';
import IconLink from "../ui/IconLink";
import {Box} from "@mui/material";

function PortfolioBlock({img, live, source, title}) {
    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} sx={{ margin: '30px' }} data-testid="portfolio-block">
            <Box component={'img'} src={img} alt={'mockup'}  />
            <h1 style={{fontSize: '2rem'}} data-testid="portfolio-block-title">{title}</h1>
            <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
                 alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
                {live &&
                    <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                        <IconLink link={live} title={'Demo'} icon={'fa-brands fa-chrome'}/>
                    </Box>}
                {source &&
                    <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                        <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
                    </Box>}
            </Box>
        </Box>
    );
}

export default PortfolioBlock;