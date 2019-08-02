const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/CRUD', {
    useNewUrlParser: true
})
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));

mongoose.set('useFindAndModify', false);