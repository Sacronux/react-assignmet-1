import React from "react";
import { TableRow, TableCell, IconButton } from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";
import { User } from ".";

interface UserRowProps {
  user: User;
  handleDelete: (id: number) => void;
}

const UserRow: React.FC<UserRowProps> = ({ user, handleDelete }) => {
  return (
    <TableRow key={user.id}>
      {Object.keys(user).map((field, index) => (<TableCell key={index}>{user[field as keyof User]}</TableCell>))}
      <TableCell>
        <IconButton onClick={() => handleDelete(user.id)}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default UserRow;