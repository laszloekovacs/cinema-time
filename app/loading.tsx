import { CircularProgress, Grid } from "@chakra-ui/react"
import React from "react"

const Loading = () => (
  <Grid h="100%" placeItems="center">
    <CircularProgress isIndeterminate color="green.300" />
  </Grid>
)

export default Loading
