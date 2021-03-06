// sorting algs are not my IP, except for bubble sort
// that one is easy to remember
// the point of the this code is to practice JS not sorting algs.


let ctx;
let canvas;
let vals = new Array(100);
let i = 0;
let j = 0;
let sleepyTime = 11;
let kill = false;
let gap = 3;


// turn all buttons off 
function killButtons()
{
  kill = true;
  document.getElementById("runBtn").disabled = true;
  document.getElementById("resetBtn").disabled = true;
}

// and back on
function allowButtons()
{
  kill = false;
  document.getElementById("runBtn").disabled = false;
  document.getElementById("resetBtn").disabled = false;
}

// reset and generate new values to be sorted by an algorithm and then redraw the graph
function resetGraph()
{
  if(!kill)
  {
    canvas = document.getElementById("algcanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000"
    let width = canvas.width;
    let height = canvas.height;
    ctx.fillRect(0,0,width,height);
    console.log(width);
    ctx.fillStyle = "#ffffff"
    for(let i = 0; i < vals.length; i++)
    {
      let val = Math.random() * height;
      vals[i] = val;
      drawLine(ctx, i * gap, val);
    }
  }
}

// runs on page load to initially set the graph
function setGraph()
{
  canvas = document.getElementById("algcanvas");
  ctx = canvas.getContext("2d");
  ctx.fillStyle = "#000"
  let width = canvas.width;
  let height = canvas.height;
  ctx.fillRect(0,0,width,height);
  console.log(width);
  ctx.fillStyle = "#ffffff"
  for(let i = 0; i < vals.length; i++)
  {
    let val = Math.random() * height;
    vals[i] = val;
    drawLine(ctx, i * gap, val);
  }
}

// draws the updated graph at every iteration of a sorting algorithm
function drawGraph()
{
  canvas = document.getElementById("algcanvas");
  ctx = canvas.getContext("2d");
  ctx.fillStyle = "#000"
  let width = canvas.width;
  let height = canvas.height;
  ctx.fillRect(0,0,width,height);
  ctx.fillStyle = "#ffffff"
  for(let i = 0; i < vals.length; i++)
  {
    drawLine(ctx, i * gap, vals[i]);
  }

}

// canvas, start, height
function drawLine(ctx, x, y)
{

  ctx.fillRect(x,0,gap - 1,y);

  ctx.ilneWidth = 1;

  ctx.strokeRect(x,0,gap,y);
}


// runs an algorithm based on user input
async function runProg()
{

  let choice = document.getElementsByClassName('dropdown')[0].value;

  if(choice === "bubblesort")
  {
    i = j = 0;
    runBubbleSort();
  }
  else if(choice === "insertionsort")
  {
    runInsertionSort(vals);
  }
  else if(choice === "mergesort")
  {
    i = j = 0;
    runMergeSort(vals, 0, vals.length - 1);
  }
  else if(choice === "quicksort")
  {
    i = j = 0;
    runQuickSort(vals, 0, vals.length - 1);
  }
  else if(choice === "heapsort")
  {
    i = j = 0;
    await runHeapSort(vals);
  }
}


async function runBubbleSort()
{
  console.log("lets go bubblesort, best boy");

  killButtons();

  for(let i = 0; i < vals.length; i++)
  {
    for(let k = 0; k < vals.length - i - 1; k++)
    {
      if(vals[k] > vals[k+1])
      {
        let temp = vals[k];
        vals[k] = vals[k+1];
        vals[k+1] = temp;
        await drawGraph();
        await sleep(sleepyTime/2);
      }
    }
  }

  allowButtons();

}

async function runInsertionSort(arr)
{

  killButtons();
  let n = vals.length;

  for(let i = 1; i < n; i++)
  {
    let key = arr[i];
    let k = i - 1;

    while(k >= 0 && arr[k] > key)
    {
      arr[k+1] = arr[k];
      await drawGraph();
      await sleep(sleepyTime);
      k--;
    }
    arr[k+1] = key;
    await drawGraph();
    await sleep(sleepyTime);
  }

  allowButtons();
}

async function runMergeSort(vals, l, r)
{

  killButtons();
  await drawGraph();
  await sleep(sleepyTime);

  if (l < r)
  {


    let m = Math.floor((l + r) / 2);
    await runMergeSort(vals, l, m);
    await runMergeSort(vals, m+1, r);
    await merge(vals, l, m, r);
  }

  if(l === 0 && r === 299)
  {
    allowButtons();
  }
}

async function merge(vals, l, m, r)
{

  let n1 = m - l + 1;
  let n2 = r - m;

  let temp1 = new Array(n1);
  let temp2 = new Array(n2);

  for (let i = 0; i < n1; i++)
  {
    temp1[i] = vals[l + i];
  }

  for (let k = 0; k < n2; k++)
  {
    temp2[k] = vals[m + 1 + k];
  }


  let i = 0;
  let k = 0;

  let n = l;

  while(i < n1 && k < n2)
  {
    if(temp1[i] <= temp2[k])
    {
      vals[n] = temp1[i];
      i++;
      await drawGraph();
      await sleep(sleepyTime);
    }
    else
    {
      vals[n] = temp2[k];
      await drawGraph();
      await sleep(sleepyTime);
      k++;
    }
    n++;
  }

  while(i < n1)
  {
    vals[n] = temp1[i];
    await drawGraph();
    await sleep(sleepyTime);
    i++;
    n++;
  }

  while(k < n2)
  {
    vals[n] = temp2[k];
    await drawGraph();
    await sleep(sleepyTime);
    k++;
    n++;
  }

  await drawGraph();
  await sleep(sleepyTime);

  allowButtons();

}

async function runQuickSort(arr, start, end)
{

  killButtons();
  if(start >= end)
  {
    return;
  }

  await drawGraph();
  await sleep(sleepyTime);

  let index = await partition(arr, start, end);
  await runQuickSort(arr, start, index -1);
  await runQuickSort(arr, index + 1, end);

  await drawGraph();
  await sleep(sleepyTime);


  allowButtons();

}

async function partition(arr, start, end)
{
  let pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++)
  {
    if (arr[i] < pivotValue)
    {
      await swap(arr, i, pivotIndex);
      await drawGraph();
      await sleep(sleepyTime);
      pivotIndex++;
    }
  }
  await swap(arr, pivotIndex, end);


  return pivotIndex;
}



async function runHeapSort(array)
{

  killButtons();
  await buildMaxHeap(array);

  lastElement = array.length - 1;

  while(lastElement > 0)
  {
    await swap(array, 0, lastElement);

    await drawGraph();
    await sleep(sleepyTime);

    await heapify(array, 0, lastElement);

    lastElement -= 1
  }

  allowButtons();
}

async function buildMaxHeap(array) {
  let i;
  i = array.length / 2 - 1;
  i = Math.floor(i);

  while (i >= 0) {
    await heapify(array, i, array.length);
    await drawGraph();
    await sleep(sleepyTime);
    i -= 1;
  }
}

async function heapify(heap, i, max) {
  let index, leftChild, righChild;

  while(i < max) {
    index = i;

    leftChild = 2*i + 1;
    righChild = leftChild + 1;

    if (leftChild < max && heap[leftChild] > heap[index]) {
      index = leftChild;
    }

    if (righChild < max && heap[righChild] > heap[index]) {
      index = righChild;
    }

    if (index == i) {
      return;
    }

    await swap(heap,i, index);
    await drawGraph();
    await sleep(sleepyTime);

    i = index;
  }
}

// pauses the program for some amount of time so the user can actually see what is happening
function sleep(ms)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

function swap(arr, a, b)
{
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
