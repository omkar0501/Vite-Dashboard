import {
  ArrowBack,
  CallOutlined,
  ChevronRight,
  Home,
  MoreVert,
  VideocamOutlined,
} from "@mui/icons-material";
import {
  MuiCard,
  MuiIconButton,
  MuiTypography,
  MuiAvatar,
  MuiDivider,
  MuiBox,
} from "../../../MUIComponents/Mui";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../Contacts/SearchBar";
import SendBar from "./SendBar";
import DefaultChatPage from "./defaultChatPage";
import "../../Css/DashboardAll.css";
import { Box } from "@mui/material";
import {
  CurrentPage,
  CurrentPage2,
  ReturnHomeCard,
} from "../Common/ReturnHome";

const ChatComponent = () => {
  const [users, setUsers] = useState([]);
  const [chatUser, setChatUser] = useState("");
  const [messages, setMessages] = useState([]);
  const [defaultPg, setDefaultPg] = useState(true);
  const [state, setState] = useState("none");
  const token = localStorage.getItem("Token");
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      axios
        .get("https://node-js-view-point.onrender.com/api/users/", {})
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
      .get(`https://node-js-view-point.onrender.com/api/messages/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => setMessages(response.data))
      .catch((error) => console.error("Error fetching messages:", error));

    Scroll();
  }
  function Scroll() {
    const chatArea = document.querySelector(".chatarea");
    const scrollToBottomButton = document.getElementById(
      "scrollToBottomButton"
    );
    chatArea.scrollTop = chatArea.scrollHeight;
    scrollToBottomButton.addEventListener("click", () => {
      scrollToBottom();
    });
  }
  const handleMobileView = () => {
    setState(state === "none" ? "flex" : "none");
  };

  return (
    <div className="container-fluid">
      <ReturnHomeCard>
        <CurrentPage>Chats</CurrentPage>
        <CurrentPage2>Chat</CurrentPage2>
      </ReturnHomeCard>
      <div className="row d-flex">
        <Box
          className="col-md-4 col-xs-12"
          sx={{
            display: { xs: `${state == "none" ? "flex" : "none"}`, md: "flex" },
            flex: "column",
          }}
        >
          <MuiCard className=" flex-grow-1 chatbar">
            <MuiTypography className=" p-3 d-flex justify-content-between align-items-center mb-1">
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
            <div className="d-flex justify-content-center my-1 mx-0">
              <SearchBar />
            </div>
            <div className="p-3">
              {users
                .filter((user) => user.username !== username)
                .map((user, i) => (
                  <div
                    key={user._id}
                    onClick={() => handleSelectedUser(user._id)}
                  >
                    <div className="d-flex justify-content-between align-items-center mx-2">
                      <div className="d-flex gap-2" onClick={handleMobileView}>
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
            </div>
          </MuiCard>
        </Box>
        <Box
          className="col-md-8"
          sx={{
            minHeight: "100%",
            display: { xs: `${state}`, md: "flex" },
          }}
        >
          {defaultPg === true ? (
            <DefaultChatPage />
          ) : (
            <MuiCard
              className=" d-flex flex-column h-100"
              sx={{
                backgroundImage: `url('/DashboardImages/chatbg.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100%",
                width: "100%",
              }}
            >
              {chatUser && (
                <div className="sendbar p-md-2 p-lg-2">
                  <MuiTypography className="d-flex justify-content-between align-items-center mb-1">
                    <div className="d-flex align-items-center gap-md-2 gap-lg-2 gap-1">
                      <MuiIconButton
                        sx={{
                          px: 0,
                          "&:hover": { backgroundColor: "transparent" },
                          display: { xs: "block", md: "none" },
                        }}
                      >
                        <ArrowBack sx={{}} onClick={handleMobileView} />
                      </MuiIconButton>
                      <MuiAvatar src="\DashboardImages\male.jpg" />
                      <MuiTypography
                        className="fw-bold"
                        sx={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          fontSize: { xs: "small" },
                          ms: { xs: 1 },
                        }}
                      >
                        {chatUser.fullname}
                      </MuiTypography>
                    </div>
                    <div className="d-flex gap-lg-3 gap-0 justify-content-center align-items-center">
                      <MuiIconButton>
                        <CallOutlined color="primary" />
                      </MuiIconButton>
                      <MuiIconButton>
                        <VideocamOutlined color="secondary" />
                      </MuiIconButton>
                      <MuiIconButton>
                        <MoreVert />
                      </MuiIconButton>
                    </div>
                  </MuiTypography>
                </div>
              )}

              <MuiDivider
                sx={{ mb: { md: 2, xs: 0 }, borderBottom: "1px solid white" }}
              />

              <MuiBox
                className="flex-grow-1 pb-2 chatarea p-lg-3 p-1"
                sx={{ height: { xs: "380px", md: "300px" } }}
              >
                {messages.length > 0 ? (
                  messages.map((data, i) => (
                    <div key={i}>
                      {data.senderId !== chatUser._id ? (
                        <div className="d-flex justify-content-end">
                          <div className="msground px-2 mb-3">
                            <MuiTypography sx={{ mb: "1px" }} className="">
                              {data.message}
                            </MuiTypography>
                            <MuiTypography
                              sx={{ fontSize: "x-small" }}
                              className="text-muted d-flex justify-content-end user-select-none"
                            >
                              {new Date(data.createdAt).toLocaleTimeString()}
                            </MuiTypography>
                          </div>
                        </div>
                      ) : (
                        <div className="d-flex justify-content-start">
                          <div className="msground1 px-2 mb-3">
                            <MuiTypography sx={{ mb: "1px" }} className="">
                              {data.message}
                            </MuiTypography>
                            <MuiTypography
                              sx={{ fontSize: "x-small" }}
                              className="text-muted d-flex justify-content-end user-select-none"
                            >
                              {new Date(data.createdAt).toLocaleTimeString()}
                            </MuiTypography>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <MuiTypography className="d-flex justify-content-center align-items-center my-auto">
                    No messages yet
                  </MuiTypography>
                )}
              </MuiBox>
              <div className="position-sticky p-1 p-lg-3" style={{ bottom: 0 }}>
                <SendBar id={chatUser} onSend={handleSelectedUser} />
              </div>
            </MuiCard>
          )}
        </Box>
      </div>
    </div>
  );
};

export default ChatComponent;
