module.exports = function(sequelize, DataTypes){
    return sequelize.define("Blurb", {
	name: {type: DataTypes.STRING, allowNull: False},
	start_price: {type: DataTypes.FLOAT, allowNull: False},
	last_price: {type: DataTypes.FLOAT, allowNull: False},
	description: {type: DataTypes.TEXT, allowNull: True},
	date: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
    });
};
