import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import axios from "axios";
import "./RobotForm.scss";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    height: 500,
    backgroundColor: "#fff",
    width: "30vw",
    borderRadius: 20,
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function RobotForm() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [isCreated, setIsCreated] = useState(false);
  const classes = useStyles();

  useEffect(() => {}, []);

  const handleSubmit = () => {
    axios
      .post("http://localhost:3001/api/robots/create", {
        name,
        color,
        attack,
        defense
      })
      .then(response => {
        console.log(response);
        setIsCreated(true);
      });
  };

  const isValidRobot = attack && defense && name && color;
  return (
    <div className="robot-form">
      <TextField
        id="outlined-text"
        label="Robot Name"
        type="text"
        variant="outlined"
        className="textField"
        error={!name || name.length > 100}
        helperText={"Name must be less than 100 characters"}
        onChange={e => setName(e.target.value)}
      />

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Robot Color</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={color}
          onChange={e => setColor(e.target.value)}
        >
          <MenuItem value={"red"}>Red</MenuItem>
          <MenuItem value={"blue"}>Blue</MenuItem>
          <MenuItem value={"green"}>Green</MenuItem>
          <MenuItem value={"black"}>Black</MenuItem>
        </Select>
      </FormControl>

      <TextField
        id="outlined-text"
        label="Robot Attack"
        type="number"
        variant="outlined"
        className="textField"
        error={!attack}
        helperText={"Robot must have an attack"}
        onChange={e => setAttack(e.target.value)}
      />
      <TextField
        id="outlined-text"
        label="Robot Defense"
        type="number"
        variant="outlined"
        className="textField"
        error={!defense}
        helperText={"Robot must have defense"}
        onChange={e => setDefense(e.target.value)}
      />
      {isValidRobot && (
        <button onClick={handleSubmit}>
          {isCreated ? "Created!!" : "Create"}
        </button>
      )}
    </div>
  );
}

export default RobotForm;
