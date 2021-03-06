module.exports = (sequelize, dataTypes) => {
  const alias = 'Usuario';
  const cols = {
    id: {
      type: dataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: dataTypes.STRING(150),
      allowNull: false,
      unique: true
    },
    password: {
      type: dataTypes.STRING(100),
      allowNull: false
    },
    adress:{
      type: dataTypes.STRING(100)
    },
    location: {
      type: dataTypes.STRING(100)
    },
    municipality: {
      type: dataTypes.STRING(100)
    },
    province: {
      type: dataTypes.STRING(100)
    },
    postal_code: {
      type: dataTypes.INTEGER(11)
    },
    telephone: {
      type: dataTypes.STRING(100)
    },
    name_fantasy:{
      type: dataTypes.STRING(100)
    },
    business_name:{
      type: dataTypes.STRING(100)
    },
    cuit:{
      type: dataTypes.STRING(80)
    },
    fiscal_condition_id:{
      type: dataTypes.INTEGER(10),
    },
    image:{
      type: dataTypes.STRING(100)
    },
    admin:{
      type: dataTypes.BOOLEAN(1),
      allowNull: false
    },
    active:{
      type: dataTypes.BOOLEAN(1),
      allowNull: false
    }
  };
  let config = {
    tableName: 'users',
    timestamps: true,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    underscored: true
  };
  const User = sequelize.define(alias, cols, config);  
  
  User.associate = function(models) {
    User.belongsTo(models.FiscalC, {
      as: 'FiscalC',
      foreignKey: 'fiscal_condition_id'
    });
    User.belongsToMany(models.Prod, {
      as: 'Prod',
      through: 'purchases',
      foreignKey: 'user_id',
      otherKey: 'product_id',
      timestamps: true
    });
  };
  
  return User;
}