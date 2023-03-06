export const firstNameAndLastValidation = (input: string) => {
    if (input.length >= 6 && input.length <= 10) {
        console.log('Input is valid');
        return true;
    } else {
        console.log('Input is not valid');
        return false;
    }
};

export const validateEmail = (email: string) => {
    if (email.trim() === '') {
        return false;
    } else if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    } else {
        return false;
    }
};

export const validatePhoneNumber = (phoneNumber: string) => {
    const regex = /^\+65(6|8|9)\d{7}$/; // Matches +65 6XXXXXXX or +65 8XXXXXXX
    const result = regex.test(phoneNumber);
    if (result) {
        return true;
    } else {
        return false;
    }
};

export const validateGender = (gender: string) => {
    if (gender.trim() !== '') {
        return true;
    } else {
        return false;
    }
};

export const validateJoinDate = (joinDate: string) => {
    console.log('🚀 ~ file: validation.ts:40 ~ validateJoinDate ~ joinDate:', joinDate);
    const inputDate = new Date(joinDate);
    const currentDate = new Date();

    if (joinDate) {
        return true;
    } else {
        return false;
    }
};
