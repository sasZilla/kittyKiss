module.exports = {
  joinRoom: function(session, next) {
    var maxUsersInRoom = 10;

    Room.findOrCreate({isFull: false}).populate('members').exec(function(err, room) {
      if(err) throw err;

      if (session && session.user && session.user.auth && session.user.auth.id) {
        room.members.add(session.user.auth.id)
      }

      if (room.members.length >= maxUsersInRoom) {
        room.isFull = true;
      }

      room.save(function(err,res){
        Room.findOne(room.id).populate('members').exec(function(err, room) {
          next(room);
        });
      });
    });
  },
  createRoom: function(val, next) {
    Room.create({name: val}).exec(function(err, room) {
      if(err) throw err;
      next(room);
    });
  },
  removeRoom: function(val, next) {
    Room.destroy({name: val}).exec(function(err, room) {
      if(err) throw err;
      next(room);
    });
  }
};
