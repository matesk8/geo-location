/* eslint-disable no-undef */
import { getCustomersWithin100km } from './customer.service';

const { expect } = require('chai');

const expectedCustomers = [
    { name: 'Ian Kehoe', user_id: 4 },
    { name: 'Nora Dempsey', user_id: 5 },
    { name: 'Theresa Enright', user_id: 6 },
    { name: 'Eoin Ahearn', user_id: 8 },
    { name: 'Richard Finnegan', user_id: 11 },
    { name: 'Christina McArdle', user_id: 12 },
    { name: 'Olive Ahearn', user_id: 13 },
    { name: 'Michael Ahearn', user_id: 15 },
    { name: 'Patricia Cahill', user_id: 17 },
    { name: 'Eoin Gallagher', user_id: 23 },
    { name: 'Rose Enright', user_id: 24 },
    { name: 'Stephen McArdle', user_id: 26 },
    { name: 'Oliver Ahearn', user_id: 29 },
    { name: 'Nick Enright', user_id: 30 },
    { name: 'Alan Behan', user_id: 31 },
    { name: 'Lisa Ahearn', user_id: 39 }
];

describe('getCustomersWithin100km', () => {
    it('should return the expected customers', async () => {
        const sortedCustomersWithin100km = await getCustomersWithin100km('src/mockData/customers.txt');
        expect(sortedCustomersWithin100km.length).to.equal(expectedCustomers.length);
        expect(sortedCustomersWithin100km[0]).to.deep.equal(expectedCustomers[0]);
    });
});
