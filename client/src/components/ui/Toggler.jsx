import React from 'react';
import {Box} from "@mui/material";

export default function Toggler({darkMode, handleClick}) {
   return (
      <Box fontSize={'1.5rem'} sx={{cursor: 'pointer', ":hover": {transform: 'translateY(-3px)', transition: 'all 250ms ease'}}}>
         {
            darkMode ?
               <span data-testid="handleClick" onClick={handleClick} aria-label="Full Moon" role="img">🌕</span>
               :
               <span data-testid="handleClick" onClick={handleClick} aria-label="New Moon" role="img">🌑</span>
         }
      </Box>
   )
};
