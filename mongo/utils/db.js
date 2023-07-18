

const mongoose = require("mongoose");  // npm install mongoose@5.8.11

// Database Address
const url = "mongodb://127.0.0.1:27017/mydb01"
const Schema = mongoose.Schema;
let creat_result = '';

// === 1) Connecting to database =====================
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true,  useFindAndModify: false })
    .then(() => {
        console.log("Connected successful: ");
    }).catch((err) => {
        console.log("Error in the Connection", err);
    })



// === 2) Creating structure of the collection  =================
const StudentSchema = new Schema({
    name: {
        type: String,
        required: true
    }
    ,
    marks: {
        type: Number,
        default: 0
    }
})

// Creating collection
const collections = mongoose.model("Student", StudentSchema);

// === 3) Inserting one document  ================
collections.create({
    name: "Ajay",
    marks: 94
}).then((result) => {
    creat_result = result;
    console.log("Document inserted: ", result);
}).catch((err) => {
    console.log(err._message);
});



//  ===== 4) updating a doc ==================

let st_id =  creat_result._id ;


function updateStudent() {
    console.log("updating the record .....");
    collections.findOneAndUpdate(st_id, { name: 'Gourav' },
        function (err, doc) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("student info before uodate : ", doc);
            }
        });
}


function showAll() {
    console.log("showing all the records .....");
    collections.find({}, function(err, docs) {
        if (err) {
            console.log(err)
        }
        else {
            console.log("All the student docs : ", docs);
        }
    })

}
