import { useEffect, useState } from "react";

const mockData = [
  {
    year: 2011,
    model: "A",
    price: "199$",
    isNew: true,
    type: "station",
  },
  {
    year: 2019,
    model: "B",
    price: "999$",
    isNew: false,
    type: "hatchback",
  },
  {
    year: 2000,
    model: "B",
    price: "1199$",
    isNew: false,
    type: "sedan",
  },
];

const SalePage = () => {
  const [data, setData] = useState([]);
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState("station");

  const getData = () => {
    return mockData;
  };

  useEffect(() => {
    const data = getData();
    setData(data);
  }, []);

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  const getTableBody = () => {
    if (data.length <= 0) {
      return null;
    }

    if (checked) {
      return (
        <tr>
          <td>{data[0].year}</td>
          <td>{data[0].model}</td>
          <td>{data[0].price}</td>
          <td>
            <button>Buy Now</button>
          </td>
        </tr>
      );
    } else {
      let selectedData = {};
      for (var i = 0; i < data.length; i++) {
        let option = data[i];
        if (option.type === value) {
          selectedData = option;
          break;
        }
      }
      return (
        <tr>
          <td>{selectedData.year}</td>
          <td>{selectedData.model}</td>
          <td>{selectedData.price}</td>
          <td>
            <button>Buy Now</button>
          </td>
        </tr>
      );
    }
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <>
      <h3>Choose Options</h3>
      <label>New Only</label>{" "}
      <input onChange={handleCheckboxChange} type="checkbox"></input>
      <br />
      <label>Select Type</label>{" "}
      <select onChange={handleSelectChange}>
        <option value="station">Station</option>
        <option value="hatchback">Hatchback</option>
        <option value="sedan">Sedan</option>
      </select>{" "}
      <br />
      <table>
        <tr>
          <th>Year</th>
          <th>Model</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
        {getTableBody()}
      </table>
    </>
  );
};

export default SalePage;
