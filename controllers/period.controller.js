const db = require("../models");
const formatDate = require("../utils/formatDate");
const createError = require("../utils/error");
module.exports = {
  createPeriod: async (req, res, next) => {
    try {
      const body = req.body;
      const periodSeason = await db.Period.create(body);
      return res.status(201).json({
        success: true,
        message: `Tạo mùa ${body.season} thành công`,
        period: periodSeason,
      });
    } catch (error) {
      return next(createError(res, 500, error.message));
    }
  },
  setDatePeriod: async (req, res, next) => {
    try {
      const seasonId = req.params.id;
      const period = await db.Period.findAll({ where: { id: seasonId } });
      const today = new Date();
      const year = today.getFullYear();
      let startDate, endDate;
      if (period.length > 0) {
        startDate = new Date(
          year,
          period[0].startDate.split("-")[0],
          period[0].startDate.split("-")[1]
        );
        endDate = new Date(
          year,
          period[0].endDate.split("-")[0],
          period[0].endDate.split("-")[1]
        );
      } else {
        return next(
          createError(res, 403, "Không set được kỳ, vui lòng kiểm tra lại")
        );
      }

      return res.json({
        seasonId: period[0].id,
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
      });
    } catch (error) {
      return next(createError(res, 500, error.message));
    }
  },
  setPeriod: async (req, res, next) => {
    try {
      const body = req.body;
      const periodId = req.params.id;
      const existedPeriod = await db.Period.findByPk(periodId);
      if (!existedPeriod) {
        return next(createError(res, 404, "Không tìm thấy kỳ tương ứng"));
      }

      const periods = await db.Period.findAll();
      const setPeriod = periods.map(async (period) => {
        if (period.id === periodId) {
          await period.update(body);
        } else {
          await period.update({ status: 0 });
        }
      });

      await Promise.all(setPeriod);

      return res.json({
        success: true,
        message: "set kỳ tặng quà thành công",
      });
    } catch (error) {
      return next(createError(res, 500, error.message));
    }
  },
  disablePeriod: async (req, res, next) => {
    try {
      const { status } = req.body;
      const periodId = req.params.id;
      const period = await db.Period.findAll({ where: { id: periodId } });
      const existedPeriod = await db.Period.findByPk(periodId);
      if (!existedPeriod) {
        return next(createError(res, 404, "Không tìm thấy kỳ tương ứng"));
      }
      await existedPeriod.update({ status });
      if (status) {
        return res.json({
          success: true,
          message: `Kỳ ${period[0].season} hoạt động lại`,
        });
      } else {
        return res.json({
          success: true,
          message: `Vô hiệu hóa kỳ ${period[0].season}`,
        });
      }
    } catch (error) {
      return next(createError(res, 500, error.message));
    }
  },

  getCurrentPeriod: async (req, res, next) => {
    try {
      const periodCurrent = await db.Period.findOne({ where: { status: 1 } });
      return res.json({
        success: true,
        message: `Mùa hiện tại là ${periodCurrent.season}`,
        periodCurrent,
      });
    } catch (error) {
      return next(createError(res, 500, error.message));
    }
  },
};
