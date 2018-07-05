const expect = require('chai').expect;
const CommissionCalculator = require('../service/CommissionCalculator');
const AgentHierarchy = require('../models/AgentHierarchy');
const Agent = require('../models/Agent');
const Policy = require('../models/Policy');
const CommissionPlanFactory = require('../factories/CommissionPlanFactory');


describe('CommissionCalculator', () => {
    describe('exmple of pending test', () => {
        xit('fake test will not run', () => {
            expect(true).to.equal(false);


        });


    })

    describe('constructor', () => {

        it('should have all expected methods and fields', () => {

            const commissionCalculator = new CommissionCalculator();

            expect(commissionCalculator.hasOwnProperty('policy')).to.equal(true);
            expect(commissionCalculator.hasOwnProperty('agentHierarchy')).to.equal(true);
            expect(typeof commissionCalculator.policy).to.equal('undefined');
            expect(typeof commissionCalculator.computeAgentCommission).to.equal('function');


        }); //end of it('should have all expected methods and fields')

        it('should take an initial value set to an internal "value field', () => {


            //create commissionPlan 
            let commissionPlan = new CommissionPlanFactory().createCommissionPlan('B');

            //create new policy with commission plan and policy amount
            let policy = new Policy(commissionPlan, 100000);

            //define Agent Hierarchy
            //let agentHierarchy = new AgentHierarchy(0.02, []);
            let agentHierarchy = new AgentHierarchy();
            let sellingAgent = new Agent("Selling Agent", 'S', 0.02);
            agentHierarchy.setSellingAgent(sellingAgent);
            agentHierarchy.setSuperAgent(new Agent("SuperAgent_1", "U", 0.0250));
            agentHierarchy.setSuperAgent(new Agent("SuperAgent_2", "U", 0.0325));
            agentHierarchy.setSuperAgent(new Agent("SuperAgent_3", "U", 0.0225));


            let commissionCalculator = new CommissionCalculator(policy, agentHierarchy);
            expect(commissionCalculator.policy).to.equal(policy);
            expect(commissionCalculator.agentHierarchy).to.equal(agentHierarchy);

        });



    }); //end describe('constructor')


    describe('methods', () => {



        describe('computeAgentCommission', () => {
            it('should correctly calculate agent commissions for Commission plan=B', () => {

                //create commissionPlan 
                let commissionPlan = new CommissionPlanFactory().createCommissionPlan('B');

                //create new policy with commission plan and policy amount
                let policy = new Policy(commissionPlan, 100000);

                //define Agent Hierarchy
                let agentHierarchy = new AgentHierarchy();
                let sellingAgent = new Agent("Selling Agent", 'S', 0.02);
                agentHierarchy.setSellingAgent(sellingAgent);
                agentHierarchy.setSuperAgent(new Agent("SuperAgent_1", "U", 0.0250));
                agentHierarchy.setSuperAgent(new Agent("SuperAgent_2", "U", 0.0325));
                agentHierarchy.setSuperAgent(new Agent("SuperAgent_3", "U", 0.0225));


                let commissionCalculator = new CommissionCalculator(policy, agentHierarchy);

                let commissionSummary = commissionCalculator.computeAgentCommission();

                expect(commissionSummary.commissions.sellingAgent).to.equal(1400);
                expect(commissionSummary.commissions.SuperAgent_1).to.equal(200);
                expect(commissionSummary.commissions.SuperAgent_2).to.equal(130);
                expect(commissionSummary.commissions.SuperAgent_3).to.equal(0);


            }); //it computes agent commissions for commission plan=B

            it('should correctly calculate agent commissions for Commission plan=A', () => {

                //create commissionPlan 
                let commissionPlan = new CommissionPlanFactory().createCommissionPlan('A');

                //create new policy with commission plan and policy amount
                let policy = new Policy(commissionPlan, 100000);

                //define Agent Hierarchy
                let agentHierarchy = new AgentHierarchy();
                let sellingAgent = new Agent("Selling Agent", 'S', 0.02);
                agentHierarchy.setSellingAgent(sellingAgent);
                agentHierarchy.setSuperAgent(new Agent("SuperAgent_1", "U", 0.0250));
                agentHierarchy.setSuperAgent(new Agent("SuperAgent_2", "U", 0.0325));
                agentHierarchy.setSuperAgent(new Agent("SuperAgent_3", "U", 0.0225));

                let commissionCalculator = new CommissionCalculator(policy, agentHierarchy);

                let commissionSummary = commissionCalculator.computeAgentCommission();

                expect(commissionSummary.commissions.sellingAgent).to.equal(1000);
                expect(commissionSummary.commissions.SuperAgent_1).to.equal(125);
                expect(commissionSummary.commissions.SuperAgent_2).to.equal(0);
                expect(commissionSummary.commissions.SuperAgent_3).to.equal(0);


            }); //it computes agent commissions for commission plan=A

        }) //end describe computeCommission




    }); //end describe('methods')





}); //end describe('CommissionCalculator')