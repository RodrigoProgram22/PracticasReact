import { Flex } from "@chakra-ui/react";

const Perfil = () => {
  return (
    <>
      <Flex
        fontSize={30}
        alignItems="center"
        justifyContent="center"
        marginTop={"100px"}
      >
        <div>
          <h1>Perfil de Usuario</h1>
          <p>Nombre: Juan Rodrigo Perez</p>
          <p>Email: roodrigoperez@gmail.com </p>
        </div>
      </Flex>
    </>
  );
};
export default Perfil;
