package com.jov.bdd.pageobjects;

import com.jov.bdd.selectors.SearchSelectors;
import com.jov.bdd.support.Driver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SearchPage extends Driver {

    private final WebDriver driver;
    private final SearchSelectors searchSelectors;

    public SearchPage(){
        this.driver=Driver.driver;
        searchSelectors = PageFactory.initElements(this.driver, SearchSelectors.class);
    }

    public void navigateToSearchPage() {
        this.driver.navigate().to(SearchSelectors.SPRINGER_HOME_PAGE);
    }

    public void searchInput(String inputText) throws InterruptedException {
        searchSelectors.searchInputBox.sendKeys(inputText);
    }

    public void submitSearch() {
        searchSelectors.searchInputBox.submit();
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.elementToBeClickable(searchSelectors.submitLink));
    }

    public boolean searchResultsContainText(String textToFind) {
        return driver.getPageSource().contains(textToFind); //needs to be better, probably take links for all and search text within links
    }

    public boolean firstResultHasText(String textToFind) {
        return driver.getPageSource().contains(searchSelectors.firstSearchResult.getText()); //needs to be better, probably take links for all and search text within links
    }
}