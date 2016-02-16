package com.jov.bdd;

import com.jov.bdd.support.Driver;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import java.util.concurrent.TimeUnit;

@RunWith(Cucumber.class)
@CucumberOptions(tags = "@search",strict = true,format = {"html:target/cukes"})
public class RunCukeTestsIT {

    @BeforeClass
    public static void setup(){
        Driver.initialiseDriver();
        Driver.driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        Driver.driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
    }

    @AfterClass
    public static void teardown(){
        Driver.driver.quit();
    }

}
