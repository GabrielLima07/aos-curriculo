const getIdiomaModel = (sequelize, { DataTypes }) => {
  const Idioma = sequelize.define('idioma', {
    lingua: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    nivel: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Idioma.associate = (models) => {
    Idioma.belongsTo(models.User);
  };

  return Idioma;
}

export default getIdiomaModel;