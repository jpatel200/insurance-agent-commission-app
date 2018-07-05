/**
 * Calculates agents commissions for a policy
 */

class CommissionCalculator {


   /**
   * @param {object} policy - Policy object which contain policyAmount and commissionPlan
   * @param {object} AgentHierarchy - AgenentHierarchy object which contains selling agents and list of super agents
   **/
    constructor(policy, agentHierarchy){

        this.policy = policy;
        this.agentHierarchy = agentHierarchy;

    }

    /**
   * Computes agent commission using Policy and CommissionPlan
   * @returns {object} Commission Summary listing commission for each agent
   **/
    computeAgentCommission() {

        let policyAmount = this.policy.policyAmount;
        let commissionPlan = this.policy.commissionPlan;
        let agentHierarchy = this.agentHierarchy;

        let agentCommissionSummary = {};
        let commissions = {};

        //compute selling agent commission
        let sellingAgent = agentHierarchy.sellingAgent;

        let sellingAgentCommission = (policyAmount * commissionPlan.sellingAgentCommission * sellingAgent.commission);

        commissions.sellingAgent = sellingAgentCommission || 0;

        //compute super agents commission
        let superAgentCommissions = commissionPlan.superAgentCommissions;

        agentHierarchy.superAgents.forEach((agent,index) => {

            let superAgentCommission = (policyAmount * superAgentCommissions[index] * agent.commission);

            commissions[agent.agentName] = superAgentCommission || 0;
            
        });
        agentCommissionSummary.commissions=commissions;



        return agentCommissionSummary;

    }


}

module.exports = CommissionCalculator;