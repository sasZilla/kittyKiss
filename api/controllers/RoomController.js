/**
 * RoomController
 *
 * @description :: Server-side logic for managing Rooms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  restricted:function(req,res){
    return res.json(req.session);
  },
  open:function(req,res){
    return res.ok("This is open to all!!!");
  },

	joinRoom: function(req, res) {
    RoomServise.joinRoom(req.session, function(room) {
      res.json(room);
    });
  }
};
