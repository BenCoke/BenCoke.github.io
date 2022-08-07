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
  var feedback = "<h2>Feedback</h2><p>If you cannot access any part of this site or want to report an accessibility problem, please tell us.</p><p>Email: <a href='mailto:" + localStorage.getItem('feedback-email') + "'>" + localStorage.getItem('feedback-email') + "</a></p><p>Telephone: " + localStorage.getItem('feedback-telephone') + "</p><p>Name: " + localStorage.getItem('feedback-name') + "</p><p><a href='" + localStorage.getItem('contact-form') + "'>Contact form</a></p><p>Response process: " + localStorage.getItem('response-process') + "</p>";

  var enforcement = "<h2>Enforcement procedure</h2><p>The Equality and Human Rights Commission enforces the <a href='https://www.legislation.gov.uk/uksi/2018/952/regulation/4/made'>accessibility regulations</a>(the Public Sector Bodies(Websites and Mobile Applications)(No. 2) Accessibility Regulations 2018).</p><p>If you're not happy with how we respond to your feedback, <a href='https://www.equalityadvisoryservice.com'>contact the Equality Advisory and Support Service</a>. They are an independent advice service. They will advise you on what to do next.";

  var complianceStatement = "<h2>Compliance statement</h2><p>" + localStorage.getItem('organisation-name') + " commits to making its websites accessible in line with the accessibility regulations. This accessibility statement applies to " + localStorage.getItem('website-url') + ".</p><p>This statement was prepared on " + localStorage.getItem('prepared-date') + " and last reviewed on " + localStorage.getItem('reviewed-date') + ".</p><p>This website is " + localStorage.getItem('compliance-query') + " compliant with the <a href='https://www.w3.org/TR/WCAG21'>Web Content Accessibility Guidelines version 2.1</a> (WCAG) A and AA success criteria.</p>";

  var audited = "";
  if (localStorage.getItem('audited-query') == 'yes') {
    audited = localStorage.getItem('audited-details') + " audited the website on " + localStorage.getItem('audited-date') + ".";
  }

  var nonCompliantContent = "";

  var content = title + accessibility + feedback + enforcement + complianceStatement + audited + nonCompliantContent;
  return content;
}
