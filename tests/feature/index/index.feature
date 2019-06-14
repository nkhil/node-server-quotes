Feature: Index loads

  Scenario Outline: I can load the application
    When I call 'GET' '/'
    Then the application should return the status code, <status>

    Examples:
      | status |
      | 200    |
