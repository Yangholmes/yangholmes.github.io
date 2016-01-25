var browser=navigator.appName;
var b_version=navigator.appVersion;
var version=parseFloat(b_version);

document.write("<p>Browser name: " + browser + "</p>");
document.write("<p>浏览器版本：")
document.write(navigator.appVersion + "</p>");
document.write("<p>代码：")
document.write(navigator.appCodeName + "</p>")
document.write("<p>平台：")
document.write(navigator.platform + "</p>")
document.write("<p>Cookies 启用：")
document.write(navigator.cookieEnabled + "</p>")
document.write("<p>浏览器的用户代理报头：")
document.write(navigator.userAgent + "</p>")
document.write("<p>Browser version: " + version + "</p>");