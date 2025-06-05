import { useParams } from "react-router";
import ItemListContainer from "../components/ItemListContainer";
import { useEffect, useState } from "react";
import {collection,getDocs,query,where} from "firebase/firestore";
import { db } from "../services/firebase";
const Category = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
   const productsQuery = query(
      collection(db, "products"),where("category", "==", id)
    );
    getDocs(productsQuery)
      .then((snapshot) => {
        const productsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsList);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return <ItemListContainer products={products} loading={loading} />;
};

export default Category;
