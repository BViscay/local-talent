import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useFilters from "../../hooks/useFilters";
import {useLocation} from "react-router-dom";
export default function RenderFilters() {
  const location = useLocation();
  const isCategoryPage =
    location.pathname === "/searched-services" ||
    location.pathname === "/recomended-services";
  const {filterByRating, filterByPrice, filterByCategory} = useFilters();
  return (
    <div className='w-full items-center flex justify-around'>
      <FormControl
        sx={{
          m: 1,
          width: "120px",
          borderRadius: "8px",
          padding: "5px",
        }}
      >
        <InputLabel
          sx={{
            backgroundColor: "white",
            paddingLeft: "5px",
          }}
          id='demo-simple-select-label'
        >
          Precio
        </InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          label='Precio'
          onChange={(event) => filterByPrice(event.target.value)}
          sx={{
            height: "40px",
          }}
        >
          <MenuItem value='price'>-</MenuItem>
          <MenuItem value='Mayor'>Menor a Mayor</MenuItem>
          <MenuItem value='Menor'>Mayor a Menor</MenuItem>
        </Select>
      </FormControl>
      {isCategoryPage && (
        <FormControl
          sx={{
            width: "135px",
            borderRadius: "8px",
            padding: "5px",
          }}
        >
          <InputLabel
            sx={{
              backgroundColor: "white",
              paddingLeft: "5px",
            }}
            id='demo-simple-select-label'
          >
            Categorias
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            label='Categorias'
            onChange={(event) => filterByCategory(event.target.value)}
            sx={{
              height: "40px",
            }}
          >
            <MenuItem value='categoria'>Todos</MenuItem>
            <MenuItem value='A/A'>A/A</MenuItem>
            <MenuItem value='Belleza'>Belleza</MenuItem>
            <MenuItem value='Hogar'>Hogar</MenuItem>
            <MenuItem value='Pintura'>Pintura</MenuItem>
            <MenuItem value='Limpieza'>Limpieza</MenuItem>
            <MenuItem value='Plomeria'>Plomeria</MenuItem>
            <MenuItem value='Electricidad'>Electricidad</MenuItem>
            <MenuItem value='Fletes'>Fletes</MenuItem>
            <MenuItem value='Barberias'>Barberias</MenuItem>
          </Select>
        </FormControl>
      )}
      <FormControl
        sx={{
          m: 1,
          width: "135px",
          borderRadius: "8px",
          padding: "5px",
        }}
      >
        <InputLabel
          sx={{
            backgroundColor: "white",
            paddingLeft: "4px",
          }}
          id='demo-simple-select-label'
        >
          Calificacion
        </InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          label='Calificacion'
          onChange={(event) => filterByRating(event.target.value)}
          sx={{
            height: "40px",
          }}
        >
          <MenuItem value='rating'>-</MenuItem>
          <MenuItem value='Mayor'>Menor a Mayor</MenuItem>
          <MenuItem value='Menor'>Mayor a Menor</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
