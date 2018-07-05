
/**
 *
 * @class
 * Agent Class holds agent information.
 * @property {string} agentName - agent name
 * @property {string} agentType - agent type S=Selling Agent, U=Super Agent
 * @property {number} - commission - commission % in decimal format (0.02). Agent commission should not exceed 20%. Assumption here is agent commission should have upper ceiling 
  */
class Agent {

     /**
   * @constructor 
   * @param {string} agentName - agent name
   * @param {string} agentType - agent type S=Selling Agent, U=Super Agent
   * @param {number} - commission - commission % in decimal format (0.02). Agent commission should not exceed 20%. Assumption here is agent commission should have upper ceiling 
   **/ 
    constructor(agentName, agentType, commission){

        if (!agentName) throw Error("agentName is required field");
        if (!agentType) throw Error("agentType is required field");

       
        //validate agent Type to be one of S=Selling Agent or U=Super Agent
        if (!(agentType == 'S' || agentType == 'U')) throw Error("agentType should be 'S=Selling Agent' or 'U=SuperAgent'");

        //validate agent commission % should not exceed 20% (0.20)
        //assumption here is agent commission should have upper ceiling 
        if (commission > 0.20) throw Error("Agent commission should not exceed 20%")


        this.agentName = agentName;
        this.agentType = agentType;
        this.commission = commission || 0;


    }

   
}

module.exports = Agent;