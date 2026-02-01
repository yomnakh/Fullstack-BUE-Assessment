import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import {createUser, getUserById,updateUser } from '../api/userApi';

const UserForm = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const isEditMode = !!id;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        age: ''
    });
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');

    useEffect(() => {
        if (isEditMode) {
            loadUser();
        }
    }, [id]);

    const loadUser = async () => {
        try {
            const user = await getUserById(id);
            setFormData({
                name: user.name,
                email: user.email,
                phone: user.phone,
                age: user.age
            });
        } catch (err) {
            setServerError('Failed to load user data.');
        }
    };
    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.phone) newErrors.phone = 'Phone is required';
        if (!formData.age) newErrors.age = 'Age is required';
        else if (formData.age < 0 || formData.age > 150) newErrors.age = 'Age must be between 0 and 150';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            if (isEditMode) {
                await updateUser(id, { ...formData, age: parseInt(formData.age) });
            } else {
                await createUser({ ...formData, age: parseInt(formData.age) });
            }
            navigate('/');
        } catch (err) {
            if (err.response && err.response.data && err.response.data.errors) {
                // Map server validation errors
                setServerError('Please fix the errors below.');
            } else {
                setServerError('An unexpected error occurred.');
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    return (
        <div className="container form-container">
            <h1>{isEditMode ? 'Edit User' : 'Create New User'}</h1>
            {serverError && <div className="error">{serverError}</div>}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'input-error' : ''}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'input-error' : ''}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? 'input-error' : ''}
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className={errors.age ? 'input-error' : ''}
                    />
                    {errors.age && <span className="error-text">{errors.age}</span>}
                </div>

                <div className="button-group">
                    <button type="submit" className="btn btn-primary">
                        {isEditMode ? 'Update User' : 'Create User'}
                    </button>
                    <button type="button" onClick={() => navigate('/')} className="btn btn-secondary">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UserForm
