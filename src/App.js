
import React,{ useState } from 'react';
import {AppBar, Button, Container, TextField, Toolbar,Typography, Paper} from'@mui/material';

function App(){
  const [reminders, setReminders] = useState([]);
  const [showForm, setShowForm] = useState (false);
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

    if (editingReminder){
      const updatedReminders = reminders.map((reminder)=> reminder === editingReminder ? {...reminder, title, content} : reminder);
      setReminders(updatedReminders);
    } else{
      setReminders([...reminders, {title, content}]);
    }

    setShowForm(false);
    setTitle('');
    setContent('');
    setEditingReminder(null);

  };

  const handleDeleteReminder = (reminder) => {
    const updatedReminders = reminders.filter((r) => r !==reminder);
    setReminders(updatedReminders);
  };

  return(
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Reminders App</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Button variant = "contained" onClick={handleCreateReminder}>
          Create Reminder
        </Button>
        {showForm && (
          <Paper style={{padding: '20px', marginTop: '20px'}}>
            <TextField
              label= "Title"
              value= {title}
              onChange= {(e) => setTitle(e.target.value)}
              required
            />
            <TextField
              label= "Content"
              multiline
              rows={4}
              value= {content}
              onChange= {(e) => setContent(e.target.value)}
              style={{marginTop: '10px'}}
              required
            />
            <Button variant='contained' onClick={handleSaveReminder} style={{marginRight: '10px'}}>
              Save 
            </Button>
            <Button variant='contained' onClick={()=> setShowForm(false)}>
              Cancle
            </Button>
          </Paper>
        )}
        <div>
          {reminders.map((reminder, index)=> (
            <Paper key = {index} style= {{padding: '20px', marginTop:'20px'}}>
              <Typography variant='h6'>{reminder.title}</Typography>
              <Typography>{reminder.content}</Typography>
              <Button onClick={() => handleEditReminder(reminder)}>Edit</Button>
              <Button onClick={() => handleDeleteReminder(reminder)}>Delete</Button>

            </Paper>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default App;