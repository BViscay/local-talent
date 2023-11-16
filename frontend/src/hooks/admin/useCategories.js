import axios from "axios";
import { API_URL_GET_CATEGORIES } from "../../config/api";
import { getToken } from "../../redux/sliceLogin";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../redux/admin/sliceCategories";

const useCategories = () => {
  const token = useSelector(getToken);

  const dispatch = useDispatch();

  const handlerCategories = async () => {
    try {
      const { data } = await axios.get(API_URL_GET_CATEGORIES, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data) {
        dispatch(setCategories(data));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return { handlerCategories };
};

export default useCategories;