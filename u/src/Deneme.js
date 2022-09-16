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
  RadioGroup,
  Rating,
  Select,
  Slider,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { useReducer } from "react";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

function reducer(state, action) {
  switch (action.type) {
    case "onChange":
      return { ...state, [action.payload?.key]: action.payload?.value };
    case "handleChange":
      return { ...state, [action.payload?.key]: action.payload?.value };
    case "onChangeAsync":
      return { ...state, [action.payload?.key]: action.payload?.value };

    default:
      return state;
  }
}
const Deneme = ({ Obj }) => {
  const [state, dispatch] = useReducer(reducer);
  console.log(state);
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
                      type: "handleChange",
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
                id="combo-box-demo"
                {...item?.ref?.map((item) => (
                  <TextField
                    onChange={(e) =>
                      dispatch({
                        type: "handleChange",
                        payload: { key: item.label, value: e.target.value },
                      })
                    }
                  />
                ))}
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
