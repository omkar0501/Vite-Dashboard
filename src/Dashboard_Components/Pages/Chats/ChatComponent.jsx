import { ChevronRight, Home, MoreVert } from "@mui/icons-material";
import {
  MuiCard,
  MuiIconButton,
  MuiTypography,
  MuiAvatar,
  MuiDivider,
} from "../../../MUIComponents/Mui";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../Contacts/SearchBar";
import SendBar from "./SendBar";
import DefaultChatPage from "./defaultChatPage";

const ChatComponent = () => {
  const [users, setUsers] = useState([]);
  const [chatUser, setChatUser] = useState("");
  const [messages, setMessages] = useState([]);
  const [defaultPg, setDefaultPg] = useState(true);
  const token = localStorage.getItem("Token");
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:8081/api/users/", {})
        .then((response) => setUsers(response.data))
        .catch((error) => console.error("Error fetching users:", error));
    }
  }, [token]);

  const currentUser = users.find((user) => user.username === username);

  function handleSelectedUser(id) {
    setDefaultPg(false);
    setChatUser(users.find((user) => user._id === id));
    console.log(id);
    axios
      .get(`http://localhost:8081/api/messages/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => setMessages(response.data))
      .catch((error) => console.error("Error fetching messages:", error));
  }

  return (
    <div className="container-fluid">
      <MuiCard className="d-flex justify-content-between m-1 p-3 mb-3">
        <MuiTypography sx={{ fontSize: "medium", fontWeight: "bold" }}>
          Chats
        </MuiTypography>
        <MuiTypography sx={{ fontSize: "small", fontWeight: "bold" }}>
          <MuiIconButton onClick={() => navigate("/dashboard/home")}>
            <Home fontSize="small" sx={{ color: "#5e35b1" }} />{" "}
          </MuiIconButton>
          <ChevronRight sx={{ color: "gray" }} /> Chat
        </MuiTypography>
      </MuiCard>
      <div className="row">
        <div className="col-md-4 col-xs-12">
          <MuiCard className="p-3">
            <MuiTypography className="d-flex justify-content-between align-items-center mb-1">
              {currentUser && (
                <div className="d-flex align-items-center gap-2">
                  <MuiAvatar src="\DashboardImages\male.jpg" />
                  <MuiTypography className="fw-bold">
                    {currentUser.fullname}
                  </MuiTypography>
                </div>
              )}
              <MuiIconButton>
                <MoreVert />
              </MuiIconButton>
            </MuiTypography>
            <div className="d-flex justify-content-center my-3 mx-0">
              <SearchBar />
            </div>
            {users
              .filter((user) => user.username !== username)
              .map((user, i) => (
                <div
                  key={user._id}
                  onClick={() => handleSelectedUser(user._id)}
                >
                  <div className="d-flex justify-content-between align-items-center mx-2">
                    <div className="d-flex gap-2">
                      <MuiAvatar src="\DashboardImages\male.jpg" />
                      <MuiTypography className="fw-bold">
                        {user.fullname}
                      </MuiTypography>
                    </div>
                    <div>
                      <MuiTypography>...</MuiTypography>
                    </div>
                  </div>
                  <MuiDivider
                    sx={{
                      my: 2,
                      borderBottom: "1px solid",
                    }}
                  />
                </div>
              ))}
          </MuiCard>
        </div>
        <div className="col-8 flex-column" style={{ minHeight: "100%" }}>
          {defaultPg === true ? (
            <DefaultChatPage />
          ) : (
            <MuiCard className="p-3">
              {chatUser && (
                <MuiTypography className="d-flex justify-content-between align-items-center mb-1">
                  <div className="d-flex align-items-center gap-2">
                    <MuiAvatar src="\DashboardImages\male.jpg" />
                    <MuiTypography className="fw-bold">
                      {chatUser.fullname}
                    </MuiTypography>
                  </div>
                  <MuiIconButton>
                    <MoreVert />
                  </MuiIconButton>
                </MuiTypography>
              )}
              <MuiDivider
                sx={{
                  my: 2,
                  borderBottom: "1px solid",
                }}
              />
              <div className="">
                {messages.length > 0 ? (
                  messages.map((data, i) => (
                    <div key={i} className="">
                      {data.senderId != chatUser._id ? (
                        <div className="">
                          <MuiTypography className="d-flex justify-content-end">
                            {data.message}
                          </MuiTypography>
                          <MuiTypography
                            sx={{ fontSize: "x-small" }}
                            className="text-muted d-flex justify-content-end"
                          >
                            {new Date(data.createdAt).toLocaleString()}
                          </MuiTypography>
                        </div>
                      ) : (
                        <div>
                          <MuiTypography className="d-flex justify-content-start">
                            {data.message}
                          </MuiTypography>
                          <MuiTypography
                            sx={{ fontSize: "x-small" }}
                            className="text-muted d-flex justify-content-start"
                          >
                            {new Date(data.createdAt).toLocaleString()}
                          </MuiTypography>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <MuiTypography className="flex-1">
                    No messages yet
                  </MuiTypography>
                )}
              </div>
              <SendBar id={chatUser} onSend={handleSelectedUser} />
            </MuiCard>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
