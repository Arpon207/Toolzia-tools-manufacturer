import {
  Backdrop,
  Box,
  CircularProgress,
  Pagination,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Tool from "./Tool";
import "./tools.css";

import { makeRequest } from "./../../axios";
import Categories from "./Categories";

import background from "../../assets/curve_overlay_big.png";

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
    <Box
      sx={{
        background: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: 1,
        backgroundColor: "#1A191D",
        height: "fit-content",
        padding: "2rem 0",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "95%",
            sm: "80%",
          },
          margin: "2rem auto",
        }}
        ref={toolsRef}
        className="tools"
      >
        <Typography
          variant="h3"
          component={"h3"}
          sx={{
            color: "white",
            textAlign: "center",
          }}
        >
          Precision Tools From Toolzia
        </Typography>
        <Typography
          variant="p"
          component={"p"}
          sx={{
            color: "white",
            margin: "1rem 0 3rem",
            textAlign: "center",
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus ea
          eius eligendi voluptate vel cupiditate ut accusamus iusto possimus
          culpa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
          corrupti eveniet voluptates obcaecati necessitatibus quas aspernatur
          quidem asperiores numquam nam, suscipit temporibus explicabo, pariatur
        </Typography>
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
          <Typography component="p" color="white">
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
    </Box>
  );
}
