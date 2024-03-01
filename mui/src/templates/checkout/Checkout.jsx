import {
  Container,
  CssBaseline,
  Paper,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
} from "@mui/material";
import React from "react";
import Shipping from "./Shipping";
import Payment from "./Payment";
import Review from "./Review";

const steps = ["Shipping address", "Payment details", "Review you order"];
function getStepContent(step) {
  switch (step) {
    case 0:
      return <Shipping />;
    case 1:
      return <Payment />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}
function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <>
      <Container
        sx={{
          backgroundColor: "#101418",
          height: "100vh",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        disableGutters
        maxWidth
      >
        <CssBaseline />
        <Container maxWidth="xs">
          {/* section */}
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              my: 3,
            }}
          >
            <Typography variant="h4">Checkout</Typography>
            <Stepper activeStep={activeStep}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>
                    <Typography sx={{ color: "white" }}> {label}</Typography>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

          {/* lower section */}
          {activeStep === steps.length ? (
            <>
              {" "}
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </>
          ) : (
            <>
              <Box>
                {/* <Shipping /> */}
                {getStepContent(activeStep)}
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {" "}
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </>
          )}
        </Container>
      </Container>
    </>
  );
}

export default Checkout;
