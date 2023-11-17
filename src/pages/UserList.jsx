// UserList.js
import { useEffect } from "react";
import { Box, SimpleGrid, Button, Spinner } from "@chakra-ui/react";
import UserCard from "../components/Card";
import {
  fetchUsers,
  selectError,
  selectIsLoading,
  selectPage,
  selectUsers,
  setPage,
} from "../store/data_slice";
import { useDispatch, useSelector } from "react-redux";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    fetchUsers(page)(dispatch);
  }, [dispatch, page]);

  const handleNextPage = () => {
    dispatch(setPage(page + 1));
  };

  const handlePrevPage = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  };

  return (
    <>
      <Box
        p={4}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          {isLoading ? (
            <Spinner />
          ) : error ? (
            <Box> {error} </Box>
          ) : (
            users.map((user) => <UserCard key={user.id} user={user} />)
          )}
        </SimpleGrid>
      </Box>
      <Box mt={10} textAlign="center">
        <Button onClick={handlePrevPage} mr={2} disabled={page === 1}>
          Previous Page
        </Button>
        <Button onClick={handleNextPage}>Next Page</Button>
      </Box>
    </>
  );
};

export default UserList;
