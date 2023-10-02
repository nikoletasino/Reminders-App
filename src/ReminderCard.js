import React from 'react';
import { Paper, Typography, Button } from '@mui/material';

function ReminderCard({ reminder, onEdit, onDelete }) {
  return (
    <Paper style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant='h6'>{reminder.title}</Typography>
      <Typography>{reminder.content}</Typography>
      <Button onClick={onEdit}>Edit</Button>
      <Button onClick={onDelete}>Delete</Button>
    </Paper>
  );
}

export default ReminderCard;
