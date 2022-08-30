import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import AuditLogRepository from '../../database/repositories/auditLogRepository';
import lodash from 'lodash';
import SequelizeFilterUtils from '../../database/utils/sequelizeFilterUtils';
import Error404 from '../../errors/Error404';
import Sequelize from 'sequelize';
import { IRepositoryOptions } from './IRepositoryOptions';

const Op = Sequelize.Op;

class EventDataRepository {

  static async create(data, options: IRepositoryOptions) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const record = await options.database.eventData.create(
      {
        ...lodash.pick(data, [
          'delay',
          'extraTimeDuration',
          'localTeamName',
          'localTeamShortname',
          'localTeamColor',
          'localTeamLogo',
          'visitTeamName',
          'visitTeamShortname',
          'visitTeamColor',
          'visitTeamLogo',
          'partDuration',
          'info',          
          'importHash',
        ]),
        eventIdId: data.eventId || null,
        tenantId: tenant.id,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    
  

  
    await this._createAuditLog(
      AuditLogRepository.CREATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  static async update(id, data, options: IRepositoryOptions) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );


    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let record = await options.database.eventData.findOne(      
      {
        where: {
          id,
          tenantId: currentTenant.id,
        },
        transaction,
      },
    );

    if (!record) {
      throw new Error404();
    }

    record = await record.update(
      {
        ...lodash.pick(data, [
          'delay',
          'extraTimeDuration',
          'localTeamName',
          'localTeamShortname',
          'localTeamColor',
          'localTeamLogo',
          'visitTeamName',
          'visitTeamShortname',
          'visitTeamColor',
          'visitTeamLogo',
          'partDuration',
          'info',          
          'importHash',
        ]),
        eventIdId: data.eventId || null,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );





    await this._createAuditLog(
      AuditLogRepository.UPDATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  static async destroy(id, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let record = await options.database.eventData.findOne(
      {
        where: {
          id,
          tenantId: currentTenant.id,
        },
        transaction,
      },
    );

    if (!record) {
      throw new Error404();
    }

    await record.destroy({
      transaction,
    });

    await this._createAuditLog(
      AuditLogRepository.DELETE,
      record,
      record,
      options,
    );
  }

  static async findById(id, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const include = [
      {
        model: options.database.event,
        as: 'eventId',
      },
    ];

    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    const record = await options.database.eventData.findOne(
      {
        where: {
          id,
          tenantId: currentTenant.id,
        },
        include,
        transaction,
      },
    );

    if (!record) {
      throw new Error404();
    }

    return this._fillWithRelationsAndFiles(record, options);
  }

  static async filterIdInTenant(
    id,
    options: IRepositoryOptions,
  ) {
    return lodash.get(
      await this.filterIdsInTenant([id], options),
      '[0]',
      null,
    );
  }

  static async filterIdsInTenant(
    ids,
    options: IRepositoryOptions,
  ) {
    if (!ids || !ids.length) {
      return [];
    }

    const currentTenant =
      SequelizeRepository.getCurrentTenant(options);

    const where = {
      id: {
        [Op.in]: ids,
      },
      tenantId: currentTenant.id,
    };

    const records = await options.database.eventData.findAll(
      {
        attributes: ['id'],
        where,
      },
    );

    return records.map((record) => record.id);
  }

  static async count(filter, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    return options.database.eventData.count(
      {
        where: {
          ...filter,
          tenantId: tenant.id,
        },
        transaction,
      },
    );
  }

  static async findAndCountAll(
    { filter, limit = 0, offset = 0, orderBy = '' },
    options: IRepositoryOptions,
  ) {
    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let whereAnd: Array<any> = [];
    let include = [
      {
        model: options.database.event,
        as: 'eventId',
      },      
    ];

    whereAnd.push({
      tenantId: tenant.id,
    });

    if (filter) {
      if (filter.id) {
        whereAnd.push({
          ['id']: SequelizeFilterUtils.uuid(filter.id),
        });
      }

      if (filter.eventId) {
        whereAnd.push({
          ['eventIdId']: SequelizeFilterUtils.uuid(
            filter.eventId,
          ),
        });
      }

      if (filter.delayRange) {
        const [start, end] = filter.delayRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            delay: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            delay: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.extraTimeDurationRange) {
        const [start, end] = filter.extraTimeDurationRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            extraTimeDuration: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            extraTimeDuration: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.localTeamName) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'eventData',
            'localTeamName',
            filter.localTeamName,
          ),
        );
      }

      if (filter.localTeamShortname) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'eventData',
            'localTeamShortname',
            filter.localTeamShortname,
          ),
        );
      }

      if (filter.localTeamColor) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'eventData',
            'localTeamColor',
            filter.localTeamColor,
          ),
        );
      }

      if (filter.localTeamLogo) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'eventData',
            'localTeamLogo',
            filter.localTeamLogo,
          ),
        );
      }

      if (filter.visitTeamName) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'eventData',
            'visitTeamName',
            filter.visitTeamName,
          ),
        );
      }

      if (filter.visitTeamShortname) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'eventData',
            'visitTeamShortname',
            filter.visitTeamShortname,
          ),
        );
      }

      if (filter.visitTeamColor) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'eventData',
            'visitTeamColor',
            filter.visitTeamColor,
          ),
        );
      }

      if (filter.visitTeamLogo) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'eventData',
            'visitTeamLogo',
            filter.visitTeamLogo,
          ),
        );
      }

      if (filter.partDurationRange) {
        const [start, end] = filter.partDurationRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            partDuration: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            partDuration: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.info) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'eventData',
            'info',
            filter.info,
          ),
        );
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          whereAnd.push({
            ['createdAt']: {
              [Op.gte]: start,
            },
          });
        }

        if (
          end !== undefined &&
          end !== null &&
          end !== ''
        ) {
          whereAnd.push({
            ['createdAt']: {
              [Op.lte]: end,
            },
          });
        }
      }
    }

    const where = { [Op.and]: whereAnd };

    let {
      rows,
      count,
    } = await options.database.eventData.findAndCountAll({
      where,
      include,
      limit: limit ? Number(limit) : undefined,
      offset: offset ? Number(offset) : undefined,
      order: orderBy
        ? [orderBy.split('_')]
        : [['createdAt', 'DESC']],
      transaction: SequelizeRepository.getTransaction(
        options,
      ),
    });

    rows = await this._fillWithRelationsAndFilesForRows(
      rows,
      options,
    );

    return { rows, count };
  }

  static async findAllAutocomplete(query, limit, options: IRepositoryOptions) {
    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let whereAnd: Array<any> = [{
      tenantId: tenant.id,
    }];

    if (query) {
      whereAnd.push({
        [Op.or]: [
          { ['id']: SequelizeFilterUtils.uuid(query) },

        ],
      });
    }

    const where = { [Op.and]: whereAnd };

    const records = await options.database.eventData.findAll(
      {
        attributes: ['id', 'id'],
        where,
        limit: limit ? Number(limit) : undefined,
        order: [['id', 'ASC']],
      },
    );

    return records.map((record) => ({
      id: record.id,
      label: record.id,
    }));
  }

  static async _createAuditLog(
    action,
    record,
    data,
    options: IRepositoryOptions,
  ) {
    let values = {};

    if (data) {
      values = {
        ...record.get({ plain: true }),

      };
    }

    await AuditLogRepository.log(
      {
        entityName: 'eventData',
        entityId: record.id,
        action,
        values,
      },
      options,
    );
  }

  static async _fillWithRelationsAndFilesForRows(
    rows,
    options: IRepositoryOptions,
  ) {
    if (!rows) {
      return rows;
    }

    return Promise.all(
      rows.map((record) =>
        this._fillWithRelationsAndFiles(record, options),
      ),
    );
  }

  static async _fillWithRelationsAndFiles(record, options: IRepositoryOptions) {
    if (!record) {
      return record;
    }

    const output = record.get({ plain: true });

    const transaction = SequelizeRepository.getTransaction(
      options,
    );



    return output;
  }
}

export default EventDataRepository;
