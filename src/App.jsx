import "./App.css";
import Navbar from "./shared/Navbar/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff", // White color
    },
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </>
  );
}

export default App;
