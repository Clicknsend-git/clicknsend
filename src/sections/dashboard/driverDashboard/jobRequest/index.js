import { SelectBox, TextBox } from "@/components/form";
import Iconify from "@/components/iconify/Iconify";
import { Add } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Modal,
  Pagination,
  PaginationItem,
  Rating,
  Stack,
  TextField,
  Typography,
  alpha,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import CountUp from "react-countup";
import DashboardCard from "@/module/dashboard/driverCard/dashboardCard";
import ApplyJobModal from "@/module/dashboard/driverCard/applyJob";
import ApplyViewJob from "@/module/dashboard/driverCard/viewJob";
import ApplyJobEditModal from "@/module/dashboard/driverCard/viewEditJob";
import axiosInstance from "@/utils/axios";
import SkeletonLoader from "@/components/skeleton";
import { JobSekelton } from "@/components/not-found";
import { useFormik } from "formik";
import { useAuthContext } from "@/auth/useAuthContext";
import { useSnackbar } from "notistack";
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from "@/redux/store";
import { getJobAlert, setJobAlertPage } from "@/redux/slices/job/driver";
import { includes, some } from "lodash";

import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  timelineItemClasses,
} from "@mui/lab";
const DashboardJobRequest = () => {
  const dispatch = useDispatch();
  const {
    jobAlert: { pageCount, data, page, pageSize },
  } = useSelector((state) => state.driverJob);

  const router = useRouter();
  const { user } = useAuthContext();
  const driverId = user?.id;

  const { enqueueSnackbar } = useSnackbar();
  //  pass for distance filiter
  const [distance, setDistance] = useState(5);

  const [layout, setLayout] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [select, setSelect] = React.useState("new");

  // const [pageCount, setPageCount] = React.useState(0);
  const [setPage] = React.useState(1);
  // const [pageSize, setPageSize] = React.useState(10);
  const [pageData, setPageData] = React.useState({});
  const [isCheckedDocument, setIsCheckedDocument] = React.useState(false);

  const [applyOpen, setApplyopen] = React.useState(false);
  const [startOpen, setStartopen] = React.useState(false);
  const handleStartOpen = (id) => setStartopen(id);
  const handleStartClose = () => setStartopen(false);

  const [applyOpenViewJob, setApplyOpenViewJob] = React.useState(false);
  const [jobRequestDetails, setJobRequestDetails] = useState([]);

  const handleOpenView = (amount, description) => {
    setApplyOpenViewJob(true);
    setJobRequestDetails({
      requestAmount: amount,
      requestDescription: description,
    });
  };

  const handleCloseViewJob = () => setApplyOpenViewJob(false);
  const [applyOpenEditJob, setApplyOpenEditJob] = React.useState(false);

  const handleOpenEditView = (amount, description, request_id) => {
    setApplyOpenEditJob(true);
    setJobRequestDetails({
      requestAmount: amount,
      requestDescription: description,
      requestId: request_id,
    });
  };
  const handleCloseEditJob = () => setApplyOpenEditJob(false);

  const handleOpen = (id) => setApplyopen(id);
  const handleClose = () => setApplyopen(false);

  const [loader, setLoader] = React.useState(false);
  const handlePageChange = (event, value) => {
    dispatch(setJobAlertPage(value));
  };

  // Add for filter

  const addressDetail = {
    address: [{ type: "pickup" }, { type: "delivery" }],
  };

  // Check if addressDetail is defined before accessing its properties.
  const pickupAddresses = addressDetail?.address?.filter(
    (addressItem) => addressItem.type === "pickup"
  );
  const dropAddresses = addressDetail?.address?.filter(
    (addressItem) => addressItem.type === "drop"
  );

  // const [data, setData] = React.useState([]);

// distance filter

  React.useEffect(() => {
    dispatch(
      getJobAlert({ user_id: user?.id, type: user?.user_type, lat: 0, long: 0 ,distance:distance})
    );
  }, [page,distance]);

  const getData = async () => {

    // setLoader(true);
    // await axiosInstance
    //   .get("api/auth/jobs/list", {
    //     params: { status: "pending", page: Number(page), pageSize: pageSize },
    //   })
    //   .then((response) => {
    //     setLoader(false);
    //     if (response?.status === 200) {
    //       setData(response?.data?.view_data?.data);
    //       setPageCount(response?.data?.view_data?.meta?.last_page);
    //     }
    //   })
    //   .catch((error) => {
    //     setLoader(false);
    //     console.log("DriverJob", error);
    //   });
  };

  React.useEffect(() => {
    getData();
  }, [page]);

  const formik = useFormik({
    initialValues: {
      id: "",
      driver_id: "",
    },
  });

  async function getCheckedDocument() {
    setLoader(true);
    await axiosInstance
      .get("api/auth/profile/my-profile")
      .then((response) => {
        if (response.status === 200) {
          setLoader(false);
          let newData = response.data.view_data.profile;
          if (
            newData.insurance_cert &&
            newData.liability_cert &&
            newData.licence_back &&
            newData.licence_front &&
            newData.v5c_cert &&
            newData.vehicle_cert &&
            newData.nationality_cert &&
            newData.transit_cert
          ) {
            setIsCheckedDocument(true);
          }
          console.log("isCheckedDocument", isCheckedDocument);
        }
      })
      .catch((error) => {
        setLoader(false);
        console.log("ProfileError", error);
      });
  }
  React.useEffect(() => {
    getCheckedDocument();
  }, []);

  const startJobApi = async () => {
    await axiosInstance
      .post("api/auth/jobs/start-job", formik.values)
      .then((response) => {
        if (response.status === 200) {
          // succes
          enqueueSnackbar(
            <Alert
              style={{
                width: "100%",
                padding: "30px",
                backdropFilter: "blur(8px)",
                background: "#ff7533 ",
                fontSize: "19px",
                fontWeight: 800,
                lineHeight: "30px",
              }}
              icon={false}
              severity="success"
            >
              {response?.data?.message}
            </Alert>,
            {
              variant: "success",
              iconVariant: true,
              anchorOrigin: {
                vertical: "top",
                horizontal: "center",
              },
            }
          );
          dispatch(
            getJobAlert({
              user_id: user?.id,
              type: user?.user_type,
              distance : user.distance,
              lat: 0,
              long: 0,
            })
          );
          handleClose(true);
        }
      })
      .catch((error) => {
        const { response } = error;

        // error
        enqueueSnackbar(
          <Alert
            style={{
              width: "100%",
              padding: "30px",
              filter: blur("8px"),
              background: "#ffe9d5 ",
              fontSize: "19px",
              fontWeight: 800,
              lineHeight: "30px",
            }}
            icon={false}
            severity="error"
          >
            {response?.data?.error}
          </Alert>,
          {
            variant: "error",
            iconVariant: true,
            anchorOrigin: {
              vertical: "top",
              horizontal: "center",
            },
          }
        );
        console.log(error);
      });
  };

  useEffect(() => {
    formik.setFieldValue("id", startOpen);
  }, [startOpen]);

  useEffect(() => {
    formik.setFieldValue("driver_id", user?.id);
  }, [user, user?.id]);

  return (
    <React.Fragment>
      <Box py={3} pb={12}>
        <Container>
          <Box py={5}>
            <DashboardCard jobalert={data?.length} />
          </Box>

          <Box
            py={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {loader ? (
              <SkeletonLoader />
            ) : (
              <Grid container spacing={2} justifyContent="space-between">
                <Grid item md={6}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography
                      fontSize="1.75rem"
                      fontWeight={500}
                      color="primary"
                    >
                      Jobs For You 
                    </Typography>

                    <Box
                      borderRadius="50%"
                      border="1px solid"
                      borderColor={(theme) => theme.palette.primary.main}
                      color={(theme) => theme.palette.primary.main}
                      py={0.6}
                      px={1.8}
                    >
                      <Typography
                        fontSize="1.3rem"
                        fontWeight={500}
                        color="primary"
                      >
                        <CountUp
                          start={0}
                          duration={1}
                          end={isCheckedDocument ? data?.length : "0"}
                          enableScrollSpy={true}
                          scrollSpyDelay={200}
                        />
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>

{/* add for Filter with distance */}

                <Grid item md={6}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    {/* <Typography
                      fontSize="1.50rem"
                      fontWeight={300}
                      color="primary"
                    >
                      Filter with distance1
                    </Typography> */}
                    <FormControl fullWidth>
                      <InputLabel id="distance-filter-label">
                        Select Distance
                      </InputLabel>
                      <Select
                        labelId="distance-filter-label"
                        value={distance}
                        label="Select Distance"
                        onChange={(e) => setDistance(e.target.value)}
                      >
                        <MenuItem value={1}>1 miles</MenuItem>
                        <MenuItem value={2}>2 miles</MenuItem>
                        <MenuItem value={5}>5 miles</MenuItem>
                        <MenuItem value={10}>10 miles</MenuItem>
                        <MenuItem value={12}>12 miles</MenuItem>
                        <MenuItem value={15}>15 miles</MenuItem>
                        <MenuItem value={22}>22 miles</MenuItem>
                        <MenuItem value={30}>30 miles</MenuItem>
                        <MenuItem value={40}>40 miles</MenuItem>
                        <MenuItem value={50}>50 miles</MenuItem>
                      </Select>
                    </FormControl>

                    


                  </Stack>
                </Grid>
                
              </Grid>
            )}
          </Box>

          {isCheckedDocument ? (
            <Box py={2} sx={{ background: " " }}>
              <Grid container rowSpacing={0} justifyContent="center">
                {data && data?.length > 0 ? (
                  data.map((item, index) => {
                    let productDetail =
                      item?.items && item?.items?.length > 0 && item?.items[0];
                    let addressDetail =
                      item?.items && item?.items?.length > 0 && item?.items[0];

                    let request_amount = 0;
                    let request_description = null;
                    let request_id;
                    item.job_requests.forEach((jobRequest) => {
                      if (user.id === jobRequest.driver_id) {
                        request_amount = jobRequest.ammount;
                        request_description =
                          jobRequest.description || request_description;
                        request_id = jobRequest.id || request_id;
                      }
                    });
                    return (
                      <React.Fragment key={index}>
                        <Grid container rowSpacing={0}>
                          <Grid item md={12}>
                            <Card
                              sx={{
                                my: 2,
                                borderWidth: "2px",
                                ":hover": {
                                  borderColor: "#ff7534",
                                  transition: " all 0.3s ease-in-out",
                                },
                              }}
                              variant="outlined"
                            >
                              <Stack
                                direction="row"
                                alignItems="center"
                                spacing={0.5}
                                px={2}
                                py={1.4}
                              >
                                <Box sx={{ width: "95%" }}>
                                  <Typography
                                    color="common.black"
                                    fontSize={17}
                                    sx={{
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                    }}
                                    fontWeight={500}
                                  >
                                    {item.name}
                                  </Typography>
                                </Box>
                              </Stack>

                              <Divider />
                              <CardContent>
                                <Grid container spacing={2} alignItems="start">
                                  <Grid item md={3}>
                                    <Box>
                                      <Typography
                                        fontSize={28}
                                        fontWeight={500}
                                      >
                                        {/* {item.name} */}
                                      </Typography>
                                    </Box>
                                    <Stack direction="row" spacing={2} mb={2}>
                                      {/* Material */}
                                      <Stack
                                        direction="row"
                                        alignItems="center"
                                        spacing={0.6}
                                      >
                                        <Stack alignItems="center">
                                          <Iconify
                                            icon="bx:layer"
                                            color={(theme) =>
                                              theme.palette.primary.main
                                            }
                                            width={22}
                                          />
                                        </Stack>
                                        <Box>
                                          <Typography
                                            fontSize={12}
                                            color="grey"
                                          >
                                            {productDetail?.product?.material}
                                          </Typography>
                                        </Box>
                                      </Stack>
                                      {/* Dimensions */}
                                      <Stack
                                        direction="row"
                                        alignItems="center"
                                        spacing={0.6}
                                      >
                                        <Stack alignItems="center">
                                          <Iconify
                                            icon="gg:expand"
                                            color={(theme) =>
                                              theme.palette.primary.main
                                            }
                                            width={22}
                                          />
                                        </Stack>
                                        <Box>
                                          <Typography
                                            fontSize={12}
                                            color="grey"
                                          >
                                            {`${
                                              productDetail?.product?.length ||
                                              "N/A"
                                            }*${
                                              productDetail?.product?.width ||
                                              "N/A"
                                            }*${
                                              productDetail?.product?.height ||
                                              "N/A"
                                            }`}
                                          </Typography>
                                        </Box>
                                      </Stack>
                                      {/* Quantity */}
                                      <Stack
                                        direction="row"
                                        alignItems="center"
                                        spacing={0.6}
                                      >
                                        <Stack alignItems="center">
                                          <Iconify
                                            icon="uil:weight"
                                            color={(theme) =>
                                              theme.palette.primary.main
                                            }
                                            width={22}
                                          />
                                        </Stack>
                                        <Box>
                                          <Typography
                                            fontSize={12}
                                            color="grey"
                                          >
                                            {productDetail?.product?.quantity}{" "}
                                            Qty
                                          </Typography>
                                        </Box>
                                      </Stack>
                                    </Stack>
                                    <Stack direction="row" spacing={1}>
                                      {/* Displaying product images */}
                                      {item.items.map((elem, index) => {
                                        if (index > 2) {
                                          return "";
                                        }
                                        return (
                                          <React.Fragment key={index}>
                                            <Box
                                              component="img"
                                              alt={elem.product.image}
                                              src={`${elem.product.base_url}${elem.product.image}`}
                                              sx={{
                                                width: "83px",
                                                height: "59px",
                                                border: "1px solid lightgrey",
                                                objectFit: "cover",
                                              }}
                                            />
                                          </React.Fragment>
                                        );
                                      })}
                                    </Stack>
                                  </Grid>
                                  <Grid item md={3}>
                                    {/* Pickup Date */}
                                    <Box mb={4}>
                                      <Box>
                                        <Typography
                                          fontSize={13}
                                          fontWeight={600}
                                        >
                                          Pick up Date
                                        </Typography>
                                      </Box>
                                      <Stack
                                        direction="row"
                                        spacing={1}
                                        alignItems="center"
                                      >
                                        <Box
                                          sx={{
                                            backgroundColor: "#FEE6BB",
                                            width: "28px",
                                            height: "28px",
                                            borderRadius: "50%",
                                            p: "5px",
                                          }}
                                        >
                                          <Iconify
                                            color={(theme) =>
                                              theme.palette.primary.main
                                            }
                                            icon="majesticons:calendar-line"
                                          />
                                        </Box>
                                        <Box>
                                          <Typography
                                            color="grey"
                                            fontWeight={400}
                                            fontSize={13}
                                          >
                                            {productDetail?.product
                                              ?.pickup_date || "N/A"}
                                          </Typography>
                                        </Box>
                                      </Stack>
                                    </Box>
                                    {/* Pickup Time */}
                                    <Box>
                                      <Typography
                                        fontSize={13}
                                        fontWeight={600}
                                      >
                                        Pick up Time
                                      </Typography>
                                    </Box>
                                    <Stack
                                      direction="row"
                                      spacing={1}
                                      alignItems="center"
                                    >
                                      <Box
                                        sx={{
                                          backgroundColor: "#FEE6BB",
                                          width: "28px",
                                          height: "28px",
                                          borderRadius: "50%",
                                          p: "5px",
                                        }}
                                      >
                                        <Iconify
                                          color={(theme) =>
                                            theme.palette.primary.main
                                          }
                                          icon="majesticons:calendar-line"
                                        />
                                      </Box>
                                      <Box>
                                        <Typography
                                          color="grey"
                                          fontWeight={400}
                                          fontSize={13}
                                        >
                                          {productDetail?.product
                                            ?.pickup_time || "N/A"}
                                        </Typography>
                                      </Box>
                                    </Stack>
                                  </Grid>
                                  <Grid item md={3}>
                                    {/* Delivery out Date */}
                                    <Box mb={4}>
                                      <Box>
                                        <Typography
                                          fontSize={13}
                                          fontWeight={600}
                                        >
                                          Delivery out Date
                                        </Typography>
                                      </Box>
                                      <Stack
                                        direction="row"
                                        spacing={1}
                                        alignItems="center"
                                      >
                                        <Box
                                          sx={{
                                            backgroundColor: "#FEE6BB",
                                            width: "28px",
                                            height: "28px",
                                            borderRadius: "50%",
                                            p: "5px",
                                          }}
                                        >
                                          <Iconify
                                            color={(theme) =>
                                              theme.palette.primary.main
                                            }
                                            icon="majesticons:calendar-line"
                                          />
                                        </Box>
                                        <Box>
                                          <Typography
                                            color="grey"
                                            fontWeight={400}
                                            fontSize={13}
                                          >
                                            {productDetail?.product
                                              ?.drop_date || "N/A"}
                                          </Typography>
                                        </Box>
                                      </Stack>
                                    </Box>
                                    {/* Delivery out Time */}
                                    <Box>
                                      <Typography
                                        fontSize={13}
                                        fontWeight={600}
                                      >
                                        Delivery out Time
                                      </Typography>
                                    </Box>
                                    <Stack
                                      direction="row"
                                      spacing={1}
                                      alignItems="center"
                                    >
                                      <Box
                                        sx={{
                                          backgroundColor: "#FEE6BB",
                                          width: "28px",
                                          height: "28px",
                                          borderRadius: "50%",
                                          p: "5px",
                                        }}
                                      >
                                        <Iconify
                                          color={(theme) =>
                                            theme.palette.primary.main
                                          }
                                          icon="majesticons:calendar-line"
                                        />
                                      </Box>
                                      <Box>
                                        <Typography
                                          color="grey"
                                          fontWeight={400}
                                          fontSize={13}
                                        >
                                          {productDetail?.product?.drop_time ||
                                            "N/A"}
                                        </Typography>
                                      </Box>
                                    </Stack>
                                  </Grid>

                                  {/* Timeline for pickup and drop addresses */}
                                  <Grid item md={3}>
                                    <Timeline
                                      sx={{
                                        [`& .${timelineItemClasses.root}:before`]:
                                          {
                                            flex: 0,
                                            padding: 0,
                                          },
                                      }}
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          flexDirection: "column",
                                        }}
                                      >
                                        {console.log(
                                          addressDetail?.address,
                                          "sd"
                                        )}
                                        {addressDetail?.address
                                          .filter((ds) => ds.type === "pickup")
                                          ?.map((addressItem, index) => (
                                            <TimelineItem
                                              key={index}
                                              sx={{
                                                "&.MuiTimelineItem-root": {
                                                  minHeight: "50px",
                                                },
                                              }}
                                            >
                                              <TimelineSeparator>
                                                <Iconify
                                                  color={(theme) =>
                                                    theme.palette.primary.main
                                                  }
                                                  width={30}
                                                  icon="carbon:location-star-filled"
                                                />

                                                <TimelineConnector
                                                  sx={{
                                                    "&.MuiTimelineConnector-root":
                                                      {
                                                        border: (theme) =>
                                                          `1px solid ${alpha(
                                                            theme.palette.common
                                                              .black,
                                                            0.6
                                                          )}`,
                                                        width: "0px",
                                                        borderStyle: "dashed",
                                                        backgroundColor:
                                                          "transparent",
                                                      },
                                                  }}
                                                />
                                              </TimelineSeparator>

                                              {/* map the address hare */}

                                              <TimelineContent
                                                key={index}
                                                sx={{
                                                  fontSize: 14,
                                                  fontWeight: 600,
                                                }}
                                              >
                                                {addressItem.address}{" "}
                                                <Typography
                                                  fontSize={10}
                                                  component="span"
                                                  color="primary"
                                                >
                                                  {addressItem.type},
                                                </Typography>
                                              </TimelineContent>
                                            </TimelineItem>
                                          ))}
                                      </div>

                                      <div
                                        style={{
                                          display: "flex",
                                          flexDirection: "column",
                                        }}
                                      >
                                        {console.log(
                                          addressDetail?.address,
                                          "sd"
                                        )}
                                        {addressDetail?.address
                                          .filter((ds) => ds.type === "drop")
                                          ?.map((addressItem, index) => (
                                            <TimelineItem
                                              key={index} // Remember to add a unique key prop when using map
                                              sx={{
                                                "&.MuiTimelineItem-root": {
                                                  minHeight: "50px",
                                                },
                                              }}
                                            >
                                              <TimelineSeparator>
                                                <Iconify
                                                  width={30}
                                                  icon="carbon:location-star-filled"
                                                />
                                              </TimelineSeparator>

                                              <TimelineContent
                                                sx={{
                                                  fontSize: 14,
                                                  fontWeight: 600,
                                                }}
                                              >
                                                {addressItem.address}{" "}
                                                {/* Use addressItem instead of addressDetail?.address[0] */}
                                                <Typography
                                                  fontSize={10}
                                                  component="span"
                                                  color="primary"
                                                >
                                                  {addressItem.type}{" "}
                                                  {/* Use addressItem instead of addressDetail?.address[0] */}
                                                </Typography>
                                              </TimelineContent>
                                            </TimelineItem>
                                          ))}
                                      </div>
                                    </Timeline>
                                  </Grid>
                                </Grid>

                                <Divider sx={{ my: 2 }} />
                                <Box>
                                  <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                  >
                                    <Typography
                                      variant="subtitle2"
                                      sx={{
                                        fontSize: "15px",
                                        fontWeight: "600",
                                        display: "flex",
                                        alignItems: "flex-start",
                                      }}
                                    >
                                      {request_amount > 0 &&
                                        " Bid Amount: " + request_amount}
                                    </Typography>
                                    <Stack direction="row" spacing={1}>
                                      {/* View Job Button */}
                                      <Box>
                                        <Button
                                          sx={{ fontWeight: 500 }}
                                          fullWidth
                                          variant="contained"
                                          startIcon={
                                            <Iconify icon="carbon:view-filled" />
                                          }
                                          onClick={() =>
                                            router.push(
                                              `/dashboard/driver/view_job/${item?.id}`
                                            )
                                          }
                                        >
                                          View Job
                                        </Button>
                                      </Box>
                                      {some(item?.job_requests, {
                                        driver_id: driverId,
                                      }) && (
                                        <Box>
                                          <Button
                                            fullWidth
                                            variant="contained"
                                            onClick={() => {
                                              handleOpenView(
                                                request_amount,
                                                request_description
                                              );
                                            }}
                                            sx={{
                                              fontWeight: 500,
                                            }}
                                          >
                                            View Bid
                                          </Button>
                                        </Box>
                                      )}
                                      {some(item?.job_requests, {
                                        driver_id: driverId,
                                      }) && (
                                        <Box>
                                          <Button
                                            fullWidth
                                            variant="contained"
                                            onClick={() => {
                                              handleOpenEditView(
                                                request_amount,
                                                request_description,
                                                request_id
                                              );
                                            }}
                                            sx={{
                                              fontWeight: 500,
                                            }}
                                          >
                                            Edit Bid
                                          </Button>
                                        </Box>
                                      )}
                                      {/* Apply Job Button */}
                                      <Box>
                                        <Button
                                          color={
                                            !some(item?.job_requests, {
                                              driver_id: driverId,
                                            })
                                              ? "dark"
                                              : "warning"
                                          }
                                          fullWidth
                                          variant="outlined"
                                          startIcon={
                                            <Iconify
                                              sx={{
                                                "& svg, g": {
                                                  stroke: (theme) =>
                                                    !some(item?.job_requests, {
                                                      driver_id: driverId,
                                                    })
                                                      ? theme?.palette.dark.main
                                                      : theme?.palette.warning
                                                          .main,
                                                },
                                              }}
                                              icon="icon-park:check-correct"
                                            />
                                          }
                                          onClick={() => {
                                            !some(item?.job_requests, {
                                              driver_id: driverId,
                                            }) && handleOpen(item?.id);
                                          }}
                                          sx={{
                                            fontWeight: 500,
                                          }}
                                        >
                                          {console.log(
                                            "CDdvd",
                                            some(item?.job_requests, {
                                              driver_id: driverId,
                                            })
                                          )}
                                          {!some(item?.job_requests, {
                                            driver_id: driverId,
                                          })
                                            ? "Apply Job"
                                            : "Pending"}
                                        </Button>
                                      </Box>
                                    </Stack>
                                  </Stack>
                                </Box>
                              </CardContent>
                            </Card>
                          </Grid>
                        </Grid>
                      </React.Fragment>
                    );
                  })
                ) : (
                  <>{!loader && <JobSekelton title="No active Jobs..." />}</>
                )}
              </Grid>
              <Box>
                <Stack alignItems="center" justifyContent="center">
                  <Pagination
                    count={pageCount}
                    color="primary"
                    page={page}
                    onChange={handlePageChange}
                    variant="outlined"
                    shape="rounded"
                    renderItem={(item) => (
                      <PaginationItem
                        slots={{
                          previous: () => {
                            return (
                              <Stack
                                direction="row"
                                spacing={0.5}
                                alignItems="center"
                              >
                                <NavigateBeforeIcon />
                              </Stack>
                            );
                          },
                          next: () => {
                            return (
                              <Stack
                                direction="row"
                                spacing={0.5}
                                alignItems="center"
                              >
                                <NavigateNextIcon />
                              </Stack>
                            );
                          },
                        }}
                        {...item}
                      />
                    )}
                  />
                </Stack>
              </Box>
            </Box>
          ) : (
            <Box>
              {/* because this is map multipal time so comm */}

              <Typography variant="h4" textAlign="left">
                Please Fill all documents for apply jobs
              </Typography>
            </Box>
          )}
        </Container>

        <Box>
          <ApplyJobModal
            handleClose={handleClose}
            job_id={applyOpen}
            applyOpen={applyOpen}
            getData={getData}
          />
        </Box>
        <Box>
          <ApplyViewJob
            handleCloseViewJob={handleCloseViewJob}
            applyOpenViewJob={applyOpenViewJob}
            jobRequestDetails={jobRequestDetails}
          />
        </Box>
        <Box>
          <ApplyJobEditModal
            handleCloseEditJob={handleCloseEditJob}
            applyOpenEditJob={applyOpenEditJob}
            jobRequestDetails={jobRequestDetails}
          />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default DashboardJobRequest;
