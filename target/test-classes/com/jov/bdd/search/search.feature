@search
Feature:
  AS A User
  I WANT TO perform a search using the springer link search
  SO THAT I can investigate the returned search results

  Scenario Outline: A user searches for items that exist (happy path)
    Given I am on the springer link home page
    When I search for the item "<itemName>"
    Then the first result returned within the results is "<itemName>"
    Examples:
      | itemName                     |
      | Algebra and Logic            |
      | Medicinal Chemistry Research |

  Scenario Outline: A user searches for items that do not exist (unhappy path)
    Given I am on the springer link home page
    When I search for the item "<itemName>"
    Then the no items found page is displayed
    Examples:
      | itemName                       |
      | bookonspringerthatdoesnotexist |
      | DSFDFGHHHH                     |