

const Policy = require('../../models/Policy');
const AgentHierarchy = require('../../models/AgentHierarchy');
const CommissionPlanFactory = require('../../factories/CommissionPlanFactory');
const CommissionCalculator = require('../../service/CommissionCalculator');
const Agent = require('../../models/Agent');
const joi = require('joi');
const logger = require('winston');

const joiOptions = { convert: true, abortEarly: false };

const messageSchema = joi.object({
    policy: joi.object({
        commissionPlan: joi.string().required(),
        policyAmount: joi.number().required()
    }).required(),
    agentHierarchy: joi.object({
        sellingAgent: joi.object({
            agentName: joi.string().required(),
            commission: joi.number().required()
         }).required(),
        superAgents:  joi.array().items(joi.object({
                        agentName: joi.string().required(),
                        commission: joi.number().required()}).required()
    ).required()
    }).required()
}).required();



/**
 * Controller calss for Calculating agents commissions for a policy. The class receives policy detail and agent commission hierarchy in JSON format.
 * This is a controller class for processing JSON request received from endpoint /policy
 * @property {object} policy - policy detail
 * @property {object} agenthierarchy - agent commission hierarchy which as commission % for selling agent and super agents
 */
class CommissionService {

    /**
   * @constructor 
   * @param {object} commissionRequest - Commission request in JSON object form. The request contains a policy detail and agent hierarchy   * @param {AgenentHierarchy} agentHierarchy - AgenentHierarchy object which contains sellingAgent and list of superAgents
   **/ 
    constructor(commissionRequest){

        
        const result = joi.validate(commissionRequest,messageSchema, joiOptions);
        if (result.error){
            logger.error(result.error);
            throw new Error(result.error.details[0].message.split('"').join(''));
        }
   
        let p = commissionRequest.policy;
        let aHierarchy = commissionRequest.agentHierarchy;
       
        if (p){
                let commissionPlanFactory = new CommissionPlanFactory();
                let commissionPlan = commissionPlanFactory.createCommissionPlan(p.commissionPlan);
                this.policy = new Policy(commissionPlan,p.policyAmount);
                
            }
        if (aHierarchy) {
            this.agentHierarchy = new AgentHierarchy();
            let aSellingAgent = aHierarchy.sellingAgent;
            let sellingAgent = new Agent(aSellingAgent.agentName, 'S', aSellingAgent.commission);

            this.agentHierarchy.setSellingAgent(sellingAgent);
            aHierarchy.superAgents.forEach((aSuperAgent,index)=> {

                
                let superAgent = new Agent(aSuperAgent.agentName, 'U', aSuperAgent.commission);
                this.agentHierarchy.setSuperAgent(superAgent);
            })
           
            

        }
    }

    /**
   * Computes agent commission using Policy and CommissionPlan. It delegates request to CommissionCalculator for computing commission summary
   * @returns {commissionSummary} Commission Summary listing commission for each agent
   **/
    computeAgentCommission(){

        //TODO add validation for policy  and agent hierarchy
       
        let commissionCalculator = new CommissionCalculator(this.policy,this.agentHierarchy);
        let agentCommissionSummary = commissionCalculator.computeAgentCommission();
        
        return agentCommissionSummary;

    }

  


    


}
module.exports = CommissionService;