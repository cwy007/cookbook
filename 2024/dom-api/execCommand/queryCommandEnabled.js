function doCopy(){
  // 浏览器是否支持 copy 命令（选中内容复制到剪贴板）
  if (document.queryCommandSupported('copy')) {
    copyText('你好');
  }else{
    console.log('浏览器不支持');
  }
}

function copyText(text) {
  var input = document.createElement('textarea');
  document.body.appendChild(input);
  input.value = text;
  input.focus();
  input.select();

  // 当前是否有选中文字
  if (document.queryCommandEnabled('copy')) {
    var success = document.execCommand('copy');
    input.remove();
    console.log('Copy Ok');
  } else {
    console.log('queryCommandEnabled is false');
  }
}
// 上面代码中，先判断浏览器是否支持copy命令（允许可编辑区域的选中内容，复制到剪贴板），如果支持，就新建一个临时文本框，里面写入内容“你好”，并将其选中。然后，判断是否选中成功，如果成功，就将“你好”复制到剪贴板，再删除那个临时文本框。
