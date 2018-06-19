// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function arrayContains(checkArray, value) {
  for (index1 = 0 ; index1 < checkArray.length; ++index1) {
    if (checkArray[index1] === value) {
      return true;
    }
  }
  return false;
}

function executeruliwebMypiCollector() {
  // alert(jQuery('.readcomment'));
  var array = [];
  var reply = jQuery('.mypiReply').first().find("div").each(function(index) {
    // console.log(jQuery( this ).find('p').find('b'));
    if (index % 2 === 0) {
      array.push(jQuery( this ).find('p').find('b'));
    } else {
      array.push(jQuery( this ));
    }
    
  });

  console.log(array.length);

  var tempIds = [];
  for (i = 0; i < array.length; i+=2) {
    var idValue = array[i][0].innerHTML;
    var comment = array[i+1][0].innerHTML;
    if (comment.match('신청합니다.')) {
      if (arrayContains(tempIds, idValue) === false) {
        tempIds.push(idValue);
      }
    }
  }
  // var tempAnswer = tempIds.join('&nbsp');
  // var temp1 = jQuery("<input>");
  // jQuery("body").append(temp1);
  // temp1.val(tempAnswer).select();
  // document.execCommand("copy");
  // temp1.remove();
  let csvContent = "data:text/csv;charset=utf-8,";
  for (index2 = 0 ; index2 < tempIds.length; ++index2) {
    csvContent += tempIds[index2] + "\r\n";
  }
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "my_data.csv");
  link.innerHTML= "Click Here to download";
  document.body.appendChild(link); // Required for FF
  
  link.click();

}
