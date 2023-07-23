import React from "react";
import { TableBody } from "@material-ui/core";
import UserRow from "./TableRow";
import { User } from ".";

interface TableBodyProps {
  users: User[];
  handleDelete: (id: number) => void;
}

const CustomTableBody: React.FC<TableBodyProps> = ({ users, handleDelete }) => {
  return (
    <TableBody>
      {users.map((user) => (
        <UserRow key={user.id} user={user} handleDelete={handleDelete} />
      ))}
    </TableBody>
  );
};

export default CustomTableBody;