'use strict'
const BaseCommissionPlan = require('../../factories/CommissionPlanFactory/BaseCommissionPlan');
const BasePolicy = require('../Policy/BasePolicy');

/**
 *
 * @class
 * Policy Class holds policy inforamtion
 * @property {object} commissionPlan - commission plan one of predefined plan A or B
 * @property {number} policyAmount - policy amount
 * */
class Policy extends BasePolicy{

  /**
   * @constructor 
   * @param {object} commissionPlan - commission plan one of predefined plan A or B
   * @param {number} policyAmount - policy amount
   **/ 
    constructor(commissionPlan,policyAmount){

        super();
        //parameter validations
        if(! commissionPlan instanceof BaseCommissionPlan) throw new Error("commissionPlan is not of type CommissionPlan")
        if(! typeof policyAmount === 'number') throw new Error("policyAmount is not a number")

        this.commissionPlan = commissionPlan;
        this.policyAmount = policyAmount;

       

    }

}

    

module.exports = Policy;