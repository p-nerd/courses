import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="md">
                <Checkbox defaultChecked size="small" />{" "}
                <Checkbox defaultChecked size="medium" sx={{}} />{" "}
                <Checkbox defaultChecked sx={{ "& .MuiSvgIcon-root": { fontSize: 46 } }} />
                <Checkbox defaultChecked color="error" />
                <Checkbox defaultChecked color="default" />
                <Checkbox
                    defaultChecked
                    sx={{
                        color: pink[800],
                        "&.Mui-checked": {
                            color: pink[600],
                        },
                    }}
                />
                <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />
            </Container>
        </>
    );
};

export default App;
