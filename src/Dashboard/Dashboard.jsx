// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('https://telegram-bot-ygd7.onrender.com/admin/users');
                setUsers(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchUsers();
    }, [users]);
    const handleblock=async(id)=>{
        try{
           await axios.post('https://telegram-bot-ygd7.onrender.com/admin/block/:id',
            {id})
        }catch(err){
            console.error(err);
        }
    }
    const handleunblock=async(id)=>{
        try{
          await axios.post('https://telegram-bot-ygd7.onrender.com/admin/unblock/:id',{id})
        }catch(err){
            console.error(err);
        }
    }
    const handleDelete=async(id)=>{
        try{
          await axios.post('https://telegram-bot-ygd7.onrender.com/admin/delete/:id',{id})
        }catch(err){
            console.error(err);
        }
    }
    return (
        <div className="container mt-5">
        <h1 className="text-center mb-4">Admin Dashboard</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Subscription Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user._id}>
                        <td>{user.username}</td>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td>{user.subscribed ? 'Yes' : 'No'}</td>
                        <td>
                            {user.subscribed ? (
                                <Button  variant="warning" onClick={() => handleblock(user._id)}>Block</Button>
                            ) : (
                                <Button  variant="success" onClick={() => handleunblock(user._id)}>Unblock</Button>
                            )}
                            <Button variant="danger" onClick={() => handleDelete(user._id)} className="ms-2">Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
    );
};

export default Dashboard;
