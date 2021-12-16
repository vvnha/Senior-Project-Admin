// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

module.exports = (mongoose, Mongoose) => {
  // This section contains the properties of your model, mapped to your collection's properties.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const schema = Mongoose.Schema({
    title: {
      type: String,
      require: true,
    },
    field: {
      type: Number,
      require: true,
    },
    rating: {
      type: Number,
    },
    rating_number: {
      type: Number,
    },
    status: {
      type: String,
    },
    description: {
      type: String,
    },
    authors: [
      {
        user: {
          type: ObjectId,
          ref: 'users',
        },
      },
    ],
    file: {
      type: String,
    },
    file_name: {
      type: String,
    },
    file_type: {
      type: String,
    },
    favorite_number: {
      type: Number,
    },
    similar_materials: [
      {
        material: {
          type: ObjectId,
          ref: 'materials',
        },
        similarity: {
          type: Number,
          require: true,
        },
        isReported: {
          type: Boolean,
          default: false,
        },
      },
    ],
    referenced_materials: [
      {
        material: {
          type: ObjectId,
          ref: 'materials',
        },
      },
    ],
  }, {
    timestamps: false,
  });

  return mongoose.model('materials', schema, 'materials');
};
