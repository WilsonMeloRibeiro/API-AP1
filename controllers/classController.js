const Class = require('../models/class.js');
const { Op } = require('sequelize');

function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

const getClass = async (req, res)=>{
    const result = await Class.findAll();
    return res.status(200).json(result);
}

const registerClass = async (req, res)=>{
    const ClassName = req.body.ClassName;
    const ClassTime = req.body.ClassTime;
    const ClassTurn = req.body.ClassTurn;
    const ClassPeriod = req.body.ClassPeriod;
    const ClassCode = req.body.ClassCode;
    if(!ClassName||!ClassTime || !ClassTurn || !ClassPeriod || !ClassCode) return res.status(400).json("Some data is empty")
    const result = await Class.create({
    ClassName,
    ClassTime,
    ClassTurn,
    ClassPeriod,
    ClassCode
}); 
    return res.json(result);
}

const deleteClass = async (req, res)=>{
    const classFound = await Class.findByPk(req.body.ClassCode) 
    if(!classFound) return res.status(400).json('Product not found')
    await Class.destroy({where: {ClassCode: req.body.ClassCode}})
    return res.status(200).json(`User ${classFound.ClassCode} Deleted`);
}

const getClassByCode = async (req, res)=>{
    // if req.params._id is favicon.ico then response immediately
    if (req.params.id === "favicon.ico") {
        return res.status(404)
    }
    const classFound = await Class.findByPk(req.params.ClassCode);
    if(!classFound) return res.status(400).json('class not found');
    return res.status(200).json(classFound);
}

// NOT FINISHED
const verifyConflit = async (req, res)=>{
    const classCodes = req.body.ClassCodes;
    const classResult = await Class.findAll({where: {
        ClassCode:classCodes,
    },
});
    for(var i =0; i<classResult.length; i++){
        for(var j = 0; j<classResult.length; j++){
            if(verifyTime(classResult[i].ClassCode, classResult[j].ClassCode)) return true;
        }
    }
    return res.status(200).json(classResult);
}

// NOT FINISHED
function verifyTime(classCode1, classCode2){
    var days;
    var i =0;
    while(isNumber(classCode1)){

    }
}

module.exports = {getClass, registerClass, deleteClass, getClassByCode, verifyConflit};