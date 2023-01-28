import { useState, useEffect, useRef } from "react";
import "./tools.css";
import Tool from "./Tool";
import {
  Backdrop,
  CircularProgress,
  Pagination,
  Box,
  Typography,
} from "@mui/material";

import { makeRequest } from "./../../axios";
import Categories from "./Categories";

export default function Tools() {
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setLoading(true);
    makeRequest
      .get(`/tools/all?category=${value}&currentPage=${currentPage}`)
      .then((response) => {
        setLoading(false);
        setData(response.data);
      });
  }, [value, currentPage, data?.tools?.length < 6]);

  const toolsRef = useRef(null);

  const handlePage = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: toolsRef.current.offsetTop, behavior: "smooth" });
  };

  return (
    <Box sx={{ width: "90%", margin: "2rem auto" }} ref={toolsRef}>
      <Categories
        handleChange={handleChange}
        value={value}
        setCurrentPage={setCurrentPage}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            lg: "repeat(3,1fr)",
          },
          gap: "1rem",
          mt: "1rem",
          position: "relative",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {data?.tools?.map((tool, i) => (
          <Tool key={i} tool={tool} />
        ))}
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginTop: "1rem",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Typography component="p" color="gray">
          showing 6 out of {data?.count} items
        </Typography>
        <Pagination
          width="fit-content"
          size="medium"
          color="warning"
          count={data?.tools?.length >= 6 ? data?.count / 6 || 0 : 1}
          defaultPage={currentPage}
          page={currentPage}
          onChange={handlePage}
          disabled={data?.tools?.length < 6}
        />
      </Box>
    </Box>
  );
}
