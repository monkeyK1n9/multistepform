export const validateEmail = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u;
    return regex.test(email);
}

export const validatePassword = (password: string): boolean => {
    const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    return regex.test(password);
}

export const validatePhoneNumber = (phoneNumber: string): boolean => {
    const regex = /^\(\+?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{3})[- ]?(\d{3})$/
    return regex.test(phoneNumber);
}