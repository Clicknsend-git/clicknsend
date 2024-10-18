import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Modal, Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';



export default function ViewInvoiceModal({ isOpen, onClose ,invoiceDetails}) {
  const invoiceRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
  });

  if (!isOpen) return null;

  return (
    <Modal open={isOpen} onClose={onClose} aria-labelledby="invoice-modal-title">
      <Box sx={modalStyles.box}>
      <Typography 
  id="invoice-modal-title" 
  variant="h4" 
  component="h2" 
  sx={{ 
    mb: 2, 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center' 
  }}
>
  Invoice Details
</Typography>

        <Box ref={invoiceRef} sx={containerStyle}>
          <Box sx={pdfContainerStyle}>
          <Box style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="/logo.png" style={{ width: '150px' }}/>
</Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
            
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6">Invoice To:</Typography>

                <Typography variant="h6" sx={{ mt: 2 }}>Member Id: {invoiceDetails.invoice?.job_id}</Typography>
              </Box>
              <Box sx={{ flex: 1, textAlign: 'right' }}>
                
                <Typography variant="h5" sx={{ mt: 2 }}>INVOICE</Typography>
                <Typography variant="h6">ClickNSend LTD</Typography>
                <Typography>51 MADELEINE CLOSE ROMFORD,RM6 4BJ,UK</Typography>
                <Box sx={{ lineHeight: 1.5, mt: 1 }}>
                  <Typography>Tel.: +447538340033</Typography>
                  <Typography>Email: CAGTRANSPORT@outlook.com</Typography>
                </Box>
                <Typography variant="h6" sx={{ mt: 2 }}>Member ID: {invoiceDetails.invoice?.job_id}</Typography>
                <Typography><strong>Invoice No : {invoiceDetails?.invoice?.invoice_number}</strong></Typography>
                <Typography><strong>Invoice Date: {invoiceDetails.invoice?.created_at}</strong></Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            </Box>
            <TableContainer component={Paper}>
              <Table sx={tableStyles}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={tableCellStyles}>Qty</TableCell>
                    <TableCell sx={tableCellStyles}>Description</TableCell>
                    <TableCell sx={tableCellStyles}>Unit Cost</TableCell>
                    <TableCell sx={tableCellStyles}>Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell sx={tableCellStyles}>1</TableCell>
                    <TableCell sx={tableCellStyles}>
                      <Typography>
                        <strong>Date Ordered:</strong> {invoiceDetails.invoice?.created_at}<br />
                        <strong>Your job:</strong> {invoiceDetails.invoice.job?.name}<br />
                        <strong>Pick up from:</strong> {}<br />
                        <strong>Vehicle type:</strong> {invoiceDetails.invoice.job?.vehical_type}<br />
                        <strong>Vehical:</strong> {invoiceDetails.invoice.job?.vehicle}<br/>
                        <strong>Delivered to:</strong>{}<br />
                        <strong>Vehicle type:</strong> {invoiceDetails.invoice.job?.vehical_type}<br />
                        <strong>Vehical:</strong> {invoiceDetails.invoice.job?.vehicle}<br />
                      </Typography>
                    </TableCell>
                    <TableCell sx={tableCellStyles}>£{invoiceDetails?.invoice?.amount}</TableCell>
                    <TableCell sx={tableCellStyles}>£{invoiceDetails?.invoice?.amount}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{ display: 'contents', justifyContent: 'space-between', mt: 5, padding: 10 }}>
              <Box sx={{ textAlign: 'center', flex: 1 }}>
                <Typography><strong>Please make the payment first to start the job</strong></Typography>
              </Box>
              <TableContainer component={Paper} sx={{ width: 'auto', flex: 1, ml: 4 }}>
                <Table sx={tableStyles}>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={tableCellStyles}>Subtotal</TableCell>
                      <TableCell sx={tableCellStyles}>£{invoiceDetails?.invoice?.amount}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={tableCellStyles}>VAT</TableCell>
                      <TableCell sx={tableCellStyles}>£{invoiceDetails?.invoice?.amount*18/100}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={tableCellStyles}>Total</TableCell>
                      <TableCell sx={tableCellStyles}>
    £{(Number(invoiceDetails?.invoice?.amount || 0) + (Number(invoiceDetails?.invoice?.amount || 0) * 18 / 100)).toFixed(2)}
  </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" component="div" sx={{ borderBottom: '1px solid #ccc', pb: 1 }}>Notes</Typography>
              <Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
              <Typography>{invoiceDetails.invoice.job?.description}</Typography>
              </Paper>
            </Box>
          
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Typography><strong>VAT :</strong> GB 355509879</Typography>
              <hr />
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handlePrint}>Print as PDF</Button>
          <Button variant="outlined" onClick={onClose}>Close</Button>
        </Box>
      </Box>
    </Modal>
  );
}

const modalStyles = {
  box: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxHeight: '90vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 1,
  },
};

const containerStyle = {
  maxWidth: '950px',
  margin: '20px auto',
  padding: '20px',
};

const pdfContainerStyle = {
  border: '2px solid #ddd',
  padding: '20px',
  borderRadius: '8px',
};

const tableStyles = {
  '& .MuiTableCell-root': {
    border: '1px solid #ddd',
  },
};

const tableCellStyles = {
  border: '1px solid #ddd',
  padding: '8px',
};