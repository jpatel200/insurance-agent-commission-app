const Agent = require('../Agent');

/** 
 *
 * @class
 * Aagent Hierarchy Class holds selling agent and super agents commission information
 * @property {object} sellingAgent - Agent object (selling agent) 
 * @property {array} superAgents - Array of super agents. 
 * 
 * */
class AgentHierarchy {

  
    constructor(){
        //TODO - Create Agent object and use it here
        this.sellingAgent={};
        this.superAgents = [];
        
    }
   /**
   * @param {object} agent - Agent (Selling agent) object with agent name, agent type=S and agent commission
   **/
    setSellingAgent(agent){

        if (! (agent instanceof Agent)) throw Error("AgentHierarchy.setSellingAgent: agent should be of type Agent")
        this.sellingAgent=agent;

    }

   /**
   * @param {object} agent - Agent (super agent) object with agent name, agent type=S and agent commission
   **/
    setSuperAgent(agent){

        if (! (agent instanceof Agent)) throw Error("AgentHierarchy.setSuperAgent: agent should be of type Agent")
        this.superAgents.push(agent);

    }

















































}

module.exports = AgentHierarchy;