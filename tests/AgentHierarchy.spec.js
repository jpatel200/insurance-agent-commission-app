const expect = require('chai').expect;
const CommissionCalculator = require('../service/CommissionCalculator');
const AgentHierarchy = require('../models/AgentHierarchy');
const Agent = require('../models/Agent');
const Policy = require('../models/Policy');
const CommissionPlanFactory = require('../factories/CommissionPlanFactory');


describe('AgentHierarchy', () => {
    describe('exmple of pending test', () => {
        xit('fake test will not run', () => {
            expect(true).to.equal(false);


        });


    })

    describe('constructor', () => {

        it('should have all expected methods and fields', () => {

            const agentHierarchy = new AgentHierarchy();

            this.sellingAgent = {};
            this.superAgents = [];

            expect(agentHierarchy.hasOwnProperty('sellingAgent')).to.equal(true);
            expect(agentHierarchy.hasOwnProperty('superAgents')).to.equal(true);
            expect(typeof agentHierarchy.sellingAgent).to.equal('object');
            expect(typeof agentHierarchy.superAgents).to.equal('object');
            expect(typeof agentHierarchy.setSellingAgent).to.equal('function');
            expect(typeof agentHierarchy.setSuperAgent).to.equal('function');


        }); //end of it('should have all expected methods and fields')

        it('should take an initial value set to an internal "value field', () => {


            let agentHierarchy = new AgentHierarchy();
            let sellingAgent = new Agent("Selling Agent", 'S', 0.02);
            agentHierarchy.setSellingAgent(sellingAgent);
            agentHierarchy.setSuperAgent(new Agent("SuperAgent_1", "U", 0.0250));
            agentHierarchy.setSuperAgent(new Agent("SuperAgent_2", "U", 0.0325));
            agentHierarchy.setSuperAgent(new Agent("SuperAgent_3", "U", 0.0225));

            expect(agentHierarchy.sellingAgent).to.equal(sellingAgent);
            expect(agentHierarchy.sellingAgent instanceof Agent).to.equal(true);
            expect(agentHierarchy.superAgents.length).to.equal(3);

        });



    }); //end describe('constructor')


    describe('methods', () => {



        describe('setSellingAgent', () => {
            it('should correctly set the selling agent commission', () => {


                let agentHierarchy = new AgentHierarchy();
                let sellingAgent = new Agent("Selling Agent", 'S', 0.02);
                agentHierarchy.setSellingAgent(sellingAgent);


                expect(agentHierarchy.sellingAgent.commission).to.equal(0.02);
                expect(agentHierarchy.sellingAgent.agentType).to.equal('S');
                expect(agentHierarchy.sellingAgent.agentName).to.equal('Selling Agent');


            });

            it('commission should not exceed 20% of policy amount', () => {


                let agentHierarchy = new AgentHierarchy();
                let sellingAgent = new Agent("Selling Agent", 'S', 0.02);
                agentHierarchy.setSellingAgent(sellingAgent);

                expect(agentHierarchy.sellingAgent.commission).to.not.be.above(0.20);
               


            });
           
               
               

            }) //end describe setSellingAgent

            describe('setSuperAgent', () => {
                it('should correctly set the super agent commissions', () => {


                    let agentHierarchy = new AgentHierarchy();
                    let sellingAgent = new Agent("Selling Agent", 'S', 0.02);
                    agentHierarchy.setSellingAgent(sellingAgent);
                    agentHierarchy.setSuperAgent(new Agent("SuperAgent_1", "U", 0.0250));
                    agentHierarchy.setSuperAgent(new Agent("SuperAgent_2", "U", 0.0325));
                    agentHierarchy.setSuperAgent(new Agent("SuperAgent_3", "U", 0.0225));

                
                    expect(agentHierarchy.superAgents[0].commission).to.equal(0.0250);
                    expect(agentHierarchy.superAgents[0].agentType).to.equal('U');
                    expect(agentHierarchy.superAgents[0].agentName).to.equal('SuperAgent_1');
                    expect(agentHierarchy.superAgents.length).to.equal(3);



                });

            }) //end describe setSuperAgent

            

        }); //end describe('methods')





    }); //end describe('CommissionCalculator')