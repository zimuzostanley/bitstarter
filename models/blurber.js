module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Blurber", {
	blurber_id: {type: DataTypes.BIGINT, unique: true, allowNull: false},
	email: {type: DataTypes.STRING, unique: true, allowNull: true},
	display_name: {type: DataTypes.STRING, allowNull: false},
	date: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
    });
}
