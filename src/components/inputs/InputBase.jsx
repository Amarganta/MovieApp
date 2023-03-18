import * as React from "react";
import TextField from "@mui/material/TextField";

export default function InputBase({ id, label, variant }) {
  return <TextField id={id} label={label} variant={variant} />;
}
