const { describe } = require('node:test');
const contactsUtils = require('../contactsUtils.js');

describe('Contacts Utils', () => {

    describe('findAllContactsByName', () => {

        it('should return contacts matching the query', () => {
            const contacts = [
                { name: 'Alice Johnson', email: 'alice@example.com', phone: '123-456-7890' },
                { name: 'Bob Smith', email: 'bob@example.com', phone: '123-456-7890' },
                { name: 'Alice Keys', email: 'alicia@example.com', phone: '123-456-7890' }
            ];
            const query = 'Alice';
            const result = contactsUtils.findAllContactsByName(contacts, query);
            expect(result).toEqual([
                { name: 'Alice Johnson', email: 'alice@example.com', phone: '123-456-7890' },
                { name: 'Alice Keys', email: 'alicia@example.com', phone: '123-456-7890' }
            ]);

            expect(contactsUtils.findAllContactsByName(contacts, 'Adam')).toEqual([])
        });
    });
    describe('objectArrayToMap', () => {
        it('should convert an array of objects to a Map', () => {
            const objArr = [
                { name: 'Alice', email: 'alice@example.com', phone: '123-456-7890' },
                { name: 'Bob', email: 'bob@example.com', phone: '987-654-3210' }
            ];
            const map = contactsUtils.objectArrayToMap(objArr);
            expect(map instanceof Map).toBe(true);
            expect(map.size).toBe(2);
            expect(map.get('alice@example.com')).toEqual({ name: 'Alice', email: 'alice@example.com', phone: '123-456-7890' });
            expect(map.get('bob@example.com')).toEqual({ name: 'Bob', email: 'bob@example.com', phone: '987-654-3210' });
        });

        it('should return an empty Map for an empty array', () => {
            const map = contactsUtils.objectArrayToMap([]);
            expect(map instanceof Map).toBe(true);
            expect(map.size).toBe(0);
        });

        it('should overwrite duplicate emails with the last occurrence', () => {
            const objArr = [
                { name: 'Alice', email: 'alice@example.com', phone: '123-456-7890' },
                { name: 'Alice2', email: 'alice@example.com', phone: '000-000-0000' }
            ];
            const map = contactsUtils.objectArrayToMap(objArr);
            expect(map.size).toBe(1);
            expect(map.get('alice@example.com')).toEqual({ name: 'Alice2', email: 'alice@example.com', phone: '000-000-0000' });
        });
    });

    describe('mapToObjectArray', () => {
        it('should convert a Map to an array of objects', () => {
            const map = new Map();
            map.set('alice@example.com', { name: 'Alice', email: 'alice@example.com', phone: '123-456-7890' });
            map.set('bob@example.com', { name: 'Bob', email: 'bob@example.com', phone: '987-654-3210' });
            const arr = contactsUtils.mapToObjectArray(map);
            expect(Array.isArray(arr)).toBe(true);
            expect(arr).toContainEqual({ name: 'Alice', email: 'alice@example.com', phone: '123-456-7890' });
            expect(arr).toContainEqual({ name: 'Bob', email: 'bob@example.com', phone: '987-654-3210' });
            expect(arr.length).toBe(2);
        });

        it('should return an empty array for an empty Map', () => {
            const arr = contactsUtils.mapToObjectArray(new Map());
            expect(Array.isArray(arr)).toBe(true);
            expect(arr.length).toBe(0);
        });
    });
});