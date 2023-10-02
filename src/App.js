
import "./App.css";
import ReminderCard from './ReminderCard';
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
  };

  const handleSaveReminder = () => {
    if (!title || !content) return;

    if (editingReminder) {
      const updatedReminders = reminders.map((reminder) => reminder === editingReminder ? {...reminder, title, content} : reminder);
      setReminders(updatedReminders);
    } else {
      setReminders([...reminders, { title, content }]);
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
        <Toolbar>
          <Typography variant="h6">Reminders App</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Button
          className="create-button"
          variant="contained"
          onClick={handleCreateReminder}
        >
          Create Reminder
        </Button>
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
            >
              Save
            </Button>
            <Button
              className="cancel-button"
              variant="contained"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </Button>
          </Paper>
        )}
        <div>
          {reminders.map((reminder, index) => (
            <div className="reminder-card" key={index}>
              <div className="reminder-title">{reminder.title}</div>
              <div className="reminder-content">{reminder.content}</div>
              <div>
                <Button
                  className="action-button"
                  variant="contained"
                  onClick={() => handleEditReminder(reminder)}
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
        </div>
      </Container>
    </div>
  );
}

export default App;
