import expressValidator from 'express-validator';

export const sanitizeUserData = (user) => ({
    _id: user._id,
    email: user.email,
    profile: user.profile,
});

export const sanitizeUpdateData = (data) => {
    const result = {};
    if (data.profile.firstName) {
        result['profile.firstName'] = data.profile.firstName;
    }

    if (data.profile.lastName) {
        result['profile.lastName'] = data.profile.lastName;
    }

    if (data.profile.city) {
        result['profile.city'] = data.profile.city;
    }

    if (data.profile.address) {
        result['profile.address'] = data.profile.address;
    }

    if (data.profile.phone) {
        result['profile.phone'] = data.profile.phone;
    }

    if (data.profile.role) {
        result['profile.role'] = data.profile.role;
    }

    if (data.profile.faculty) {
        result['profile.faculty'] = data.profile.faculty;
    }

    return result;
};

export const queryBuilder = (query) => {
    const result = {};
    if (query.email) {
        result.email = { $regex: `.*${query.email}.*`, $options: 'i' };
    }

    if (query.firstName) {
        result.firstName = query.firstName;
    }

    if (query.lastName) {
        result.lastName = query.lastName;
    }

    if (query.city) {
        result.city = query.city;
    }

    if (query.address) {
        result.address = query.address;
    }

    if (query.phone) {
        result.phone = query.phone;
    }

    if (query.role) {
        result.role = query.role;
    }

    return result;
};

export const login = [
    expressValidator.body('email').isEmail().withMessage('email is required'),
    expressValidator.body('password').notEmpty().withMessage('password is required'),
];

export const createUser = [
    expressValidator.body('email').isEmail().withMessage('email is required'),
    expressValidator.body('password').notEmpty().withMessage('password is required'),
    expressValidator.body('profile.firstName').notEmpty().withMessage('firstName is required'),
    expressValidator.body('profile.lastName').notEmpty().withMessage('lastName is required'),
    expressValidator.body('profile.role').notEmpty().withMessage('role is required'),
];
