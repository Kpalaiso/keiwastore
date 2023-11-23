import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

export default function AlertBox({openAlert,toggleOpenAlert,textContent}) {

  return (
    <div style={{ marginLeft:15, marginRight:15, marginTop:10 }}>
    <Box sx={{ width: '100%' }}>
      <Collapse in={openAlert}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                toggleOpenAlert();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
          severity="error"
        >
          {textContent}
        </Alert>
      </Collapse>
    </Box>
    </div>
  );
}