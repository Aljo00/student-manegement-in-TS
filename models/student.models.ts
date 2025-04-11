import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config"

const Student = sequelize.define('Student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
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
    tableName: 'students',
    timestamps: true
});

export default Student;