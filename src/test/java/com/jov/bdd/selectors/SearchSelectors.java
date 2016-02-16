package com.jov.bdd.selectors;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SearchSelectors {

    // Google Home page selector
    public static final String SPRINGER_HOME_PAGE = "http://link.springer.com/";

    @FindBy(id="query")
    public
    WebElement searchInputBox;

    @FindBy(id="search")
    public
    WebElement submitLink;

    @FindBy(css="#results-list > li:nth-child(1) > div.text > h2 > a")
    public
    WebElement firstSearchResult;
}
