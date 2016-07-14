var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is running.
var server = supertest.agent("http://127.0.0.1:3001");

// Unit test sample

describe("Default API Search ",function(){

    it("should return 200",function(done){

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