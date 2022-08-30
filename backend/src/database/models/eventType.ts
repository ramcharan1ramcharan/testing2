import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const eventType = sequelize.define(
    'eventType',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
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

  eventType.associate = (models) => {



    
    models.eventType.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.eventType.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.eventType.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return eventType;
}
