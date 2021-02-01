const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  name: {type: String},
  description: {type: String},
  theme: {type: String},
  // createdAt: { type: Date, default: Date.now },
  owner: {  type: Schema.Types.ObjectId, ref: 'User'},
  items: [
    {
      // tags: [{ tag: { type: Schema.Types.ObjectId, ref: 'Tag' }}],
      // likes: [{ user: { type: Schema.Types.ObjectId, ref: 'User' }}],
      image: { type: String },
      author: { type: String },
      comment: { type: String },
      year: {type: Date}
    }
  ]
})

module.exports = model('Collection', schema)