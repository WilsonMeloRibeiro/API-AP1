const { DataTypes, Model} = require('sequelize');

class Class extends Model {
    static init(sequelize) {
        super.init({
            ClassName:DataTypes.STRING(10),
            ClassTime: DataTypes.STRING(10),
            ClassTurn: DataTypes.STRING(10),
            ClassPeriod: DataTypes.STRING(10),
            ClassCode: {
                type: DataTypes.STRING(10),
                primaryKey: true
            }
        }, {
            sequelize, modelName: 'Class'
        })
    }
}
module.exports = Class;