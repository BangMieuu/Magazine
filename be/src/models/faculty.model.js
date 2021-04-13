import mongoose from 'mongoose';

const FacultySchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
}, { timestamps: true });

export const Faculty = mongoose.model('faculties', FacultySchema);
