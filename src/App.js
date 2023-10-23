
import "./App.css";
import React, { useState } from 'react';
import { AppBar, Button, Container, TextField, Toolbar, Typography, Paper } from '@mui/material';


function App() {
  const [reminders, setReminders] = useState([
    {"title": "Appointment Reminder", "content": "Don't forget your dentist appointment tomorrow at 2 PM."},
    {"title": "Deadline Reminder", "content": "The project is due in 3 days."},
    {"title": "Medication Reminder", "content": "Don't forget to take your medication after lunch."},
    {"title": "Meeting Reminder", "content": "Team meeting in 1 hour."},
    {"title": "Birthday Reminder", "content": "Don't forget to wish Ann a happy birthday tomorrow."},
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingReminder, setEditingReminder] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreateReminder = () => {
    setShowForm(true);
    setTitle('');
    setContent('');
    setEditingReminder(null);
  };

  const handleEditReminder = (reminder) => {
    setShowForm(true);
    setTitle(reminder.title);
    setContent(reminder.content);
    setEditingReminder(reminder);
    const updatedReminders = reminders.filter((r) => r !== reminder);
    setReminders(updatedReminders);
  };
  
  const handleSaveReminder = () => {
    if (!title || !content) return;
  
    const newReminder = { title, content };
  
    if (editingReminder) {
      setReminders([...reminders, newReminder]);
    } else {
      setReminders([...reminders, newReminder]);
    }
  
    setShowForm(false);
    setTitle('');
    setContent('');
    setEditingReminder(null);
  };
  

  const handleDeleteReminder = (reminder) => {
    const updatedReminders = reminders.filter((r) => r !== reminder);
    setReminders(updatedReminders);
  };

  return (
    <div className="App">
      <AppBar position="static">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">
          Reminders App
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <img 
            src="./bell.png"
            style={{ height: '40px', width: 'auto' }}
          />
        </div>
          <Button
            className="create-button"
            variant="contained"
            onClick={handleCreateReminder}
          >
            Create Reminder
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        {showForm && (
          <Paper className="reminder-card">
            <TextField
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              fullWidth
            />
            <TextField
              label="Content"
              multiline
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="reminder-content"
              required
              fullWidth
            />
            <Button
              className="action-button"
              variant="contained"
              onClick={handleSaveReminder}
              style={{ marginRight: '10px', marginTop: '10px' }}
            >
              Save
            </Button>
            <Button
              className="cancel-button"
              variant="contained"
              onClick={() => setShowForm(false)}
              style={{marginTop: '10px' }}
            >
              Cancel
            </Button>
          </Paper>
        )}
        {reminders.map((reminder, index) => (
          <div className="reminder-card" key={index}>
            <div className="reminder-title">{reminder.title}</div>
            <div className="reminder-content">{reminder.content}</div>
            <div style={{ marginTop: '10px' }}>
              <Button
                className="action-button"
                variant="contained"
                onClick={() => handleEditReminder(reminder)}
                style={{ marginRight: '10px' }}
              >
                Edit
              </Button>
              <Button
                className="action-button cancel-button"
                variant="contained"
                onClick={() => handleDeleteReminder(reminder)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
  
}

export default App;
