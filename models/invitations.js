// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

module.exports = (mongoose, Mongoose) => {
  // This section contains the properties of your model, mapped to your collection's properties.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const schema = Mongoose.Schema({
    owner: {
      type: ObjectId,
      ref: 'users',
      require: true,
    },
    material: {
      type: ObjectId,
      ref: 'materials',
      require: true,
    },
    invited_user: {
      type: ObjectId,
      ref: 'users',
      require: true,
    },
    status: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 86400,
    },
  }, {
    timestamps: false,
  });

  return mongoose.model('invitations', schema, 'invitations');
};