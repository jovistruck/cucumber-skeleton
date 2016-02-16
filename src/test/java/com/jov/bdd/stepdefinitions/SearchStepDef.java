package com.jov.bdd.stepdefinitions;

import com.jov.bdd.pageobjects.SearchPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


public class SearchStepDef {

    SearchPage searchPage=new SearchPage();

    @Given("^I am on the springer link home page$")
    public void navigateToSearch() throws Throwable {
        searchPage.navigateToSearchPage();
    }

    @When("^I search for the item \"([^\"]*)\"$")
    public void I_search_for_the_term(String searchTerm) throws Throwable {
        searchPage.searchInput(searchTerm);
        searchPage.submitSearch();

    }

    @Then("^the first result returned within the results is \"([^\"]*)\"$")
    public void the_first_result_returned_within_the_results_is(String textToFind) throws Throwable {
        Assert.assertTrue("Text not found!", searchPage.firstResultHasText(textToFind));
    }

    @Then("^the no items found page is displayed$")
    public void the_no_items_found_page_is_displayed() throws Throwable {
        Assert.assertTrue("Text not found!", searchPage.searchResultsContainText("we couldn’t find what you are looking for"));
    }
}
