var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://127.0.0.1:3001");

// UNIT test begin

describe("Default API Search ",function(){

    // #1 should return home page

    it("should return 200",function(done){

        // calling home page api
        server
            .get("/api/tweets/@cnn")
            .expect(200) // This is HTTP response
            .end(function(err,res){
                // HTTP status should be 200
                res.status.should.equal(200);

                done();
            });
    });

});