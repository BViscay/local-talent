import axios from "axios";
import {API_URL_CREATE_CATEGORY} from "../../config/api";
import {getToken} from "../../redux/sliceLogin";
import { useSelector} from "react-redux";
// import { setNewCategory} from "../../redux/admin/sliceNewCategory";


const useCategory = () => {
  const token = useSelector(getToken);

  // const dispatch = useDispatch();

  const handleCreateCategory = async (newCategory) => {
    const {name, description, icon} = newCategory;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("icon", icon[0]);
    

    try {
      const response = await axios.post(API_URL_CREATE_CATEGORY, formData, {
        headers: {
          "Content-Type": "multipar/form-data",
          Authorization: `Bearer ${token}`
        }
      })

      console.log("Categoría creada con éxito:", response.data);

      // dispatch(setNewCategory([...newCategory, response.data]));

    } catch (error) {
      console.log(error.message)
    }
  } 

  return {handleCreateCategory}
}

export default useCategory;