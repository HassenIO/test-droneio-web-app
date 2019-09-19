const request = require('supertest');
const app = require('./server');

describe('GET /', function () {
    it('respond with status 200', function (done) {
        request(app)
            .get('/')
            .expect('Hello Drone.io!')
            .expect(200, done);
    });
});

