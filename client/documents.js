/*global Template, COLLECTIONS*/
(function (template, Docs, Files) {
  'use strict';

  template.docs = function () {
    return Docs.find();
  };

  template.file = function () {
    return Files.findOne({_id: this.fileId});
  };

  template.events = {
    'click a': function () {
      if ( confirm('Deseja mesmo apagar o documento \''+this.name+'\'?') ){
        Files.remove({_id: this.fileId});
        Docs.remove({_id: this._id});
      }
    }
  };
})(Template.documents, COLLECTIONS.Docs, COLLECTIONS.Files);
