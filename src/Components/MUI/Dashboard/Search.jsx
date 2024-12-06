import { alpha, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { MuiInputBase } from "../../../MUIComponents/Mui";
import { useTheme } from "@mui/material";

export const Search = () => {
  const theme = useTheme();
  const Search = styled("div")(({ theme }) => ({
    position: "relative",

    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.07),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.15),
    },
    "&:focus": {
      backgroundColor: alpha(theme.palette.common.black, 0.9),
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: "auto",
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(-1),
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 0.5),
    },
  }));

  const StyledInputBase = styled(MuiInputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      // transition: theme.transitions.create('width'),
      transition: "all .3s ease-out",
      width: "100%",
      [theme.breakpoints.down("md")]: {
        paddingLeft: `calc(1em + ${theme.spacing(0.5)})`,
        "&::placeholder": {
          fontSize: "small",
          padding: `calc(1em + ${theme.spacing(0.1)})`,
        },
        padding: theme.spacing(1, 1, 1, 1),
      },
      [theme.breakpoints.up("md")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
          boxShadow: "inset 0 0 0 1px 	#808080",
          borderRadius: "5px",
        },
      },
    },
  }));
  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon
            sx={{
              [theme.breakpoints.down("md")]: {
                width: "16px",
              },
            }}
          />
        </SearchIconWrapper>
        <StyledInputBase placeholder="Search…" />
      </Search>
    </>
  );
};
