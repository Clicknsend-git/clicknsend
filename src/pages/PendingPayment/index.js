import React, { useState } from "react";
import {
  Container,
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Typography,
  Button,
  Link,
} from "@mui/material";
import Header from "@/layout/primaryWeb/header";
import Footer from "@/layout/primaryWeb/footer";
import ViewInvoiceModal from "../Modals/Viewinvoicemodal";
import axios from "axios"; 

const PendingPayment = () => {
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [modalOpen, setModalOpen] = useState(false); 
  const [invoiceDetails, setInvoiceDetails] = useState(null); 

  const handleOpenModal = (invoiceNumber) => {
    setSelectedInvoice(invoiceNumber);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedInvoice(null);
  };


   const fetchDataInvoiceList = async () => {
    try {
      const userType =
        user?.user_type == "company"
          ? user?.profile?.company_type
          : user?.user_type;
      const userId = user?.id;
      console.log("userType", userType);

      const response = await axiosInstance.get(`/api/auth/invoice/list?user_id=${userId}&user_type=${userType}`);
      if (response.status === 200) {
        setData(response.data.view_data.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };


  const viewInvoice = async (id) => {
    try {
      const response = await axios.get(`/api/auth/invoice/view/${id}`);
      if (response.status === 200) {
        setInvoiceDetails(response.data);
        handleOpenModal(id);
      }
    } catch (error) {
      console.log("Error fetching invoice", error);
    }
  };

  const invoices = [
    { id: "INV-001", amount: "$250.00", dueDate: "2024-08-15", status: "Pending" },
    { id: "INV-002", amount: "$500.00", dueDate: "2024-08-20", status: "Pending" },
  ];

  return (
    <Container maxWidth="lg">
      <Box>
        <Header />
      </Box>
      <Box mt={20} mb={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Pending Payments
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Invoice Number</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Due Date</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={() => viewInvoice(row.id)}
                    >
                      {row.id}
                    </Link>
                  </TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                  <TableCell align="right">{row.dueDate}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="primary">
                      Pay now
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <ViewInvoiceModal
        open={modalOpen}
        onClose={handleCloseModal}
        invoiceNumber={selectedInvoice}
      />

      <Box mt={20}>
        <Footer />
      </Box>
    </Container>
  );
};

export default PendingPayment;