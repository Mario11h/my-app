import { Avatar, Box, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { format } from "date-fns";
import React, { useState } from "react";

type UserProps = {
  avatar: string;
  createdAt: string;
  id: string;
  name: string;
};

const UserTable = ({ users, onDelete, onEdit }: { users: UserProps[], onDelete: (id: string) => void, onEdit: (id: string, updatedUser: Partial<UserProps>) => void }) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleEditClick = (user: UserProps) => {
    setEditingId(user.id);
    setName(user.name);
    setAvatar(user.avatar);
  };

  const handleSave = (id: string) => {
    onEdit(id, { name, avatar });
    setEditingId(null);
  };

  return (
    <TableContainer component={Paper}>
      <Table className="rounded-md w-full">
        <TableHead>
          <TableRow className="bg-gradient-to-b from-sky-400 to-sky-600 text-white">
            <TableCell className="p-2 border rounded">ID</TableCell>
            <TableCell className="p-2 border rounded">Name</TableCell>
            <TableCell className="p-2 border rounded">Avatar</TableCell>
            <TableCell className="p-2 border rounded">Joined At</TableCell>
            <TableCell className="p-2 border rounded">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>
                {editingId === user.id ? (
                  <TextField
                    fullWidth
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                ) : (
                  user.name
                )}
              </TableCell>
              <TableCell>
                {editingId === user.id ? (
                  <TextField
                    fullWidth
                    variant="outlined"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                  />
                ) : (
                  <Avatar alt={user.name} src={user.avatar} />
                )}
              </TableCell>
              <TableCell>{format(new Date(user.createdAt), "MMMM dd, yyyy 'at' hh:mm a")}</TableCell>
              <TableCell>
                {editingId === user.id ? (
                  <Box className="flex gap-2">
                    <Button variant="contained" color="primary" onClick={() => handleSave(user.id)}>
                      Save
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={() => setEditingId(null)}>
                      Cancel
                    </Button>
                  </Box>
                ) : (
                  <Box className="flex gap-2">
                    <Button variant="contained" color="primary" onClick={() => handleEditClick(user)}>
                      Edit
                    </Button>
                    <IconButton color="secondary" onClick={() => onDelete(user.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;