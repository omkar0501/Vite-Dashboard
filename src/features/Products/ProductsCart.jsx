import React, { useEffect, useState } from "react";
import { getProductsApi } from "../../APIs/Utils";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "@mui/material/Card";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import {
  CardContent,
  CardMedia,
  Typography,
  Button,
  Badge,
  Divider,
  Snackbar,
  Alert,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addtocart } from "./ProductCartSlice";
import { useDispatch, useSelector } from "react-redux";

export const ProductsCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.products);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [color, setColor] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [des, setDes] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [id, setId] = React.useState(0);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    const getData = async () => {
      var data1 = await getProductsApi();
      data1 = data1.products;
      setData(data1);
      // console.log(data);
    };
    getData();
  }, []);
  function toMyCart() {
    cart.length > 0 ? navigate("/mycart") : handleClick();
  }
  function UpdateProduct() {}
  data.map((product) => {
    if (product.id === id) {
      product.title = title;
      product.description = des;
      product.price = price;
    }
  });
  return (
    <>
      <Row className="mb-2 ">
        <Typography
          sx={{
            fontSize: "xx-large",
            fontFamily: "monospace",
            fontWeight: "bolder",
            letterSpacing: "5px",
          }}
          as={Col}
          xs={6}
        >
          Products
        </Typography>

        <Col xs={6}>
          <Button
            sx={{ display: "flex", float: "right", letterSpacing: "3px" }}
            variant="outlined"
            className="p-3 fw-bold"
            onClick={toMyCart}
          >
            Cart
            <Badge badgeContent={cart.length}>
              <AddShoppingCartOutlinedIcon className="ms-2" />
            </Badge>
          </Button>
          <Snackbar
            sx={{ position: "relative", top: "6px", right: "30px" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="warning"
              variant="filled"
              sx={{
                width: "50%",
                [theme.breakpoints.down("md")]: {
                  width: "200px",
                  top: "-10px",
                  fontSize: "xx-small",
                  px: 0.6,
                  py: 0,
                },
              }}
            >
              Cart is Empty
            </Alert>
          </Snackbar>
        </Col>
      </Row>
      <Divider />
      <Accordion className=" ">
        <AccordionSummary className="d-flex">
          <Typography>Update Product</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Row>
            <TextField
              as={Col}
              xs={12}
              md={3}
              variant="standard"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              label="Title"
            />
            <TextField
              as={Col}
              xs={12}
              md={3}
              variant="standard"
              value={des}
              onChange={(e) => setDes(e.target.value)}
              label="Descreption"
            />
            <TextField
              as={Col}
              xs={12}
              md={3}
              variant="standard"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              label="Price"
            />
            <Col md={3}>
              <Button
                className="mt-3"
                variant="outlined"
                onClick={UpdateProduct}
              >
                Update
              </Button>
            </Col>
          </Row>
        </AccordionDetails>
      </Accordion>
      <div className="row mt-4">
        {data.map((product, i) => (
          <Col key={i} md={3} xs={12} className="mt-4">
            <Card
              sx={{
                width: "100%",
                minHeight: "100%",
                display: "flex", //
                flexDirection: "column", //
                justifyContent: "space-between", //
              }}
              key={i}
            >
              <CardMedia>
                <img width="100%" src={product.images}></img>
              </CardMedia>
              <CardContent sx={{ flex: "1 1 auto" }}>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "large",
                    fontWeight: "bold",
                  }}
                >
                  {product.title}
                </Typography>
                <br />
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    wordBreak: "break-all",
                  }}
                >
                  {product.description}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    flex: "1",
                    justifyContent: "left",
                    fontWeight: "bold",
                    fontSize: "larger",
                  }}
                >
                  $ {product.price}
                </Typography>
              </CardContent>
              <Typography sx={{ display: "flex", m: 2 }}>
                <Button
                  className={color}
                  variant="outlined"
                  sx={{
                    alignItems: "start",
                    fontWeight: "bold",
                    color: {
                      backgroundColor: "#b3d9ff",
                    },
                  }}
                  style={{ "--bg": color }}
                  onClick={() => {
                    dispatch(addtocart(product));
                    setColor(`p${i}`);
                  }}
                >
                  Add to Cart
                </Button>
                <Button
                  sx={{ float: "right", marginLeft: "auto" }}
                  variant="outlined"
                  onClick={() => {
                    setId(product.id);
                    setTitle(product.title);
                    setDes(product.description);
                    setPrice(product.price);
                  }}
                >
                  <EditCalendarIcon />
                </Button>
              </Typography>
            </Card>
          </Col>
        ))}
      </div>
    </>
  );
};
