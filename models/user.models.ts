import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config"

const User = sequelize.define('Student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('student', 'admin'),
        defaultValue: 'student',
    }
}, {
    tableName: 'Users',
    timestamps: true
});

export default User;