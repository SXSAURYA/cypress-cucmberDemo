Feature: End to End E-commerce Validation

    application regression validation

@regression
Scenario: Ecommerce products Validation
Given When I open Ecommerce Page
When I add Items to Cart
And Validate the total Price
Then select the country submit and verify Thankyou


@smoken
Scenario: Filling the form to shop
Given When I open Ecommerce Page
When I fill the form details
| name  | gender |
| Pooja | Female |

Then I validate the form Behaviour
And Select the shop Page
