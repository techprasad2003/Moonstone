import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../websitecss/RemoveTeacher.css';

const RemoveTeacher = () => {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const { data } = await axios.get('https://server.moonstoneedu.in/api/teachers');
                setTeachers(data);
            } catch (err) {
                setError(err.message || 'Error fetching teachers');
            } finally {
                setLoading(false);
            }
        };

        fetchTeachers();
    }, []);

    const removeTeacher = async (id) => {
        try {
            await axios.delete(`https://server.moonstoneedu.in/api/teachers/${id}`);
            setTeachers((prevTeachers) => prevTeachers.filter((teacher) => teacher._id !== id));
        } catch (err) {
            alert('Error removing teacher');
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <section id="admin-remove-teacher" className="admin-remove-teacher-container">
            <h1>Remove Teacher</h1>
            {teachers.length > 0 ? (
                <table>
                    <caption className="visually-hidden">List of teachers to remove</caption>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                            <th>Whatsapp Number</th>
                            <th>Subject</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teachers.map(({ _id, name, email, mobileNumber, whatsappNumber, subject, address }) => (
                            <tr key={_id}>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{mobileNumber}</td>
                                <td>{whatsappNumber}</td>
                                <td>{subject}</td>
                                <td>{address}</td>
                                <td>
                                    <button onClick={() => removeTeacher(_id)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No teachers available to display.</p>
            )}
        </section>
    );
};

export default RemoveTeacher;
