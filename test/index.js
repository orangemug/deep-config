var assert = require("assert");
var configFn = require("../lib/deep-config");
var readmeTester = require("readme-tester");


describe("deep-config", function() {

  it("should produce empty object when there is no config dir", function() {
    var out = configFn(__dirname+"/data/foo");
    assert.deepEqual(out, {});
  });

  it("should produce empty object when no config in dir", function() {
    var out = configFn(__dirname+"/data/no_config");
    assert.deepEqual(out, {});
  });

  it("should fall back to default when no env config", function() {
    var out = configFn(__dirname+"/data/without_env");

    assert.deepEqual(out, {
      a: 2,
      b: {
        ba: "three",
        bb: 0,
        bc: "",
        bd: "foobar"
      }
    });
  });

  it("should merge values with env config", function() {
    var out = configFn(__dirname+"/data/with_env", "staging");

    assert.deepEqual(out, {
      a: 2,
      b: {
        ba: "three",
        bb: 0,
        bc: "",
        bd: "foobar"
      }
    });
  });

  it("README should show no errors", function(done) {
    readmeTester(__dirname+"/../", function(err) {
      assert.ifError(err);
      done();
    });
  })
});
