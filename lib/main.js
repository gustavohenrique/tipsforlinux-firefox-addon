var tabs = require("tabs");
var data = require("self").data;
var widgets = require("widget");
var panels = require("panel");

widgets.Widget({
  id: "widget",
  label: "Search in tipsforlinux.com",
  contentURL: data.url("tipsforlinux.ico"),
  panel: panels.Panel({
    width: 165,
    height: 45,
    contentURL: data.url("panel.html"),
    contentScriptFile: [data.url("jquery.js"), data.url("panel.js")],
    onMessage: function(message){
       this.hide();
       tabs.open("http://tipsforlinux.com/tips/search/?text="+message);
    }
  })
});

