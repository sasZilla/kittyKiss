/**
 * RoomController
 *
 * @description :: Server-side logic for managing Rooms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  restricted:function(req,res){
    return res.ok("If You can see this you are authenticated");
  },
  open:function(req,res){
    return res.ok("This is open to all!!!");
  },

	findRoom: function(req, res) {
    RoomServise.findRoom(function(room) {
      res.json(room);
    });
  },

  createRoom: function() {
    var todoVal = (req.body.value) ? req.body.value : undefined
    TodoService.addTodo(todoVal, function(success) {
        res.json(success);
    });
  },

  deleteRoom: function(req, res) {

  }
};
