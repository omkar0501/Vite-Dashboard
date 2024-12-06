import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Col from "react-bootstrap/esm/Col";
import { removecart } from "./ProductCartSlice";
import HourglassDisabledIcon from "@mui/icons-material/HourglassDisabled";
import { useState } from "react";

export const MyCart = () => {
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const [property, setProperty] = useState("visible");
  const [property1, setProperty1] = useState("none");

  // console.log(cart);
  return (
    <>
      <Typography
        sx={{
          fontSize: "xx-large",
          fontFamily: "monospace",
          fontWeight: "bolder",
          mb: 3,
          letterSpacing: "9px",
        }}
      >
        MyCart
        <ShoppingCartCheckoutIcon className="fs-1" />
      </Typography>
      <Divider />
      <div className="row mt-3">
        {cart.length === 0 ? (
          <Card sx={{ p: 5 }}>
            <CardMedia>
              <HourglassDisabledIcon
                sx={{ fontSize: "xxx-large", color: "skyblue" }}
              />
            </CardMedia>
            <CardContent>
              <Typography sx={{ fontSize: "xx-large", fontFamily: "inter" }}>
                No Products In Your cart
              </Typography>
            </CardContent>
          </Card>
        ) : (
          cart.map((product, i) => (
            <Col key={i} md={3} xs={12} className="mt-4">
              <Card sx={{ width: "100%" }}>
                <CardMedia>
                  <img width="100%" src={product.images}></img>
                </CardMedia>
                <CardContent>
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
                      justifyContent: "left",
                      fontWeight: "bold",
                      fontSize: "larger",
                    }}
                  >
                    $ {product.price}
                  </Typography>
                </CardContent>
                {/* <Typography sx={{ display: "flex", m: 2 }}>
                  <Button
                    variant="outlined"
                    sx={{ alignItems: "start", fontWeight: "bold" }}
                    onClick={() => {
                      dispatch(
                        removecart(
                          cart.filter((item) => {
                            return item.id !== product.id;
                          })
                        )
                      );
                    }}
                  >
                    Remove
                  </Button>
                  <a className="ms-auto mt-auto mb-auto"> See More... </a>
                </Typography> */}
                <Accordion sx={{ borderTop: "none" }}>
                  <AccordionSummary
                    sx={{
                      display: "var(--bg)",
                    }}
                    style={{ "--bg": property }}
                  >
                    <Button
                      variant="outlined"
                      sx={{ alignItems: "start", fontWeight: "bold" }}
                      onClick={() => {
                        dispatch(
                          removecart(
                            cart.filter((item) => {
                              return item.id !== product.id;
                            })
                          )
                        );
                      }}
                    >
                      Remove
                    </Button>
                    <a
                      className="ms-auto mt-auto mb-auto"
                      aria-controls="panel1-content"
                      id="panel1-header"
                      onClick={() => setProperty("none")}
                    >
                      See More...
                    </a>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{ display: "var(-bgg)" }}
                    style={{ "var(-bgg)": property1 }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                    <AccordionSummary
                      sx={{
                        display: "var(--bg)",
                      }}
                      style={{ "--b": property }}
                    >
                      <Button
                        variant="outlined"
                        sx={{ alignItems: "start", fontWeight: "bold" }}
                        onClick={() => {
                          dispatch(
                            removecart(
                              cart.filter((item) => {
                                return item.id !== product.id;
                              })
                            )
                          );
                        }}
                      >
                        Remove
                      </Button>
                      <a
                        className="ms-auto mt-auto mb-auto"
                        aria-controls="panel1-content"
                        id="panel1-header"
                        onClick={() => setProperty1("none")}
                      >
                        See More...
                      </a>
                    </AccordionSummary>
                  </AccordionDetails>
                </Accordion>
              </Card>
            </Col>
          ))
        )}
      </div>
    </>
  );
};
