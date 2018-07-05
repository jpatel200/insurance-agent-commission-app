const BaseCommissionPlan = require('./BaseCommissionPlan.js')

/**
 * Commission Plan
 * @constructor
 * @property {string} plan  plan type - one of A or B
 * @property {array} sellingAgentCommission selling agent commission agent commission hierarchy which as commission % for selling agent and super agents
 */
class CommissionPlan extends BaseCommissionPlan{

    
    constructor(plan,sellingAgentCommission,superAgentCommissions){

        super();

        if(!(plan == 'A' || plan == 'B')) throw new Error(`CommissionPlan.plan: ${plan} is not a valid . Should be one of 'A' or 'B'`);
        if(! typeof sellingAgentCommission == "number") throw new Error("CommissionPlan.sellingAgentCommission: should be of type number");
        if (!Array.isArray(superAgentCommissions)) throw new Error("CommissionPlan.superAgentCommissions: should be of type array");
       
        this.plan=plan;
        this.sellingAgentCommission = sellingAgentCommission;
        this.superAgentCommissions = superAgentCommissions;
       
    }


}

module.exports = CommissionPlan;