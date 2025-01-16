import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Grid,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

function Calender() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [eventText, setEventText] = useState("");

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const totalDays = getDaysInMonth(year, month);

    let days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<Box key={`empty-${i}`} sx={{ flex: 1 }}></Box>);
    }

    for (let day = 1; day <= totalDays; day++) {
      const eventDate = `${year}-${month + 1}-${day}`;
      const dayIndex = (firstDayOfMonth + day - 1) % 7;
      days.push(
        <Box
          key={day}
          sx={{
            padding: 2,
            mb: 0,
            // border: "1px solid rgb(230, 230, 231)",
            textAlign: "center",
            cursor: "pointer",
            color: `${dayIndex == 0 ? "red" : ""}`,
            bgcolor: events[eventDate]
              ? "hsl(271, 90.60%, 50.00%)"
              : "background.paper",
          }}
          onClick={() => openEventDialog(year, month, day)}
        >
          <Typography variant="body1">{day}</Typography>
          {events[eventDate] && (
            <Typography
              sx={{
                overflowX: "scroll",
                scrollbarWidth: "none",
                fontSize: "small",
              }}
            >
              {events[eventDate]}
            </Typography>
          )}
        </Box>
      );
    }

    return days;
  };

  const openEventDialog = (year, month, day) => {
    setSelectedDate(`${year}-${month + 1}-${day}`);
    setEventText(events[`${year}-${month + 1}-${day}`] || "");
    setOpenDialog(true);
  };

  const handleSaveEvent = () => {
    setEvents((prev) => ({ ...prev, [selectedDate]: eventText }));
    setOpenDialog(false);
  };

  const changeMonth = (direction) => {
    setCurrentDate(
      new Date(currentDate.setMonth(currentDate.getMonth() + direction))
    );
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mx: "auto",
        mt: 5,
        border: "2px solid #1976D2",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          maxWidth: 800,
          margin: "auto",
          py: 5,
          mx: { md: 5, xs: 1 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <IconButton onClick={() => changeMonth(-1)}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h5">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </Typography>
          <IconButton onClick={() => changeMonth(1)}>
            <ArrowForward />
          </IconButton>
        </Box>
        <Grid container spacing={1} sx={{ textAlign: "center" }}>
          {daysOfWeek.map((day) => (
            <Grid sx={{ fontWeight: "bold", mb: 1 }} item xs={1.7} key={day}>
              <Typography variant="h6" fontWeight="bold">
                {day}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Grid
          sx={{
            backgroundColor: "rgba(241, 241, 241, 0.83)",
            pb: 1,
          }}
          container
          spacing={1}
        >
          {renderCalendar().map((dayElement, index) => (
            <Grid item xs={1.7} key={index}>
              {dayElement}
            </Grid>
          ))}
        </Grid>

        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Add Event</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              label="Event Details"
              value={eventText}
              onChange={(e) => setEventText(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={() => setOpenDialog(false)}>
              Cancel
            </Button>
            <Button
              variant="outlined"
              onClick={handleSaveEvent}
              color="primary"
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}

export default Calender;
