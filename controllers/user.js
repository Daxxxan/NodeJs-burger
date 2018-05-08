const UserController = function () {};
const ModelIndex = require('../models');
const User = ModelIndex.User;
const bcrypt = require('bcrypt');
const config = require('../config');

UserController.register = function(name, email, password){
    return User.create({
        email: email,
        username: name,
        password: bcrypt.hashSync(password,10)
    })
};

UserController.getUser = function(email){
  const options = {
      where: {
          email: email
      }
  };
  return User.find(options);
};

UserController.sign_in = function(email, password){
    var user = UserController.getUser(email);
    var passwordIsValid = bcrypt.compareSync(password, user.password);
    if(passwordIsValid){
        var token = jwt.sign({ id: user.id },
            config.secret,
            {expiresIn: 86400 // expires in 24 hours
            });
        return token;
    }else{
        return -1;
    }
};

module.exports = UserController;

/*UserController.isLogged = function(token, user){
    jwt.verify(token,config.secret,function(err, decoded){
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        UserController.getUser(decoded.id,
            function (err, user) {
                if (err) return res.status(500).send("There was a problem finding the user.");
                if (!user) return res.status(404).send("No user found.");

                res.status(200).send(user);
    })
};*/