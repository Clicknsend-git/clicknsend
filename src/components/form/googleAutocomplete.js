import React from "react";
import {
  Box,
  Divider,
  FormHelperText,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popover,
  Select,
  TextField,
} from "@mui/material";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { LocationOnOutlined } from "@mui/icons-material";
import FormControl from "./formControl";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
const GoogleAutocomplete = (props) => {
  const {
    name,
    label,
    format,
    variant,
    type,
    InputLabelProps,
    startIcon,
    endIcon,
    value,
    required,
    multiline,
    inputEndAdornmentPosition = "end",
    inputStartAdornmentPosition = "start",
    fullWidth,
    helperText,
    disabled,
    rows,
    onKeyDown,
    isMaxLenght,
    maxLength,
    sx,
    size,
    formSx,
    placeholder,
    min,
    readOnly,
    onSelect,
    textBoxSx,
    isBackgroundColor = false,
    IconSx,
    onChange,
    EndIconClick,
    ...rest
  } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleSelect = async (value) => {
    let address, lat, long, city, state, country, zipCode;

    address = value;

    try {
      const results = await geocodeByAddress(address);
      console.log("Geocode results:", results);

      const latLng = await getLatLng(results[0]);
      lat = latLng?.lat;
      long = latLng?.lng;
      console.log("latLng:", latLng);

      // Extract additional address details
      const addressComponents = results[0]?.address_components || [];
      let localityFound = false;
      let postalCodeFound = false;

      addressComponents.forEach((component) => {
        if (component.types.includes("locality")) {
          city = component.long_name;
          localityFound = true;
        }
        if (component.types.includes("sublocality")) {
          city = city || component.long_name; // Fallback to sublocality
        }
        if (component.types.includes("administrative_area_level_1")) {
          state = component.long_name;
        }
        if (component.types.includes("country")) {
          country = component.long_name;
        }
        if (component.types.includes("postal_code")) {
          zipCode = component.long_name;
          postalCodeFound = true;
        }
      });

      // Handle cases where locality or postal code is missing
      if (!localityFound) {
        city = "City not available";
      }
      if (!postalCodeFound) {
        zipCode = "ZIP/Postal Code not available";
      }

      console.log(
        "City:",
        city,
        "State:",
        state,
        "Country:",
        country,
        "ZIP Code:",
        zipCode
      );
    } catch (error) {
      address = "";
      console.error("Error:", error);
    }

    await onSelect(address, lat, long, city, state, country, zipCode);
  };

  return (
    <Box sx={{ my: 0, width: "100%", position: "relative" }}>
      <PlacesAutocomplete
        value={value}
        onChange={(e) => props.onChange(e)}
        onSelect={(e) => handleSelect(e)}
        searchOptions={{
          componentRestrictions: { country: "uk" }, // Restrict to UK
        }}

        // searchOptions={{
        //   componentRestrictions: { country: "ind" }, // Restrict to ind
        // }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          {
            /* 
          suggestions.push({
            description: "nfksdakj"
          })
          suggestions.push({
            description: "nfksdakj"
          })
          suggestions.push({
            description: "nfksdakj"
          })

          suggestions.push({
            description: "nfksdakj"
          })
          suggestions.push({
            description: "nfksdakj"
          })
          suggestions.push({
            description: "nfksdakj"
          }) */
          }
          return (
            <Box component="div">
              <FormControl
                key={`key${name}`}
                error={helperText ? true : false}
                fullWidth={fullWidth}
                sx={{
                  ...formSx,
                  borderRadius: "0.25rem",
                }}
                size={size}
              >
                <TextField
                  {...rest}
                  fullWidth={fullWidth}
                  error={helperText ? true : false}
                  variant={"standard"}
                  name={name}
                  sx={
                    !isBackgroundColor
                      ? {
                          "& .MuiOutlinedInput-input": {
                            background: (theme) => theme.palette.common.white,
                            borderRadius: "0.25rem",
                          },
                        }
                      : { ...textBoxSx }
                  }
                  label={label}
                  InputLabelProps={InputLabelProps}
                  type={type}
                  onKeyDown={onKeyDown}
                  placeholder={placeholder}
                  size={size}
                  rows={rows}
                  min={min}
                  value={value}
                  multiline={multiline}
                  required={required}
                  onChange={(e) => props.onChange(e)}
                  disabled={disabled}
                  autoComplete={"false"}
                  inputProps={{
                    maxLength: isMaxLenght ? isMaxLenght : null,
                    min: min,
                    readOnly: readOnly,
                    onKeyDown: onKeyDown,
                  }}
                  InputProps={{
                    readOnly: readOnly,
                    min: min,
                    endAdornment: (
                      <>
                        {endIcon && (
                          <InputAdornment position={inputEndAdornmentPosition}>
                            {endIcon}
                          </InputAdornment>
                        )}
                      </>
                    ),
                    startAdornment: (
                      <>
                        {startIcon && (
                          <InputAdornment
                            position={inputStartAdornmentPosition}
                          >
                            {startIcon}
                          </InputAdornment>
                        )}
                      </>
                    ),
                  }}
                  {...getInputProps({
                    placeholder: "Search Address ...",
                    className: "location-search-input",
                  })}
                />
                <Box sx={{ display: "flex" }}>
                  {helperText && <FormHelperText>{helperText}</FormHelperText>}
                </Box>
              </FormControl>

              <Box
                sx={
                  {
                    // position: 'absolute',
                    // backgroundColor: 'white',
                    // // zIndex: 1300,
                    // inset: "0px auto auto 0px",
                    // transform: "translate3d(0px, 36px, 0px)",
                    // listView: {
                    //   position: 'absolute',
                    //   backgroundColor: 'white',
                    //   zIndex: 1300,
                    // }
                  }
                }
                className="autocomplete-dropdown-container"
              >
                <Paper
                  elevation={5}
                  sx={{
                    height: "max-content",
                    maxHeight: "200px",
                    overflow: "hidden",
                    overflowY: "scroll",
                    background: (theme) => theme.palette.common.white,
                  }}
                >
                  <Box>
                    {loading && <Box>Loading...</Box>}
                    {!loading &&
                      suggestions.map((suggestion, index) => {
                        const className = suggestion.active
                          ? "suggestion-item--active"
                          : "suggestion-item";
                        const style = suggestion.active
                          ? { backgroundColor: "#fafafa", cursor: "pointer" }
                          : { backgroundColor: "#ffffff", cursor: "pointer" };
                        return (
                          <React.Fragment key={`${name}-${index}`}>
                            {/* <nav aria-label="main mailbox folders"> */}
                            <List
                              {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                              })}
                            >
                              <ListItem disablePadding>
                                <ListItemButton>
                                  <ListItemIcon>
                                    <LocationOnOutlined />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={suggestion.description}
                                  />
                                </ListItemButton>
                              </ListItem>
                            </List>
                            {/* </nav> */}
                            <Divider />
                          </React.Fragment>
                        );
                      })}
                  </Box>
                </Paper>
              </Box>
            </Box>
          );
        }}
      </PlacesAutocomplete>
    </Box>
  );
};

export default GoogleAutocomplete;
