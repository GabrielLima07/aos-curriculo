const getExperienciaModel = (sequelize, { DataTypes }) => {
  const Experiencia = sequelize.define('experiencia', {
    cargo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    empresa: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    duracao: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Experiencia.associate = (models) => {
    Experiencia.belongsTo(models.User);
  };

  return Experiencia;
}

export default getExperienciaModel;