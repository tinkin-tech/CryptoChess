import React, { useState } from 'react';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const AlertComponent = (props: any) => {
  const { alertState, setAlertState } = props;
  return (
    <Snackbar
      open={alertState.open}
      autoHideDuration={6000}
      onClose={() => setAlertState({ ...alertState, open: false })}
    >
      <Alert
        onClose={() => setAlertState({ ...alertState, open: false })}
        severity={alertState.severity}
      >
        {alertState.message}
      </Alert>
    </Snackbar>
  );
};

export default AlertComponent;
