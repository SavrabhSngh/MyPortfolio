import * as React from "react";
import "./Skeleton.css";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Skeletons() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width="100vw" height="8vh" />
      <div className="skeleton-rounded">
        <Skeleton variant="rounded" width="48vw" height="50vh" />
        <Skeleton variant="rounded" width="48vw" height="50vh" />
      </div>
      <div className="skeleton-circular">
        <Skeleton variant="circular" width="60px" height="60px" />
        <Skeleton
          style={{ marginLeft: "1vw" }}
          variant="circular"
          width="60px"
          height="60px"
        />
        <Skeleton
          style={{ marginLeft: "1vw" }}
          variant="circular"
          width="60px"
          height="60px"
        />
      </div>
      <Skeleton
        className="skeleton-text"
        variant="text"
        sx={{ fontSize: "18px" }}
      />
      <Skeleton
        classname="skeleton-rectangular"
        variant="rectangular"
        height="22vh"
      />
    </Stack>
  );
}
