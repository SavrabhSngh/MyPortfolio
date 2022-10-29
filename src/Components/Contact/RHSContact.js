import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { AccountCircle, Email } from "@mui/icons-material";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import { SEND_A_MESSAGE, SEND_MESSAGE } from "../../Services/Constants";

const RHSContact = () => {
  return (
    <div className="contact-me">
      <h3>{SEND_A_MESSAGE}</h3>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel>Name</InputLabel>
        <OutlinedInput
          id="name"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          label="name"
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel>Email</InputLabel>
        <OutlinedInput
          id="email"
          startAdornment={
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          }
          label="email"
        />
      </FormControl>
      <TextField
        placeholder="Message"
        variant="outlined"
        multiline
        fullWidth
        sx={{ m: 1 }}
      />
      <button className="contact-submit">
        {SEND_MESSAGE}
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default RHSContact;
