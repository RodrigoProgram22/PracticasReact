import { useParams } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../services/firebase";
import { Flex, Spinner } from "@chakra-ui/react";
const Item = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   const productDoc = doc(db, "products", id);

    getDoc(productDoc)
      .then((doc) => {
        if (doc.exists()) {
          setProduct({ id: doc.id, ...doc.data() });
        } else {
          console.error("No such document!");
        }
      })
      .catch((error) => {
        console.error("Error getting document:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return loading ? (
    <Flex alignItems="center" justifyContent="center" marginTop={"100px"}>
      <Spinner color="red.500" size="xl" />
    </Flex>
  ) : (
    <ItemDetailContainer product={product} />
  );
};

export default Item;
