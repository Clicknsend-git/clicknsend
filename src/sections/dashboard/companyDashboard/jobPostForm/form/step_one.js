import { TextBox } from "@/components/form";
import { Box, Typography, FormControl, RadioGroup, FormControlLabel, Radio, FormHelperText } from "@mui/material"; // Import required components

const StepOne = ({ formik }) => {
  return (
    <>
    <Box mb={2}>
   <Typography fontSize={16} fontWeight={500}>
    Enter Job Post
  </Typography> 
</Box>
      <Box>
  <FormControl component="fieldset">
    <RadioGroup
      aria-label="jobType"
      name="name"
      value={formik.values.name}
      onChange={formik.handleChange}
    >
      <FormControlLabel
        value="Hotshot"
        control={<Radio size="small" />}
        label="Hotshot"
      />
      <FormControlLabel
        value="Budget"
        control={<Radio size="small" />}
        label="Budget"
      />
    </RadioGroup>
    {formik.touched.jobType && formik.errors.jobType && (
      <FormHelperText>{formik.errors.jobType}</FormHelperText>
    )}
  </FormControl>
</Box>
    </>
  );
};

export default StepOne;
