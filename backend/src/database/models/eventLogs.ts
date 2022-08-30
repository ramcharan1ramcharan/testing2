import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const eventLogs = sequelize.define(
    'eventLogs',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      time: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      team: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [[
            "local",
            "visitante"
          ]],
        }
      },
      type: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [[
            "gol",
            "tarjeta_amarilla",
            "tarjeta_roja",
            "substitucion",
            "penal"
          ]],
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

  eventLogs.associate = (models) => {
    models.eventLogs.belongsTo(models.event, {
      as: 'eventId',
      constraints: false,
    });


    
    models.eventLogs.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.eventLogs.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.eventLogs.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return eventLogs;
}
