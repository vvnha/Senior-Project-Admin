// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

module.exports = (mongoose, Mongoose) => {
  // This section contains the properties of your model, mapped to your collection's properties.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const schema = Mongoose.Schema({
    content: {
      type: String,
      default: '',
    },
    material: {
      type: ObjectId,
      ref: 'materials',
    },
    // type include [normal, owner]
    type: {
      type: String,
      default: 'normal',
    },
    similarity: {
      type: Number,
      require: true,
    },
    copied_material: {
      type: ObjectId,
      ref: 'materials',
    },
    user: {
      type: ObjectId,
      ref: 'users',
    },
    isCopy: {
      type: Boolean,
      default: false,
    },
  }, {
    timestamps: false,
  });

  return mongoose.model('reports', schema, 'reports');
};
