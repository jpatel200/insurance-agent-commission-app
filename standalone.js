/*
*Standalone class to calculate for a policy given the policy amount, commission plan and agent hierarchy
*/

const AgentHierarchy = require('./models/AgentHierarchy');
const Policy = require('./models/Policy');
const CommissionPlanFactory = require('./factories/CommissionPlanFactory');
const CommissionCalculator = require('./service/CommissionCalculator');
const Agent = require('./models/Agent');

(function(){

console.log("----------------Compute commission summary for plan A-------------------")

//1.create commissionPlan using commission factory
let commissionPlan = new CommissionPlanFactory().createCommissionPlan('A');

console.log("commissionPlan:",commissionPlan);

//2.create new policy with commission plan and policy amount
let policy = new Policy(commissionPlan,100000);
console.log("Policy:", policy);

//3.define Agent Hierarchy
let agentHierarchy = new AgentHierarchy();
let sellingAgent = new Agent("Selling Agent",'S',0.02);
agentHierarchy.setSellingAgent(sellingAgent);
agentHierarchy.setSuperAgent(new Agent("SuperAgent_1","U",0.0250));
agentHierarchy.setSuperAgent(new Agent("SuperAgent_2","U",0.0325));
agentHierarchy.setSuperAgent(new Agent("SuperAgent_3","U",0.0225));

console.log("AgentHierarchy:", agentHierarchy);

let commissionCalculator = new CommissionCalculator(policy,agentHierarchy);

let commissionSummary = commissionCalculator.computeAgentCommission();

console.log("Commission Summary:", commissionSummary);
console.log("");
console.log("");
})();

(function(){
console.log("----------------Compute commission summary for plan B-------------------")
//1.create commissionPlan using commission factory
let commissionPlan = new CommissionPlanFactory().createCommissionPlan('B');

console.log("commissionPlan:",commissionPlan);

//2.create new policy with commission plan and policy amount
let policy = new Policy(commissionPlan,100000);
console.log("Policy:", policy);

//3.define Agent Hierarchy
let agentHierarchy = new AgentHierarchy();
let sellingAgent = new Agent("Selling Agent",'S',0.02);
agentHierarchy.setSellingAgent(sellingAgent);
agentHierarchy.setSuperAgent(new Agent("SuperAgent_1","U",0.0250));
agentHierarchy.setSuperAgent(new Agent("SuperAgent_2","U",0.0325));
agentHierarchy.setSuperAgent(new Agent("SuperAgent_3","U",0.0225));

console.log("AgentHierarchy:", agentHierarchy);

let commissionCalculator = new CommissionCalculator(policy,agentHierarchy);

let commissionSummary = commissionCalculator.computeAgentCommission();

console.log("Commission Summary:", commissionSummary);
console.log("");
console.log("-----------------------------END------------------------------------------")
})();