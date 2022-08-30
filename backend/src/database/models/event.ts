import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const event = sequelize.define(
    'event',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      category: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      live: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      time: {
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

  event.associate = (models) => {
    models.event.belongsTo(models.institution, {
      as: 'institution',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.event.belongsTo(models.eventType, {
      as: 'type',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.event.belongsTo(models.licence, {
      as: 'place',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });


    
    models.event.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.event.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.event.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return event;
}
