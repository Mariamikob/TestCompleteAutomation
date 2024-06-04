function openApp(){
  TestedApps.Orders.Run().MainForm;
  return this;

}
function closeApp(){
  TestedApps.Orders.Terminate();
  return this;
}

module.exports.openApp = openApp;
module.exports.closeApp = closeApp;