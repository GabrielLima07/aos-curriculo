const getUserModel = (sequelize, { DataTypes }) => {
  const User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
    nacionalidade: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
    idade: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
    trabalhando: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Curso, {onDelete: 'CASCADE'})
    User.hasMany(models.Experiencia, {onDelete: 'CASCADE'})
    User.hasMany(models.Idioma, {onDelete: 'CASCADE'})
  };

  User.findByLogin = async (login) => {
    let user = await User.findOne({
      where: { email: login },
    });
    return user;
  }

  return User;
};

export default getUserModel;