import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Massage(prop) {
  
  return (
    <div>
      <Snackbar open={prop.open}>
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {prop.alertMsg}
        </Alert>
      </Snackbar>
    </div>
  );
}
