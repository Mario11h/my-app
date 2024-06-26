import { Avatar, Card, CardContent, Box, Button, TextField } from "@mui/material";
import { format } from "date-fns";
import React, { useState } from "react";

type UserProps = {
  avatar: string;
  createdAt: string;
  id: string;
  name: string;
};

const UserCard = ({ user, onDelete, onEdit }: { user: UserProps, onDelete: (id: string) => void, onEdit: (id: string, updatedUser: Partial<UserProps>) => void }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [avatar, setAvatar] = useState(user.avatar);

  const formattedDate = format(
    new Date(user.createdAt),
    "MMMM dd, yyyy 'at' hh:mm a",
  );

  const handleSave = () => {
    onEdit(user.id, { name, avatar });
    setIsEditing(false);
  };

  return (
    <Card className="w-full" variant="elevation">
      <CardContent className="flex flex-col justify-between sm:flex-row sm:items-center">
        {isEditing ? (
          <Box className="flex flex-col gap-3">
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Avatar URL"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <Box className="flex gap-2">
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save
              </Button>
              <Button variant="outlined" color="secondary" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </Box>
          </Box>
        ) : (
          <>
            <div className="flex items-center gap-3">
              <Avatar alt={user.name} src={user.avatar} />
              <h1 className="text-xl font-medium opacity-90">{user.name}</h1>
            </div>
            <p className="text-sm opacity-70">Joined: {formattedDate}</p>
            <Box className="flex gap-2">
              <Button variant="contained" color="primary" onClick={() => setIsEditing(true)}>
                Edit
              </Button>
              <Button variant="outlined" color="secondary" onClick={() => onDelete(user.id)}>
                Delete
              </Button>
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default UserCard;
