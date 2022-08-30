import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const eventData = sequelize.define(
    'eventData',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      delay: {
        type: DataTypes.INTEGER,
      },
      extraTimeDuration: {
        type: DataTypes.INTEGER,
      },
      localTeamName: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      localTeamShortname: {
        type: DataTypes.TEXT,
      },
      localTeamColor: {
        type: DataTypes.TEXT,
      },
      localTeamLogo: {
        type: DataTypes.TEXT,
      },
      visitTeamName: {
        type: DataTypes.TEXT,
      },
      visitTeamShortname: {
        type: DataTypes.TEXT,
      },
      visitTeamColor: {
        type: DataTypes.TEXT,
      },
      visitTeamLogo: {
        type: DataTypes.TEXT,
      },
      partDuration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {

        }
      },
      info: {
        type: DataTypes.TEXT,
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

  eventData.associate = (models) => {
    models.eventData.belongsTo(models.event, {
      as: 'eventId',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });


    
    models.eventData.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.eventData.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.eventData.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return eventData;
}
