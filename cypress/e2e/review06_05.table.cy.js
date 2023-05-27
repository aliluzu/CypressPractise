/// <reference types= "cypress" />

describe('Testing tables', () => {
    let keysArray = []
    it.skip('Sort a table alphabetically', () => {
        cy.visit('https://openweathermap.org/api/history-data-state');
        cy.get('table.material-table td:first-child').then(($els) => {
            let actualStates = Cypress.$.makeArray($els).map(($el => $el.innerText)) //jQuery
            console.log(actualStates)
            let expectedStates = actualStates.slice().sort().reverse()
            expect(actualStates).to.deep.equal(expectedStates)
        });
    })


    it.skip('if element is exist ', () => {
        cy.visit('https://openweathermap.org/api/history-data-state');
        cy.get('table.material-table td:first-child').then(($els) => {
            let actualStates = Cypress.$.makeArray($els).map(($el => $el.innerText)) //jQuery
            console.log(actualStates)
            let expectedStates = actualStates.slice().sort().reverse()
            expect(actualStates).to.include.members(expectedStates)
        });
    })

    it.skip('Checking sort', () => {
        cy.visit('https://openweathermap.org/api/history-data-state');
        cy.get('table.material-table td:first-child').then(($els) => {
            let actualStates = Cypress.$.makeArray($els).map(($el => $el.innerText)) //jQuery
            console.log(actualStates)
            let expectedStates = actualStates.slice().sort()//.reverse()
            expect(actualStates).to.have.ordered.members(expectedStates)
        });
    })

    it.skip('Calculate Total', () => {
        cy.visit('https://openweathermap.org/api/history-data-state');
        cy.get('table.material-table td:last-child').then(($els) => {
            let arr = Cypress.$.makeArray($els).map(($el => $el.innerText)) //jQuery
            console.log(arr
                .map((el) => +el.replace(/\D/g, ""))
                .reduce((sum, el) => sum + el, 0))
         
        });
    })

    it('Calculate Total', () => {
        cy.visit('https://demoqa.com/webtables');
        cy.get('div.rt-table').within(() => {
            cy.get('div.rt-th').then(($els) => {
                let keysArray = Cypress.$.makeArray($els).map(($el) => $el.innerText)
                console.log(keysArray)
            })
            cy.get('div.rt-tr-group').each((_, row) => {
                cy.get('div.rt-tr-group').eq(row).find('rt-td').then(($els) => {
                    let dataArr = Cypress.$.makeArray($els).map(($el) => $el.innerText)
                    // let temObj = dataArr.reduce((obj, el, idx) => {
                    //     return(...obj, [keysArray[idx]]: el)
                    // }, {})
                });
            })
        })
    })
  
  
})