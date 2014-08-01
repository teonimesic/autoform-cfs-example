/*global SimpleSchema, FS, Meteor, COLLECTIONS:true*/
COLLECTIONS = (function () {
  'use strict';

  var collections = {};
  collections.Docs = new Meteor.Collection('docs');
  collections.Docs.attachSchema(new SimpleSchema({
    name: {
      type: String,
      label: 'Nome'
    },
    fileId: {
      type: String,
      label: 'Arquivo'
    }
  }));

  collections.Docs.allow({
    remove: function () {
      return true;
    }
  });

  collections.Files = new FS.Collection('files', {
    stores: [new FS.Store.FileSystem('images')]
  });

  collections.Files.allow({
    download: function () {
      return true;
    },
    fetch: null
  });

  return collections;
}(Meteor, SimpleSchema, FS));
