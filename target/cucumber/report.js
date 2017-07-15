$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("2nd_login_logout.feature");
formatter.feature({
  "line": 3,
  "name": "As a user,",
  "description": "I want to be able to login and logout",
  "id": "as-a-user,",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@duper"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Login and Logout",
  "description": "",
  "id": "as-a-user,;login-and-logout",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@demo2"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "am on the \"Landing\" Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter my \"Username\" as \"\u003cUsername_Details\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter my \"Password\" as \"\u003cPassword_Details\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click \"Login\" button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "am on the \"Home\" Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "Login Details",
  "description": "",
  "id": "as-a-user,;login-and-logout;login-details",
  "rows": [
    {
      "cells": [
        "Username_Details",
        "Password_Details"
      ],
      "line": 15,
      "id": "as-a-user,;login-and-logout;login-details;1"
    },
    {
      "cells": [
        "wegit",
        "12345678"
      ],
      "line": 16,
      "id": "as-a-user,;login-and-logout;login-details;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Login and Logout",
  "description": "",
  "id": "as-a-user,;login-and-logout;login-details;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@duper"
    },
    {
      "line": 6,
      "name": "@demo2"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "am on the \"Landing\" Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter my \"Username\" as \"wegit\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter my \"Password\" as \"12345678\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click \"Login\" button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "am on the \"Home\" Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Landing",
      "offset": 11
    }
  ],
  "location": "snd_login_test.am_on_the_Page(String)"
});
formatter.result({
  "duration": 14395328283,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 12
    },
    {
      "val": "wegit",
      "offset": 26
    }
  ],
  "location": "snd_login_test.i_enter_my_as(String,String)"
});
formatter.result({
  "duration": 88249906,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 12
    },
    {
      "val": "12345678",
      "offset": 26
    }
  ],
  "location": "snd_login_test.i_enter_my_as(String,String)"
});
formatter.result({
  "duration": 58331138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 9
    }
  ],
  "location": "snd_login_test.i_click_button(String)"
});
formatter.result({
  "duration": 1185582154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 11
    }
  ],
  "location": "snd_login_test.am_on_the_Page(String)"
});
formatter.result({
  "duration": 8113829,
  "status": "passed"
});
formatter.uri("Ist_login_test.feature");
formatter.feature({
  "line": 2,
  "name": "As a user,",
  "description": "I want to be able to login and logout",
  "id": "as-a-user,",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@duper"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Login and Logout",
  "description": "",
  "id": "as-a-user,;login-and-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@demo2"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "am on the Landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter my Username as wegit",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter my Password as 123455678",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "am on the Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ist_login_test.am_on_the_Landing_Page()"
});
formatter.result({
  "duration": 471563591,
  "status": "passed"
});
formatter.match({
  "location": "ist_login_test.i_enter_my_Username_as_wegit()"
});
formatter.result({
  "duration": 64444657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123455678",
      "offset": 23
    }
  ],
  "location": "ist_login_test.i_enter_my_Password_as(int)"
});
formatter.result({
  "duration": 54013707,
  "status": "passed"
});
formatter.match({
  "location": "ist_login_test.i_click_Login_button()"
});
formatter.result({
  "duration": 716385817,
  "status": "passed"
});
formatter.match({
  "location": "ist_login_test.am_on_the_Home_Page()"
});
formatter.result({
  "duration": 10739697973,
  "status": "passed"
});
});