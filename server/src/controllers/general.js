import User from "../../data/models/User.js";
import OverallStat from "../../data/models/OverallStat.js";
import Transaction from "../../data/models/Transaction.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getDashboardStats = async (req, res) => {
  try {
    const currentMonth = "November";
    const currentYear = 2021;
    const currentDay = "2021-11-15";

    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });

    const overAllStat = await OverallStat.find({ year: currentYear });

    const {
      totalCustomers,
      yearlySalesTotal,
      yearlyTotalSoldUnits,
      monthlyData,
      salesByCategory,
    } = overAllStat[0];

    const thisMonthStats = overAllStat[0].monthlyData.find(({ month }) => {
      return month === currentMonth;
    });

    const todayStats = overAllStat[0].dailyData.find(({ date }) => {
      return date === currentDay;
    });

    res.status(200).json({
      totalCustomers,
      yearlySalesTotal,
      yearlyTotalSoldUnits,
      monthlyData,
      salesByCategory,
      todayStats,
      thisMonthStats,
      transactions,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
