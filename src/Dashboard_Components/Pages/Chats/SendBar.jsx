import { Send } from "@mui/icons-material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AttachmentIcon from "@mui/icons-material/Attachment";
import { MuiTextField, MuiIconButton } from "../../../MUIComponents/Mui";
import { useState } from "react";
import axios from "axios";
const SendBar = ({ id, onSend }) => {
  const token = localStorage.getItem("Token");
  const [sendMessage, setSendMessage] = useState("");

  const SendMsg = () => {
    if (sendMessage != "") {
      axios
        .post(
          `https://node-js-view-point.onrender.com/api/messages/sendmessage/${id._id}`,
          {
            message: sendMessage,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          response.status == 201 ? setSendMessage("") : "";
        });
      onSend(`${id._id}`);
    }
  };
  return (
    <div className="d-flex justify-content-between align-items-center border rounded-3 p-lg-2 p-md-2 px-0 py-1 mt-0 mt-md-2 mt-lg-2 sendbar">
      <MuiIconButton
        // onClick={() => SendMsg()}
        sx={{
          borderRadius: "50%",
          padding: "8px",
        }}
      >
        <SentimentSatisfiedAltIcon color="primary" />
      </MuiIconButton>
      <MuiTextField
        sx={{ width: "85%", marginRight: { md: "10px", xs: "0px" } }}
        placeholder="Type a message..."
        value={sendMessage}
        onChange={(e) => setSendMessage(e.target.value)}
        variant="outlined"
        size="small"
        InputProps={{
          sx: {
            borderRadius: "20px",
            paddingLeft: "10px",
            paddingRight: "10px",
          },
        }}
      />
      <MuiIconButton
        // onClick={() => SendMsg()}
        sx={{
          borderRadius: "50%",
          padding: "8px",
        }}
      >
        <AttachmentIcon color="dark" />
      </MuiIconButton>
      <MuiIconButton
        onClick={() => SendMsg()}
        sx={{
          borderRadius: "50%",
          padding: "8px",
        }}
      >
        <Send color="primary" />
      </MuiIconButton>
    </div>
  );
};

export default SendBar;
