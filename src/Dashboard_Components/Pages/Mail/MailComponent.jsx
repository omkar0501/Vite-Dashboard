import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  CurrentPage,
  CurrentPage2,
  ReturnHomeCard,
} from "../Common/ReturnHome";

const messages = [
  {
    id: 1,
    sender: "John Doe",
    subject: "Meeting Reminder",
    message: "Don’t forget the team meeting tomorrow at 10 AM.",
    avatar: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    sender: "Jane Smith",
    subject: "Project Update",
    message: "The project deadline has been extended by a week.",
    avatar: "https://via.placeholder.com/40",
  },
  {
    id: 3,
    sender: "Mark Wilson",
    subject: "Feedback Request",
    message: "Please review the new design and share your feedback.",
    avatar: "https://via.placeholder.com/40",
  },
];

const MailComponent = () => {
  return (
    <div className="contsiner-fliud">
      <ReturnHomeCard>
        <CurrentPage>Mail</CurrentPage>
        <CurrentPage2>Mail</CurrentPage2>
      </ReturnHomeCard>
      <Card sx={{ width: "100%", borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            <EmailIcon sx={{ mr: 1 }} /> Inbox
          </Typography>
          <List>
            {messages.map((mail) => (
              <React.Fragment key={mail.id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar src={mail.avatar} alt={mail.sender} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={mail.subject}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {mail.sender}
                        </Typography>
                        {` — ${mail.message}`}
                      </React.Fragment>
                    }
                  />
                  <IconButton aria-label="options">
                    <MoreVertIcon />
                  </IconButton>
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            ))}
          </List>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button size="small" color="primary">
            View All
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default MailComponent;
