class UserDTO{
    constructor(user){
        this.id = user.id;
        this.username= user.username;
        this.name = user.name;
    }
}
module.exports=UserDTO;