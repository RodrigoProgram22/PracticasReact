import { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer";
import { collection,getDocs } from "firebase/firestore";
import { db } from "../services/firebase";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
   const productsCollection = collection(db,"products");

   getDocs(productsCollection).then((snapshot) =>{
    const data = snapshot.docs.map((doc) => ({
     id: doc.id,
     ...doc.data() 
    }));
    setProducts(data);
    setLoading(false);
   }).catch()
  }, []);

  return <ItemListContainer products={products} loading={loading} />;
};

export default Home;
