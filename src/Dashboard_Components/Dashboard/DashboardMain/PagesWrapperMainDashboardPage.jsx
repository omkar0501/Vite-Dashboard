import { styled } from "@mui/material";
import { propTypes } from "react-bootstrap/esm/Image";

export const PageWarpperMainDashboardPage = (props) => {
  const drawerWidth = 240;

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme }) => ({
      // position:'relative',
      flexGrow: 1,
      padding: theme.spacing(1), // padding for all childs of dashboard
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `${drawerWidth}px`,
      [theme.breakpoints.down("md")]: {
        margin: "65px 0px 0px 0px",
        padding: "0px",
      },
      variants: [
        {
          transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          props: ({ open }) => open,
          style: {
            transition: theme.transitions.create("margin", {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
          },
        },
      ],
    })
  );

  return (
    <>
      <Main
        sx={{
          backgroundColor: "#EEF2F6",

          // borderRadius: "20px 20px 20px 20px",
          mt: "65px",
          // height: "100vh",
          width: `calc(100% - ${drawerWidth})`,

          // width: "160vh",
          overflow: "hidden",
        }}
        {...props}
      >
        {props.children}
      </Main>
    </>
  );
};

PageWarpperMainDashboardPage.propTypes = {
  children: propTypes.any,
};

export default PageWarpperMainDashboardPage;
