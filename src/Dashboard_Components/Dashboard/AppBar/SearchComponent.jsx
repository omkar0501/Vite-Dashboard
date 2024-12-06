import { styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { MuiIconButton, MuiInputBase } from "../../../MUIComponents/Mui";
import { useTheme } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";

const SearchComponent = () => {
  const theme = useTheme();
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "rgb(248, 250, 252)",
    border: "1px solid #d6d6c2",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "rgb(248, 250, 252)",
      border: "1.6px solid black",
    },
    "&:focus-within": {
      backgroundColor: "rgb(248, 250, 252)",
      border: "1.6px solid #3296f3",
    },
    marginRight: theme.spacing(1),
    marginLeft: 5,
    width: "60%",
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(-1),
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(1.5),
      width: "90%",
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

  const TuneIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 0.5),
    },
  }));

  const StyledInputBase = styled(MuiInputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%", // the input spans the full width
    "& .MuiInputBase-input": {
      padding: theme.spacing(1.5, 1.5, 1.5, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      paddingRight: `calc(1em + ${theme.spacing(4)})`,
      transition: "all .3s ease-out",
      width: "100%", // the input spans the full width
      [theme.breakpoints.down("md")]: {
        paddingLeft: `calc(1em + ${theme.spacing(0.5)})`,
        paddingRight: `calc(1em + ${theme.spacing(0.5)})`,
        "&::placeholder": {
          fontSize: "small",
          padding: `calc(1em + ${theme.spacing(0.1)})`,
        },
        padding: theme.spacing(1, 1, 1, 1),
      },
      [theme.breakpoints.up("md")]: {
        "&:focus": {
          width: "100%", // Ethe input spans the full width on focus
          border: "1px solid #3296f3",
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
              color: "rgb(18, 25, 38)",
              [theme.breakpoints.down("md")]: {
                width: "16px",
              },
            }}
          />
        </SearchIconWrapper>
        <StyledInputBase
          sx={{ color: "rgb(18, 25, 38);", fontWeight: 500 }}
          placeholder="Search…"
        />
        <TuneIconWrapper>
          <MuiIconButton
            size="small"
            sx={{
              backgroundColor: "#ede7f6",
              borderRadius: "25%",
              my: 2,
              "&:hover": {
                backgroundColor: "#5e35b1",
              },
            }}
          >
            <TuneIcon
              sx={{
                color: "rgb(94, 53, 177)",
                "&:hover": {
                  color: "whitesmoke",
                },
                [theme.breakpoints.down("md")]: {
                  width: "15px",
                  height: "15px",
                },
              }}
            />
          </MuiIconButton>
        </TuneIconWrapper>
      </Search>
    </>
  );
};

export default SearchComponent;
