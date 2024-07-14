import React, { useEffect, useMemo, useState } from "react";
import ProductList from "./components/ProductList";
import { fetchAllProducts } from "./store/productSlice";
import { useAppDispatch, useAppSelector } from "./store";
import {
  getLocalStorageData,
  hardCodedQuantity,
  updateLocalStorage,
} from "./utils";
import { Button, TextField } from "@mui/material";
import UpsertProductDrawer from "./components/UpsertProductDrawer";

function App() {
  const [state, setState] = useState({
    drawerOpen: false,
    searchText: "",
  });

  const dispatch = useAppDispatch();
  const allProducts = useAppSelector((state) => state?.product?.allProducts);

  const filteredAppProducts = useMemo(() => {
    return allProducts.filter((val) => {
      if (state.searchText) {
        if (
          val.id
            .toString()
            .toLowerCase()
            .includes(state.searchText.toLowerCase())
        )
          return true;
        if (val.name.toLowerCase().includes(state.searchText.toLowerCase()))
          return true;
        if (
          val.description.toLowerCase().includes(state.searchText.toLowerCase())
        )
          return true;
        if (
          val.quantity
            .toString()
            .toLowerCase()
            .includes(state.searchText.toLowerCase())
        )
          return true;
        if (
          val.price
            .toString()
            .toLowerCase()
            .includes(state.searchText.toLowerCase())
        )
          return true;
        return false;
      }
      return true;
    });
  }, [allProducts, state.searchText]);

  useEffect(() => {
    let allProductsFound = getLocalStorageData();

    if (allProductsFound) {
      allProductsFound = JSON.parse(allProductsFound);
      dispatch(fetchAllProducts(allProductsFound));
    } else {
      updateLocalStorage(hardCodedQuantity);
      dispatch(fetchAllProducts(hardCodedQuantity));
    }
  }, []);

  return (
    <div>
      <div className="flex justify-between p-4">
        <TextField
          name="search-products"
          id="search-products"
          placeholder="Search Name, Desc, Price, Quantity"
          className="w-80"
          value={state.searchText}
          onChange={(e) =>
            setState((prev) => ({ ...prev, searchText: e.target.value }))
          }
        />

        <Button
          variant="contained"
          startIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          }
          onClick={() => setState((prev) => ({ ...prev, drawerOpen: true }))}
        >
          Create New Product
        </Button>
      </div>
      <ProductList allProducts={filteredAppProducts} />
      <UpsertProductDrawer
        open={state.drawerOpen}
        onClose={() => setState((prev) => ({ ...prev, drawerOpen: false }))}
        action="create"
      />
    </div>
  );
}

export default App;
