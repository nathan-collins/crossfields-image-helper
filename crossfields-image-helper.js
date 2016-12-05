Polymer({

  is: 'crossfields-image-helper',

  properties: {
    icon: {
      type: String,
      observer: '_handleIcon'
    },

    totalHelpers: {
      type: Number
    },

    label: {
      type: String
    },

    imagePath: {
      type: String
    }
  },

  _toArray: function(totalHelpers) {
    var helpers = [];
    if(totalHelpers > 0) {
      for(var  i = 0; i < totalHelpers; i++) {
        helpers.push(i);
      }
    }
    return helpers;
  },

  _computeHelperLabel: function(label, totalHelpers) {
    return pluralize(label, totalHelpers, true);
  },

  _handleIcon: function(icon) {
    var colonExists = icon.indexOf(":");
    if(colonExists > -1) {
      return false;
    }
    return true;
  }

});
