import React, { useCallback, useEffect, useState } from "react";
import {
  CircularProgress,
  Paper,
  Table,
  TableContainer,
  TextField,
} from "@material-ui/core";
import TableHeader from "./TableHeader";
import CustomTableBody from "./TableBody";
import Pagination from "./TablePagination";
import { buildDefaultUser, buildNewUserId, filterUsers } from "./helpers";
import { config } from "../../../config";

export interface User {
  id: number;
  username: string;
  email: string;
  phone: string;
}

export type Column = "id" | "username" | "email" | "phone";

export type SortOrder = "asc" | "desc";

export const columns: Column[] = ["id", "username", "email", "phone"]

export const tableSizeOptions = [5, 10, 15]

const UserTable: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [sortBy, setSortBy] = useState<Column>(
    "id"
  );
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [searchText, setSearchText] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(tableSizeOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: User[] = await fetch(
          config.usersApiUrl
        ).then((data) => data.json());
        const reducedResponse = response.map(({ id, username, email, phone }) => ({ id, username, email, phone }))
        setUsers(reducedResponse);
        setFilteredUsers(reducedResponse);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSort = useCallback((column: keyof User | string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column as keyof User);
      setSortOrder("asc");
    }
  }, [sortBy, sortOrder]);

  useEffect(() => {
    const filteredData = filterUsers(users, searchText, sortBy, sortOrder);
    setFilteredUsers(filteredData);
  }, [users, searchText, sortBy, sortOrder]);

  const handleDelete = useCallback((id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  }, [users]);

  const handleAddUser = () => {
    const newUserId = buildNewUserId(users);
    const newUser: User = buildDefaultUser(newUserId);
    setUsers([...users, newUser]);
  };

  const handleItemsPerPageChange = useCallback((
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setItemsPerPage(event.target.value as number);
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const startItemIndex = (currentPage - 1) * itemsPerPage;
  const endItemIndex = startItemIndex + itemsPerPage;

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>Error fetching data from the API.</div>;
  }

  return (
    <div>
      <TextField
        label="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <div>Error fetching data from the API.</div>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHeader
              sortBy={sortBy}
              sortOrder={sortOrder}
              handleSort={handleSort}
            />
            <CustomTableBody
              users={filteredUsers.slice(startItemIndex, endItemIndex)}
              handleDelete={handleDelete}
            />
          </Table>
        </TableContainer>
      )}
      <Pagination
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        totalItems={filteredUsers.length}
        handleItemsPerPageChange={handleItemsPerPageChange}
        handlePageChange={handlePageChange}
      />
      <button onClick={handleAddUser}>Add new user</button>
    </div>
  );
};

export default UserTable;
