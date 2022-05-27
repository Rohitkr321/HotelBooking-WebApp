export const createError = (status, message)=>{
    console.log("good to go")
    const err = new Error();
    err.status=status;
    err.message=message;
    return err;
} 