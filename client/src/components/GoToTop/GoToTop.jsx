import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Button } from "@mui/material";

const GoToTop = () => {
  return (
    <Button
      sx={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        padding: "1rem",
        backgroundColor: "var(--clr-dark)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ExpandLessIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    </Button>
  );
};

export default GoToTop;
