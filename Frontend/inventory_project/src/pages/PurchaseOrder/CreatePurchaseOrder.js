import {Box , Breadcrumbs , Typography} from '@mui/material';
// eslint-disable-next-line no-unused-vars
const CreatePurchaseOrder =()=>{
    return <Box> 
   <Box display = "flex" justifyContent = {"space-between"}>
    <Breadcrumbs>
    <Typography varient= "body2">Home</Typography>
    <Typography varient = "h5">Create a purchase order </Typography>
    </Breadcrumbs>
   </Box>
    </Box>
}
export default CreatePurchaseOrder;