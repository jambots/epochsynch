/*
<!--
Copyright 2019 Terrance Clifford Schubring

Permission is hereby granted, free of charge,
to any person obtaining a copy of this software
and associated documentation files (the "Software"),
 to deal in the Software without restriction,
 including without limitation the rights to use,
 copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software,
 and to permit persons to whom the Software is
 furnished to do so, subject to the following
 conditions:

The above copyright notice and this permission
notice shall be included in all copies or
substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT
WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR
ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
/*
epochSynch takes a tempo and returns
  epochBeats - the number of beats since 01/01/1970 00:00:00 GMT
  epochBars and atBeat - the bar number and count
  nextBeat - ms until the next beat is due
  to work in eights or sixteenths multiply the bpm by 2 or 4
*/
function epochSynch(beatsPerMinute){
  var result={}
  var msPerBeat=Math.floor(60000/beatsPerMinute);
  var nowMs=new Date().getTime();
  result.epochBeats=Math.floor(nowMs/msPerBeat);
  result.epochBars=Math.floor(result.epochBeats/4)+1;
  result.atBeat=result.epochBeats%4+1;
  var deltaMs=nowMs-result.epochBeats*msPerBeat;
  result.nextBeat=msPerBeat-deltaMs;
  return result;
}
