import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppDispatch } from "../store";
import { Button } from "@mui/material";
import { removeProduct } from "../store/productSlice";
import UpsertProductDrawer from "./UpsertProductDrawer";
import { IProducts } from "../utils/interface";

interface Props {
  allProducts: IProducts[];
}

const ProductList: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();

  const [state, setState] = useState({
    drawerOpenId: 0,
  });

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props?.allProducts.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right" className="flex">
                  <Button
                    variant="outlined"
                    onClick={() =>
                      setState((prev) => ({ ...prev, drawerOpenId: row.id }))
                    }
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      dispatch(removeProduct(row.id));
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <UpsertProductDrawer
        open={!!state.drawerOpenId}
        onClose={() => setState((prev) => ({ ...prev, drawerOpenId: 0 }))}
        action="edit"
        editId={state.drawerOpenId}
      />
    </div>
  );
};

export default ProductList;
