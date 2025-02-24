// import { SelectBox, TextBox } from "@/components/form";
// import { Box, Grid, Typography } from "@mui/material";
// import { useRouter } from "next/router";
// import React from "react";

// const VehicleTypeTruck = [
//   {
//     label: "7.5t",
//     value: "7.5t",
//   },
//   {
//     label: "10t",
//     value: "10t",
//   },
//   {
//     label: "18t",
//     value: "18t",
//   },
//   {
//     label: "26t",
//     value: "26t",
//   },
//   {
//     label: "trailer",
//     value: "trailer",
//   },
//   {
//     label: "attic",
//     value: "attic",
//   },
// ];
// const VehicleTypeVan = [
//   {
//     label: "small van",
//     value: "small van",
//   },
//   {
//     label: "SWB 2.4 m ",
//     value: "SWB 2.4 m ",
//   },
//   {
//     label: "medium 3 m",
//     value: "medium 3 m",
//   },
//   {
//     label: "lwb 4m",
//     value: "lwb 4m",
//   },
//   {
//     label: "XLWB",
//     value: "XLWB",
//   },
//   {
//     label: "moterbike",
//     value: "moterbike",
//   },
//   {
//     label: "car",
//     value: "car",
//   },
//   {
//     label: "drop side",
//     value: "drop side",
//   },
//   {
//     label: "curtain side",
//     value: "curtain side",
//   },
  
// ];
// const VehicleType = [
//   {
//     label: "Choose Vehicle Type",
//     value: 0,
//   },
//   {
//     label: "vans",
//     value: "van",
//   },

//   {
//     label: "trucks/ lorrys",
//     value: "truck",
//   },
// ];
// const StepThree = ({ formik }) => {
//   const [vehicle, setVehicle] = React.useState([]);
//   const { query } = useRouter();
//   const { id } = query;
//   React.useEffect(() => {
//     if (id !== "create") {
//       if (formik.values.vehical_type === "van") {
//         setVehicle(VehicleTypeVan);
//       } else if (formik.values.vehical_type === "truck") {
//         setVehicle(VehicleTypeTruck);
//       } else {
//         setVehicle([]);
//       }
//     }
//   }, [formik.values, id]);
//   return (
//     <>
//       <Box mb={2}>
//         <Typography fontSize={16} fontWeight={500}>
//           Vehicle Requirement
//         </Typography>
//       </Box>

//       <Grid className='dashboard_jobPostForm_responsive' container spacing={2}>
//         <Grid item md={12}>
//           <SelectBox
//             fullWidth
//             label="Vehicle Type"
//             value={formik.values?.vehical_type}
//             name={`vehical_type`}
//             options={VehicleType}
//             onChange={(e) => {
//               formik.setFieldValue("vehical_type", e.target.value);
//               formik.setFieldValue("vehicle", "");
//               if (e.target.value === "van") {
//                 setVehicle(VehicleTypeVan);
//               } else if (e.target.value === "truck") {
//                 setVehicle(VehicleTypeTruck);
//               } else {
//                 setVehicle([]);
//               }
//             }}
//             helperText={
//               formik.touched.vehical_type && formik.errors.vehical_type
//             }
//             size="small"
//             vehicle="small"
//           />
//         </Grid>
//         <Grid item md={12}>
//           <SelectBox
//             fullWidth
//             label="Vehicle"
//             value={formik.values?.vehicle}
//             name={`vehicle`}
//             options={vehicle}
//             onChange={formik.handleChange}
//             helperText={formik.touched.vehicle && formik.errors.vehicle}
//             size="small"
//             vehicle="small"
//           />
//         </Grid>
//         {/* <Grid item md={12}>
//           <Box>
//             <TextBox
//               fullWidth
//               label="Job Budget"
//               name={`budget`}
//               value={`£${formik?.values?.budget}`}
//               onChange={(e) =>
//                 formik.setFieldValue(
//                   "budget",
//                   e.target.value.replace(/\D/gm, "")
//                 )
//               }
//               size={"small"}
//               helperText={formik.touched.budget && formik.errors.budget}
//             />
//           </Box>
//         </Grid> */}
//          <Grid item md={12}>
//           <Box>
//             <TextBox
//               fullWidth
//               label="Important Note:"
//               name={`description`}
//               value={formik?.values?.description || ''} // Defaults to empty string
//               onChange={formik.handleChange}
//               size={"small"}
//               multiline={true}
//               rows={7}
//               helperText={
//                 formik.touched.description && formik.errors.description
//               }
//             />
//           </Box>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default StepThree;




import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { SelectBox, TextBox } from "@/components/form";
import { Box, Grid, Typography } from "@mui/material";

const StepThree = ({ formik }) => {
  const [vehicleTypeOptions, setVehicleTypeOptions] = useState([]);
  const [vehicleOptions, setVehicleOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch vehicle types from API
  useEffect(() => {
    axios
      .get("https://evsexpres.com/api/auth/default/vehicle-type")
      .then((response) => {
        console.log("API Response for Vehicle Types:", response);
        if (response.data?.view_data && Array.isArray(response.data.view_data)) {
          const options = response.data.view_data.map((item) => ({
            label: item,
            value: item, // No transformation applied
          }));
          setVehicleTypeOptions(options);
        } else {
          console.error("Invalid data format from API for vehicle types");
        }
      })
      .catch((error) => {
        console.error("Error fetching vehicle types:", error);
      });
  }, []);

  // Fetch vehicle bodies dynamically based on selected type
  const fetchVehicleBodies = useCallback(async (vehicleType) => {
    if (!vehicleType) {
      setVehicleOptions([]);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get("https://evsexpres.com/api/auth/default/vehicle-body", {
        params: { type: vehicleType.label },
      });

      if (response.data?.view_data) {
        const options = response.data.view_data.map((item) => ({
          label: item,
          value: item, // No transformation applied
        }));
        setVehicleOptions(options);
      } else {
        console.error("Invalid data format for vehicle body options");
        setVehicleOptions([]);
      }
    } catch (error) {
      console.error("Error fetching vehicle body options:", error);
      setVehicleOptions([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <Box mb={2}>
        <Typography fontSize={16} fontWeight={500}>
          Vehicle Requirement
        </Typography>
      </Box>

      <Grid className="dashboard_jobPostForm_responsive" container spacing={2}>
        <Grid item md={12}>
          <SelectBox
            fullWidth
            label="Vehicle Type"
            value={formik.values?.vehical_type}
            name="vehical_type"
            options={vehicleTypeOptions}
            onChange={(e) => {
              const selectedType = vehicleTypeOptions.find(opt => opt.value === e.target.value);
              formik.setFieldValue("vehical_type", selectedType?.value || "");
              formik.setFieldValue("vehicle", ""); // Clear vehicle selection

              if (selectedType) {
                fetchVehicleBodies(selectedType);
              } else {
                setVehicleOptions([]);
              }
            }}
            helperText={formik.touched.vehical_type && formik.errors.vehical_type}
            size="small"
          />
        </Grid>

        <Grid item md={12}>
          <SelectBox
            fullWidth
            label="Vehicle"
            value={formik.values?.vehicle}
            name="vehicle"
            options={vehicleOptions}
            onChange={formik.handleChange}
            helperText={formik.touched.vehicle && formik.errors.vehicle}
            size="small"
            disabled={loading}
          />
        </Grid>

        <Grid item md={12}>
          <Box>
            <TextBox
              fullWidth
              label="Important Note:"
              name="description"
              value={formik?.values?.description || ""}
              onChange={formik.handleChange}
              size="small"
              multiline
              rows={7}
              helperText={formik.touched.description && formik.errors.description}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default StepThree;

