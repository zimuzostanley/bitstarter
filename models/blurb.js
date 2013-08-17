module.exports = function(sequelize, DataTypes){
    return sequelize.define("Blurb", {
	name: {type: DataTypes.STRING, allowNull: false},
	start_price: {type: DataTypes.FLOAT, allowNull: false},
	last_price: {type: DataTypes.FLOAT, allowNull: false},
	description: {type: DataTypes.TEXT, allowNull: true},
	date: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
    });
};
