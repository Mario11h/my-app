import React, { useEffect, useState, useCallback } from 'react';
import { LinearProgress, Box, Typography } from '@mui/material';
import UserTable from './components/UserTable';
import Pagination from './components/Pagination';
import Filter from './components/Filter';
import SearchBar from './components/SearchBar';

type User = {
  avatar: string;
  createdAt: string;
  id: string;
  name: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<string>('none');
  const [searchQuery, setSearchQuery] = useState<string>("");

  const fetchUsers = useCallback(async () => {
    try {
      let apiUrl = `https://65ca334d3b05d29307dfede3.mockapi.io/users/v1/users`;
      if (filter === 'name_asc') {
        apiUrl += `?sortBy=name&order=asc`;
      } else if (filter === 'createdAt') {
        apiUrl += `?sortBy=createdAt&order=asc`;
      }

      setLoading(true);
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setLoading(false);
        setUsers(data);
        setError(false); // Reset error state on successful fetch
      } else {
        console.error('Failed to fetch users');
        setError(true);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setError(true);
      setLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    fetchUsers();
  }, [filter, fetchUsers]);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const handleDeleteUser = async (id: string) => {
    try {
      const response = await fetch(`https://65ca334d3b05d29307dfede3.mockapi.io/users/v1/users/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setUsers(users.filter(user => user.id !== id));
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEditUser = async (id: string, updatedUser: Partial<User>) => {
    try {
      const response = await fetch(`https://65ca334d3b05d29307dfede3.mockapi.io/users/v1/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });
      if (response.ok) {
        setUsers(users.map(user => (user.id === id ? { ...user, ...updatedUser } : user)));
      } else {
        console.error('Failed to edit user');
      }
    } catch (error) {
      console.error('Error editing user:', error);
    }
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  const usersPerPage = 10;
  const paginatedUsers = filteredUsers.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ pb: 4, pt: 4, fontSize: '2xl', fontWeight: 'bold', letterSpacing: 'tight', textAlign: 'center' }}>
        Discover our diverse community of users and explore their profiles below! 🌟
      </Typography>
      {error && <Typography variant="body1" sx={{ fontSize: 'md' }}>Error: Something went wrong, please try again later.</Typography>}
      {loading ? (
        <LinearProgress />
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2 }}>
            <SearchBar onSearch={handleSearch} />
            <Filter filter={filter} onFilterChange={handleFilterChange} />
          </Box>
          <UserTable users={paginatedUsers} onDelete={handleDeleteUser} onEdit={handleEditUser} />
        </Box>
      )}
      {users.length > 0 && (
        <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Pagination currentPage={currentPage} totalPages={Math.ceil(filteredUsers.length / usersPerPage)} onPageChange={onPageChange} />
        </Box>
      )}
    </Box>
  );
}

export default App;