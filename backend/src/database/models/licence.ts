import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const licence = sequelize.define(
    'licence',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,    
        validate: {
          len: [0, 255],
        },    
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['importHash', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },

      ],
      timestamps: true,
      paranoid: true,
    },
  );

  licence.associate = (models) => {
    models.licence.belongsTo(models.institution, {
      as: 'institution',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });


    
    models.licence.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.licence.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.licence.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return licence;
}
