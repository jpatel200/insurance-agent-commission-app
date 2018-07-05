const CommissionPlan = require('./CommissionPlan');

const fs = require("fs");


//load commission plans from JSON only once
let content = fs.readFileSync("./config/commissionPlan.json");
let commissionPlansJSON = JSON.parse(content);
let commissionPlanMap = new Map();
for (let aCommissionPlan of commissionPlansJSON.commissionPlan) {


    let commissionPlan = new CommissionPlan(aCommissionPlan.plan, aCommissionPlan.sellingAgentCommission, aCommissionPlan.superAgentCommissions);
    commissionPlanMap.set(aCommissionPlan.plan, commissionPlan);


}


/**
 * Factory class for creating different Commission Plans based on the given input - Plan Type (e.g. 'A' or 'B'). Currently it supports two commission plans A & B but due to its design pattern ( Factory Design Patterns) it can be easily extended to support more commission plans 
 * without impacting other modules/classes
 * @constructor
 * @property createCommissionPlan function for creating commission plan given plan type ( 'A' or 'B')
 * @property agenthierarchy agent commission hierarchy which as commission % for selling agent and super agents
 */
function CommissionPlanFactory() {

    /**
    * Creates commission plan given plan type ( 'A' or 'B')
    * @param {String} - Paln Type one character string 'A' or 'B'
    * @returns {CommissionPlan} Commission Plan A or B
    **/
    this.createCommissionPlan = function (type) {

        if (!type) throw new Error("Plan Type can not be null")
        let commissionPlan = commissionPlanMap.get(type);
      
        return commissionPlan;

    }

}

module.exports = CommissionPlanFactory;