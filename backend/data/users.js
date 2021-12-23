//user info that serves as seeder data for initial data population

import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Arundhati Bala',
        email: 'arun@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Siddh Veer Bakshi',
        email: 'svb@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users