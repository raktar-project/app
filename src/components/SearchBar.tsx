import { ChangeEvent, FC, useState } from "react";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { CratesDocument } from "../generated/graphql.ts";
import client from "../client.ts";
import { useNavigate } from "react-router-dom";

const StyledTextField = styled(TextField)(({ theme }) => ({
  color: "#fff",
  background: "rgba(255, 255, 255, 0.15)",
  borderRadius: "4px",
  width: "250px",
  "& input": {
    color: "#fff !important",
  },
  "& fieldset": {
    borderWidth: "0px",
    "& fieldset:hover, & fieldset:focus, & fieldset:active": {
      borderWidth: "0px",
    },
    "& .MuiInputBase-input": {
      padding: theme.spacing(2, 1, 1, 2),
      transition: theme.transitions.create("width"),
      color: "#fff",
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  },
}));

const SearchBar: FC = () => {
  const [options, setOptions] = useState<string[]>([]);
  const [filterText, setFilterText] = useState<string>("");
  const navigate = useNavigate();

  const onChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
    const result = await client
      .query(CratesDocument, { filter: event.target.value, limit: 8 })
      .toPromise();
    if (result.data) {
      setOptions(result.data.crates.map((c) => c.name));
    }
  };

  const onSelect = (_event: unknown, value: unknown) => {
    setFilterText("");
    navigate(`crates/${value}`);
  };

  return (
    <Autocomplete
      disablePortal
      disableClearable
      freeSolo
      onChange={onSelect}
      inputValue={filterText}
      sx={{ marginLeft: 4 }}
      renderInput={(params) => (
        <StyledTextField
          {...params}
          placeholder="Search..."
          size="small"
          onChange={onChange}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: "white", marginLeft: "8px" }} />
              </InputAdornment>
            ),
          }}
        />
      )}
      options={options}
    />
  );
};

export default SearchBar;
