// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function genericOnClick(info, tab) {
  chrome.tabs.getSelected(null,function(tab) {
    // alert(tab.url);
    if (tab.url.match()) {
      chrome.tabs.executeScript(null,
        {
          code:"executeruliwebMypiCollector()"});
    }
  });
  
}


// Create a parent item and two children.
var parent = chrome.contextMenus.create({"title": "Ruliweb Mypi Reply Collector", "onclick": genericOnClick});

