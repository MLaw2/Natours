const ideaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Idea name is required'],
    unique: true,
    trim: true,
    maxlength: [50, 'Idea name must not exceed 50 characters'],
    minlength: [3, 'Idea name must be at least 3 characters long'],
  },
  description: {
    type: String,
    required: [true, 'Idea description is required'],
    trim: true,
    maxlength: [500, 'Idea description must not exceed 500 characters'],
  },
});

const Idea = mongoose.model('Idea', ideaSchema);

module.exports = Idea;
