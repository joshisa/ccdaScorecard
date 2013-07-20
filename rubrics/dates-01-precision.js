var common = require('../lib/common');
var rubric = module.exports = function(){};

rubric.prototype.test = function datePrecision(d){
  if (d.match(/000/)){
    this.fail(d);
  }
}

var times = "//h:birthTime/@value | " +
            "//h:effectiveTime/@value | " + 
            "//h:effectiveTime/h:low/@value | "+
            "//h:effectiveTime/h:high/@value";

rubric.prototype.inputs = function(){
  return common.xpath(this.manager.ccda, times).map(function(t){
    return t.value();
  });
}
