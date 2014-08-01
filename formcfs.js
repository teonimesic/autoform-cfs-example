if (Meteor.isClient) {
  Template.documents.docs = function () {
    return Docs.find();
  };

  Template.documents.file = function () {
    return Files.findOne({_id: this.fileId});
  }

  Template.documents.events = {
    'click a': function () {
      if ( confirm("Deseja mesmo apagar o documento '"+this.name+"'?") ){
        Files.remove({_id: this.fileId});
        Docs.remove({_id: this._id});
      }
    }
  };
}

Docs = new Meteor.Collection("docs");
Docs.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: 'Nome'
  },
  fileId: {
    type: String,
    label: "Arquivo"
  }
}));

Docs.allow({
  remove: function () {
    return true;
  }
})

Files = new FS.Collection("files", {
  stores: [new FS.Store.FileSystem("images")]
});

Files.allow({
  download: function () {
    return true;
  },
  fetch: null
});
