package com.jov.bdd;

import cucumber.api.cli.Main;

public class CucumberRunner {
    public static void main(String[] args) throws Throwable {
        RunCukeTestsIT.setup();
        Hooks hooks = new com.jov.bdd.Hooks();
        hooks.beforeScenario();
        Runtime.getRuntime().addShutdownHook(new Thread() {
            public void run() {
                RunCukeTestsIT.teardown();
            }
        });
        Main.main(args);
    }
}
