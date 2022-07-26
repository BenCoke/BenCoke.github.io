function downloadHTML() {
  var top = "<!DOCTYPE html><html><body>";
  var bot = "</body></html>";
  var content = contentHTML();
  var filename = "statement.html";
  var text = top + content + bot;
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function contentHTML() {
  var title = "<h1>Accessibility Statement</h1>";
  var accessibility = "<h2>Accessibility</h2><p>We want " + localStorage.getItem('organisation-name') + " to be accessible and usable for as many people as possible.</p><p>We try to make our site more accessible by using:</p>";
  //var accessibilityList =
  var feedback = "<h2>Feedback</h2><p>If you cannot access any part of this site or want to report an accessibility problem, please tell us at:</p>"


  var content = title + accessibility + feedback;
  return content;
}
