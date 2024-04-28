const getCursoModel = (sequelize, { DataTypes }) => {
  const Curso = sequelize.define('curso', {
    nome: {
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

  Curso.associate = (models) => {
    Curso.belongsTo(models.User);
  };

  return Curso;
}

export default getCursoModel;