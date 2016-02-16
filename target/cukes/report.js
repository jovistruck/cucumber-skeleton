$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/jov/bdd/search/search.feature");
formatter.feature({
  "line": 2,
  "name": "",
  "description": "AS A User\nI WANT TO perform a search using the springer link search\nSO THAT I can investigate the returned search results",
  "id": "",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@search"
    }
  ]
});
formatter.before({
  "duration": 669791332,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "A user searches for items that exist (happy path)",
  "description": "",
  "id": ";a-user-searches-for-items-that-exist-(happy-path);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the springer link home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I search for the item \"Algebra and Logic\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the first result returned within the results is \"Algebra and Logic\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepDef.navigateToSearch()"
});
formatter.result({
  "duration": 14674739366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Algebra and Logic",
      "offset": 23
    }
  ],
  "location": "SearchStepDef.I_search_for_the_term(String)"
});
formatter.result({
  "duration": 14541185893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Algebra and Logic",
      "offset": 49
    }
  ],
  "location": "SearchStepDef.the_first_result_returned_within_the_results_is(String)"
});
formatter.result({
  "duration": 293989309,
  "status": "passed"
});
formatter.after({
  "duration": 78201,
  "status": "passed"
});
formatter.before({
  "duration": 78207032,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "A user searches for items that exist (happy path)",
  "description": "",
  "id": ";a-user-searches-for-items-that-exist-(happy-path);;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the springer link home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I search for the item \"Medicinal Chemistry Research\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the first result returned within the results is \"Medicinal Chemistry Research\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepDef.navigateToSearch()"
});
formatter.result({
  "duration": 15511211718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Medicinal Chemistry Research",
      "offset": 23
    }
  ],
  "location": "SearchStepDef.I_search_for_the_term(String)"
});
formatter.result({
  "duration": 17695577080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Medicinal Chemistry Research",
      "offset": 49
    }
  ],
  "location": "SearchStepDef.the_first_result_returned_within_the_results_is(String)"
});
formatter.result({
  "duration": 509217473,
  "status": "passed"
});
formatter.after({
  "duration": 34700,
  "status": "passed"
});
formatter.before({
  "duration": 81621843,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "A user searches for items that do not exist (unhappy path)",
  "description": "",
  "id": ";a-user-searches-for-items-that-do-not-exist-(unhappy-path);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on the springer link home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I search for the item \"bookonspringerthatdoesnotexist\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the no items found page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepDef.navigateToSearch()"
});
formatter.result({
  "duration": 14405784237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bookonspringerthatdoesnotexist",
      "offset": 23
    }
  ],
  "location": "SearchStepDef.I_search_for_the_term(String)"
});
formatter.result({
  "duration": 14635183388,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDef.the_no_items_found_page_is_displayed()"
});
formatter.result({
  "duration": 565956876,
  "status": "passed"
});
formatter.after({
  "duration": 37777,
  "status": "passed"
});
formatter.before({
  "duration": 121935511,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "A user searches for items that do not exist (unhappy path)",
  "description": "",
  "id": ";a-user-searches-for-items-that-do-not-exist-(unhappy-path);;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on the springer link home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I search for the item \"DSFDFGHHHH\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the no items found page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepDef.navigateToSearch()"
});
formatter.result({
  "duration": 13358086506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DSFDFGHHHH",
      "offset": 23
    }
  ],
  "location": "SearchStepDef.I_search_for_the_term(String)"
});
formatter.result({
  "duration": 16355333448,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDef.the_no_items_found_page_is_displayed()"
});
formatter.result({
  "duration": 281522954,
  "status": "passed"
});
formatter.after({
  "duration": 24617,
  "status": "passed"
});
});