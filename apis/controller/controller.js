const data = require("../data/data.json");

const course = (req,res) => {
   try {
    res.json(data);
   } catch (error) {
        res.status(500).json('internal server error')
   }
}

const singleCourse = (req,res) =>{
try {
    const cardName = req.params.cardName;

    data.forEach( data =>{
            if(data.cardName === cardName){
                 res.json(data);
            }
         } )
} catch (error) {
    res.status(500).json('internal server error')
}
}

module.exports = {course, singleCourse};