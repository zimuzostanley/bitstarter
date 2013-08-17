module.exports = function(sequelize, DatTypes) {
    return sequelize.define("Blurber", {

	email: {type: DataTypes.STRING, unique: true, allowNull: true},
	display_name: {type: DataTypes.STRING, allowNull: false},
	date: {type: DataTypes.DATE, defaultValue: true},
    });
}
