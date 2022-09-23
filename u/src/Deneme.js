import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  Rating,
  Select,
  Slider,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useReducer, useState } from "react";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import SelectInput from "@mui/material/Select/SelectInput";

function reducer(state, action) {
  switch (action.type) {
    case "onChange":
      return { ...state, [action.payload?.key]: action.payload?.value };

    default:
      return state;
  }
}

const Deneme = ({ Obj }) => {
  const [state, dispatch] = useReducer(reducer);
  const [con, setCon] = useState(false);
  const [trye, setTrye] = useState("");
  const handleChange = (event) => {
    setTrye(event.target.value);
  };
  console.log(state);
  useEffect(() => {
    fetch("https://632c094b1aabd83739910892.mockapi.io/country/country")
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  function ModalPosition(array) {
    return array?.map((item) => {
      switch (item.type) {
        case "actor":
          return (
            <Grid item {...item.style}>
              <TextField item />
            </Grid>
          );

        case "typography":
          return (
            <Grid item {...item.style}>
              <Typography
                onChange={(e) =>
                  dispatch({
                    type: "onChange",
                    payload: { key: item.label, value: e.target.value },
                  })
                }
                {...item}
                {...item.style}
              >
                {item.text}
              </Typography>
            </Grid>
          );
        case "standart":
          return (
            <Grid item {...item.style}>
              <TextField
                onChange={(e) =>
                  dispatch({
                    type: "onChange",
                    payload: { key: item.label, value: e.target.value },
                  })
                }
                {...item}
                {...item.style}
              />
            </Grid>
          );
        case "buton":
          return (
            <Grid item {...item.style}>
              <Button
                onChange={(e) =>
                  dispatch({
                    type: "onChange",
                    payload: { key: item.label, value: e.target.value },
                  })
                }
                {...item}
                {...item.style}
              >
                {item.text}
              </Button>
            </Grid>
          );
        case "checkbox":
          return (
            <Grid item {...item.style}>
              <FormControlLabel
                onChange={(e) =>
                  dispatch({
                    type: "onChange",
                    payload: { key: item.label, value: e.target.value },
                  })
                }
                {...item}
                control={<Checkbox {...item.style} />}
              />
              {item.value}
            </Grid>
          );
        case "radio":
          return (
            <Grid item {...item.style}>
              <FormControlLabel
                onChange={(e) =>
                  dispatch({
                    type: "onChange",
                    payload: { key: item.label, value: e.target.value },
                  })
                }
                {...item}
                control={<Radio {...item.style} />}
              />
            </Grid>
          );
        case "rating":
          return (
            <Grid item {...item.style}>
              <Rating
                onChange={(e) =>
                  dispatch({
                    type: "onChange",
                    payload: { key: item.label, value: e.target.value },
                  })
                }
                {...item.style}
                {...item}
              />
            </Grid>
          );
        case "select":
          return (
            <Grid item {...item.style}>
              <FormControl {...item}>
                <InputLabel>{item.label}</InputLabel>
                <Select
                  onChange={(e) =>
                    dispatch({
                      type: "onChange",
                      payload: { key: item.label, value: e.target.value },
                    })
                  }
                  {...item}
                >
                  {item?.reference?.map((item) => (
                    <MenuItem {...item}>{item.text}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          );
        case "autocomplete":
          return (
            <Grid item {...item.style}>
              <Autocomplete
                {...item}
                getOptionLabel={(option) =>
                  item.keys.map((itm) => `${option[itm]}  `)
                }
                getOptionSelected={(option, value) =>
                  option.text !== value.text
                }
                onChange={(e, v) =>
                  dispatch({
                    type: "onChange",
                    payload: { key: item.label, value: v },
                  })
                }
                options={item.ref}
                sx={{ width: 300 }}
                id="combo-box-demo"
                renderInput={(params) => <TextField {...params} {...item} />}
              />
            </Grid>
          );
        case "slider":
          return (
            <Grid item {...item.style}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
              >
                <VolumeDown />
                <Slider
                  onChange={(e) =>
                    dispatch({
                      type: "onChange",
                      payload: { key: item.label, value: e.target.value },
                    })
                  }
                  {...item}
                  {...item.style}
                />
                <VolumeUp />
              </Stack>
            </Grid>
          );
        case "switch":
          return (
            <Grid item {...item.style}>
              <Switch
                onChange={(e) =>
                  dispatch({
                    type: "onChange",
                    payload: { key: item.label, value: e.target.value },
                  })
                }
                {...item.style}
              />
            </Grid>
          );

        // case "country":
        //   return (
        //     <Grid item sm={item.sm} xs={item.xs}>
        //       <InputLabel>{item.label}</InputLabel>
        //       <SelectInput
        //         setStringValue={(e) => {
        //           dispatch({
        //             type: "onChange",
        //             payload: { key: item.label, value: e.target.value },
        //           });
        //         }}
        //         {...item}
        //         state={state}
        //       />
        //     </Grid>
        //   );

        default:
          return;
      }
    });
  }
  return (
    <Box sx={{ mt: 3, mb: 3, ml: 3, mr: 3 }}>
      <Grid container spacing={5}>
        {ModalPosition(Obj)}
      </Grid>
    </Box>
  );
};
export default Deneme;
