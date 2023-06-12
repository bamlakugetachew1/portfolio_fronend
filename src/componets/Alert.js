import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import PortfolioContext from "../store/portfoliostore";
import AlertTitle from "@mui/material/AlertTitle";
import { useContext } from "react";

function TransitionAlerts(props) {
  const { alert, changeAlert } = useContext(PortfolioContext);
  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={alert}>
        <Alert
          severity={props.severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                changeAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <AlertTitle>{props.title}</AlertTitle>
          {props.text}
        </Alert>
      </Collapse>
    </Box>
  );
}
export default TransitionAlerts;
