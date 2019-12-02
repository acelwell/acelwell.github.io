function addClosing (e)
{

  let ta = document.getElementsByClassName('te');
  if(e.key === "{")
  {
    // console.log(ta);
    ta.editor.value += "}";

    ta.editor.selectionEnd = ta.editor.selectionEnd - 1;
  }
  else if(e.key === "(")
  {

    ta.editor.value += ")";

    ta.editor.selectionEnd = ta.editor.selectionEnd - 1;
  }
  else if (e.key === '"')
  {
    ta.editor.value += "\"";

    ta.editor.selectionEnd = ta.editor.selectionEnd - 1;
  }
  else if (e.key === "'")
  {
    ta.editor.value += "\'";

    ta.editor.selectionEnd = ta.editor.selectionEnd - 1;
  }
  else if (e.key === "<")
  {
    ta.editor.value += ">";

    ta.editor.selectionEnd = ta.editor.selectionEnd - 1;
  }
  else if (e.key === "[")
  {
    ta.editor.value += "]";

    ta.editor.selectionEnd = ta.editor.selectionEnd - 1;
  }

}
