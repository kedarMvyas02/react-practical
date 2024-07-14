import React from "react";
import { Button, Divider, Drawer, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../store";
import { addProduct, updateProduct } from "../store/productSlice";
import { getSingleProductById } from "../utils";

interface Props {
  open: boolean;
  onClose: () => void;
  action: "create" | "edit";
  editId?: number;
}

const UpsertProductDrawer: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector((state) => state?.product?.allProducts);

  const formik = useFormik({
    initialValues: {
      id: props?.editId ?? 0,
      description: props?.editId
        ? getSingleProductById(allProducts, props?.editId)?.description!
        : "",
      name: props?.editId
        ? getSingleProductById(allProducts, props?.editId)?.name!
        : "",
      price: props?.editId
        ? getSingleProductById(allProducts, props?.editId)?.price!
        : 0,
      quantity: props?.editId
        ? getSingleProductById(allProducts, props?.editId)?.quantity!
        : 0,
    },
    enableReinitialize: true,
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(30, "Too Long!")
        .required("Required"),
      description: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      price: Yup.number().required("Required"),
      quantity: Yup.number().required("Required"),
    }),
    onSubmit: () => {},
  });

  const { values, handleBlur, handleChange, errors, touched, resetForm } =
    formik;

  return (
    <Drawer anchor="right" open={props.open} onClose={props.onClose}>
      <div className="w-[500px] h-full flex flex-col items-center justify-center">
        <Typography variant="h5" className="capitalize mb-4">
          {props?.action} Product
        </Typography>

        <Divider className="w-full" />

        <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
          <TextField
            name="name"
            id="name"
            label="Product Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={!!touched.name && errors.name}
            error={!!errors.name}
          />

          <TextField
            name="description"
            id="description"
            label="Product Description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={!!touched.description && errors.description}
            error={!!errors.description}
          />

          <TextField
            name="price"
            id="price"
            type="number"
            label="Product Price"
            value={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={!!touched.price && errors.price}
            error={!!errors.price}
          />

          <TextField
            name="quantity"
            id="quantity"
            type="number"
            label="Product Quantity"
            value={values.quantity}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={!!touched.quantity && errors.quantity}
            error={!!errors.quantity}
          />
        </div>

        <Divider className="w-full" />

        <div className="w-full flex items-end justify-end gap-2 pl-10">
          <Button
            variant="contained"
            onClick={() => {
              props.onClose();
              resetForm();
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              if (props?.action === "create") {
                dispatch(
                  addProduct({
                    id: Math.random() * 1000,
                    name: values.name!,
                    description: values.description!,
                    price: values.price!,
                    quantity: values.quantity!,
                  })
                );
              } else {
                dispatch(
                  updateProduct({
                    id: values?.id,
                    name: values.name!,
                    description: values.description!,
                    price: values.price!,
                    quantity: values.quantity!,
                  })
                );
              }
              props.onClose();
              resetForm();
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default UpsertProductDrawer;
