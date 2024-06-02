import { useState } from "react";
import StatusSelector from "./components/StatusSelector";
import useFilter from "./hooks/useFilter";
import ContainsTextSpecification from "./models/Specification/ContainsText";
import { AndSpecification } from "./models/Specification/Specification";
import { Box, TextField } from "@mui/material";
import ConainsStatusSpecification from "./models/Specification/ContainsStatusSpecification";

const list = [
  { name: "Place 1", state: "SSA" },
  { name: "Place 2", state: "REC" },
  { name: "Place 3", state: "IOS" },
];

const statusList = ["SSA", "REC", "IOS"];

function App() {
  const [textSearch, setTextSearch] = useState("");
  const [statusSearch, setStatusSearch] = useState<Array<string>>(statusList);

  const textFilterSpec = new ContainsTextSpecification("name", textSearch);
  const statusFilterSpec = new ConainsStatusSpecification(
    "state",
    statusSearch
  );
  const filteredList = useFilter(
    new AndSpecification(textFilterSpec, statusFilterSpec),
    list
  );

  return (
    <div>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <TextField
          type="text"
          label="Search"
          value={textSearch}
          onChange={(e) => setTextSearch(e.target.value)}
        />
        <StatusSelector
          statusList={statusList}
          searchList={statusSearch}
          OnChangeSearch={setStatusSearch}
        />
      </Box>

      <div>
        {filteredList.map((value) => (
          <div style={{ borderBottom: "1px solid gray" }}>
            <p>{value.name}</p>
            <span>{value.state}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
