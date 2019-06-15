Feature: Quotes page loads

  Scenario Outline: I can load the application
    When I call 'GET' '/quotes'
    Then the application should return the status code, <status>

    Examples:
      | status |
      | 200    |
