export const validate = (email, password, fullname, mobile) => {
    const emailRegex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(email);
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password);
    const nameRegex = fullname ? /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(fullname) : true;
    const mobileRegex = mobile ? /^[0-9]{10}$/.test(mobile) : true;

    if (!nameRegex) {
        return "Please enter a valid name";
    }
    if (!mobileRegex) {
        return "Please enter a valid mobile number";
    }
    if (!emailRegex) {
        return "Please enter a valid email";
    }
    if (!passwordRegex) {
        return "Please enter a valid Password";
    }
    return null;
}