import { styled } from "@mui/material";
import { propTypes } from "react-bootstrap/esm/Image";

export const DashboardMain = (props) => {
  const drawerWidth = 240;

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme }) => ({
      // position:'relative',
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `${drawerWidth}px`,
      [theme.breakpoints.down("up")]: {},
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
      <Main {...props}>{props.children}</Main>
    </>
  );
};

DashboardMain.propTypes = {
  children: propTypes.any,
};
