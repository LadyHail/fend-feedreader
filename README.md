# Project Overview

In this project there are given a web-based application that reads RSS feeds.
To finish project I needed to write tests using Jasmine framework.

# How to run?
* Clone repo: https://github.com/LadyHail/fend-feedreader
* Run index.html from "dist" folder.

# What was done?

1. Test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
2. Test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. New test suite named `"The menu"`.
4. Test that ensures the menu element is hidden by default.
5. Test that ensures the menu changes visibility when the menu icon is clicked. This test has two expectations: does the menu display when clicked and does it hide when clicked again.
6. Test suite named `"Initial Entries"`.
7. Test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container. Async test.
8. Test suite named `"New Feed Selection"`.
9. Test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes. Async test.
10. No test is dependent on the results of another.
11. Callbacks are used to ensure that feeds are loaded before they are tested.
12. All of tests pass.
