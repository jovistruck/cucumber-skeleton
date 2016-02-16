package com.jov.bdd.support;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


public class Driver {

    public static WebDriver driver;

    /**
     * Fires up a firefox browser which is then used by the pageObjects to trigger browser events.
     */
    public static void initialiseDriver(){
        System.out.println("Inside Initialize Driver");
            driver = new FirefoxDriver();
        }

    }

