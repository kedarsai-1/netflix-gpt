export const ValidateData  = (email,password,name)=>{

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPassworValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid =/^[a-zA-Z\s]+$/.test(name);
    if(!isEmailValid) return "Email ID is not valid";
    if(!isPassworValid) return "Password is not valid";
    if(!isNameValid) return "Name is not valid"
    
    return null; 
}
