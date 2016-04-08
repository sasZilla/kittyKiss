module.exports = {
  findRoom: function(next) {
    Room.find().exec(function(err, todos) {
      if(err) throw err;
      next(todos);
    });
  },
  createRoom: function(val, next) {
    Todo.create({name: val}).exec(function(err, todo) {
      if(err) throw err;
      next(todo);
    });
  },
  removeRoom: function(val, next) {
    Todo.destroy({name: val}).exec(function(err, todo) {
      if(err) throw err;
      next(todo);
    });
  }
};
