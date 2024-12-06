import { useEffect, useState } from "react";
import "../../App.css";
import { getFoodProductApi } from "../../APIs/Utils";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import {
  addtoordeercart,
  removeall,
  removeorderfromcart,
  removeprice,
} from "./FoodProductListSlice";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const styled = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const FoodProductList = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const orderCart = useSelector((state) => state.foodorder.products);
  const totalPrice = useSelector((state) => state.foodorder.TotalPrice);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const getData = () => {
      setData(getFoodProductApi());
    };
    getData();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addtoordeercart(product));
    setQuantities((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));
  };

  const handleIncrement = (productId, Product) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: prev[productId] + 1,
    }));
    dispatch(addtoordeercart(Product));
  };

  const handleDecrement = (productId, price) => {
    setQuantities((prev) => {
      const newQuantities = { ...prev };
      if (newQuantities[productId] > 1) {
        newQuantities[productId] -= 1;
        dispatch(removeprice(price));
      } else {
        dispatch(removeorderfromcart(productId));
        delete newQuantities[productId];
      }

      return newQuantities;
    });
  };

  function NewOrder() {
    handleClose();
    dispatch(removeall());
    setQuantities({});
  }

  return (
    <div className="row m-1">
      <Box as={Col} md={8} xs={12}>
        <Typography
          sx={{
            fontSize: "xxx-large",
            fontWeight: "bolder",
            display: "flex",
            justifyContent: "left",
          }}
        >
          Desserts
        </Typography>
        <Row>
          {data.map((product, i) => (
            <Card sx={{ mb: 2 }} as={Col} md={4} xs={12} key={i}>
              <CardMedia>
                <img
                  style={{ borderRadius: "10px" }}
                  width="100%"
                  src={product.image.desktop}
                ></img>
              </CardMedia>
              {quantities[product.id] ? (
                <Button
                  sx={{
                    width: "12%",
                    borderColor: "black",
                    borderRadius: "100px",
                    px: 2,
                    background: "rgb(209, 23, 23)",
                    position: "absolute",
                    display: "flex",
                    margin: "-17px 0 0 45px",
                  }}
                >
                  <RemoveIcon
                    onClick={() => handleDecrement(product.id, product.price)}
                    sx={{ color: "white", flex: 1 }}
                  ></RemoveIcon>
                  <Typography sx={{ color: "white", fontWeight: "bold" }}>
                    {quantities[product.id]}
                  </Typography>
                  <AddIcon
                    onClick={() => handleIncrement(product.id, product)}
                    sx={{ color: "white", flex: 1 }}
                  ></AddIcon>
                </Button>
              ) : (
                <Button
                  sx={{
                    borderColor: "black",
                    borderRadius: "100px",
                    px: 2,
                    background: "white",
                    position: "absolute",
                    display: "flex",
                    margin: "-17px 0 0 45px",
                    "&:hover": {
                      border: "2px solid rgb(209, 23, 23)",
                    },
                  }}
                  variant="outlined"
                  onClick={() => handleAddToCart(product)}
                >
                  <AddShoppingCartIcon sx={{ color: "rgb(175, 54, 5)" }} />
                  <span
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "smaller",
                      marginLeft: "5px",
                    }}
                  >
                    Add to Cart
                  </span>
                </Button>
              )}
              <CardContent sx={{ mt: 2 }}>
                <Typography
                  sx={{
                    fontSize: "small",
                    color: "rgb(122, 39, 39)",
                    float: "left",
                  }}
                >
                  {product.category}
                </Typography>
                <br />
                <Typography sx={{ fontWeight: "bold", float: "left" }}>
                  {product.name}
                </Typography>
                <br />
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "rgb(175, 54, 5)",
                    float: "left",
                  }}
                >
                  ${product.price.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Row>
      </Box>
      <Box as={Col} md={4} xs={12}>
        <Card sx={{ background: "white", p: 2, borderRadius: "10px" }}>
          <Typography
            sx={{
              fontSize: "xx-large",
              fontWeight: "1000",
              letterSpacing: "2px",
              color: "rgb(175, 54, 5)",
              display: "flex",
              justifyContent: "left",
            }}
          >
            Your Cart ({orderCart.length})
          </Typography>
          <CardContent>
            {orderCart.length == 0 ? (
              <Box>
                <img src="/assets/images/illustration-empty-cart.svg"></img>
                <Typography
                  sx={{ color: "rgb(134, 64, 64)", fontWeight: "bolder" }}
                >
                  Your added items will appear here
                </Typography>
              </Box>
            ) : (
              orderCart.map((product, i) => (
                <Box key={i}>
                  <Typography
                    sx={{ display: "flex", fontWeight: "bolder", mb: 2, mt: 2 }}
                  >
                    {product.category}
                  </Typography>
                  <Box sx={{ display: "flex", mb: 3 }}>
                    <Typography sx={{ fontWeight: "bolder" }}>
                      {quantities[product.id]}x
                    </Typography>
                    <Typography sx={{ flex: 1 }}>
                      @${product.price.toFixed(2)}
                    </Typography>
                    <Typography>
                      ${quantities[product.id] * product.price.toFixed(2)}
                    </Typography>
                    <Typography sx={{ flex: 2 }}>
                      <CloseIcon
                        onClick={() => {
                          dispatch(removeorderfromcart(product.id));
                          setQuantities((prev) => {
                            const newQuantities = { ...prev };
                            delete newQuantities[product.id];
                            return newQuantities;
                          });
                        }}
                        sx={{ float: "right" }}
                      />
                    </Typography>
                  </Box>
                  <Divider />
                </Box>
              ))
            )}
            {orderCart.length !== 0 ? (
              <Box>
                <Box sx={{ display: "flex", mt: 3, mb: 2 }}>
                  <Typography>Order Total</Typography>
                  <Typography
                    sx={{ flex: 1, fontWeight: "bolder", fontSize: "large" }}
                  >
                    <Typography
                      sx={{
                        float: "right",
                        fontSize: "larger",
                        fontWeight: "bold",
                      }}
                    >
                      ${totalPrice.toFixed(2)}
                    </Typography>
                  </Typography>
                </Box>
                <Paper
                  sx={{
                    background: "#f6f2f88c",
                    borderRadius: 0,
                    boxShadow: "none",
                  }}
                >
                  <Typography sx={{ p: 2 }}>
                    <img src="/assets/images/icon-carbon-neutral.svg" /> This is
                    a<span className="fw-bold"> carbon-neutral</span> delivery
                  </Typography>
                </Paper>
                <Button
                  sx={{
                    borderRadius: "100px",
                    width: "90%",
                    backgroundColor: " rgb(209, 23, 23)",
                    color: "white",
                    fontWeight: "bolder",
                    p: 2,
                    mt: 3,
                    fontSize: "small",
                  }}
                  onClick={handleOpen}
                >
                  Confirm Order
                </Button>
                <Modal
                  open={open}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={styled}>
                    <img
                      src="/assets/images/icon-order-confirmed.svg"
                      alt="Order Confirmed Icon"
                    />
                    <Typography
                      id="modal-modal-title"
                      variant="h4"
                      component="h2"
                      sx={{
                        fontWeight: "bolder",
                        mt: 1,
                        mb: 1,
                        textAlign: "left",
                      }}
                    >
                      Order Confirmed
                    </Typography>
                    <Typography sx={{ textAlign: "left" }}>
                      We hope you enjoy your food
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    {orderCart.map((product, i) => (
                      <Box key={i}>
                        <Box
                          sx={{ display: "flex", alignItems: "center", mt: 3 }}
                        >
                          <img
                            style={{
                              marginRight: "20px",
                              width: "15%",
                              borderRadius: "10px",
                            }}
                            src={product.image.thumbnail}
                            alt={product.name}
                          />
                          <Box sx={{ flex: 1, mx: 2 }}>
                            <Typography sx={{ fontWeight: "bold" }}>
                              {product.name}
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                // justifyContent: "space-between",
                              }}
                            >
                              <Typography sx={{}}>
                                {quantities[product.id]}x
                              </Typography>
                              <Typography sx={{ mx: 5 }}>
                                @${product.price.toFixed(2)}
                              </Typography>
                            </Box>
                          </Box>
                          <Typography
                            sx={{
                              // ml: "auto",
                              mx: 5,
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-end",
                            }}
                          >
                            ${quantities[product.id] * product.price.toFixed(2)}
                          </Typography>
                        </Box>
                        <Divider sx={{ my: 2 }} />
                      </Box>
                    ))}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 2,
                      }}
                    >
                      <Typography>Order Total</Typography>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: "larger",
                        }}
                      >
                        ${totalPrice.toFixed(2)}
                      </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Button
                      variant="contained"
                      color="error"
                      sx={{
                        px: 2,
                        py: 1,
                        fontSize: "small",
                        fontWeight: "bold",
                        borderRadius: "10px",
                        display: "flex",
                        mx: "auto",
                      }}
                      onClick={NewOrder}
                    >
                      Start New Order
                    </Button>
                  </Box>
                </Modal>
              </Box>
            ) : (
              ""
            )}
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};
