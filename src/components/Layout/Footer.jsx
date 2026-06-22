import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Typography
        component="p"
        variant="p"
        
        sx={{
          bgcolor: "primary.main",
          color: "white",
          p: 2,
          textAlign: "center",
          mt: 10,
        }}
      >
        developed by{" "}
        <a
          href="https://github.com/ParsaDokhtMohammadi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Parsa Dokht Mohammadi
        </a>
      </Typography>
    </footer>
  );
};

export default Footer;