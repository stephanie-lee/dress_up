function Dresser($wardrobe) {
  this.$wardrobe = $wardrobe;
  this.setupCloset();
}

$.extend(Dresser.prototype,{
  setupCloset: function() {
    var $dress = $("<div>").addClass('dress')
                        .attr('id', "dress1")
                        .on("dragover", this.allowDrop.bind(this))
                        .on("drop", this.drop.bind(this));
    this.$wardrobe.append($dress);

        $dress = $("<div>").addClass('dress')
                        .attr('id', "dress2")
                        .on("dragover", this.allowDrop.bind(this))
                        .on("drop", this.drop.bind(this));
    this.$wardrobe.append($dress);

    var $image = $("<img>").addClass("image")
                          .attr('id', "image")
                          .attr("src", "Puppy1.jpg")
                          .attr("draggable", true)
                          .attr("width", "200")
                          .attr("height", "100")
                          .on("dragstart", this.drag.bind(this));
    $("#dress1").append($image);
  },

  allowDrop: function (e) {
      e.preventDefault();
  },

  drag: function (e) {
    e.dataTransfer = e.originalEvent.dataTransfer;
    e.dataTransfer.setData("text", e.target.id);
  },

  drop: function (e) {
    e.preventDefault();
    e.dataTransfer = e.originalEvent.dataTransfer;
    var data = e.dataTransfer.getData("text");

    if (e.target == e.delegateTarget) {
      e.target.appendChild(document.getElementById(data));
    }
  }
});
