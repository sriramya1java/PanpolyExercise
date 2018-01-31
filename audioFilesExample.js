let arr = [{
  id: "paj-103",
  audio: "++++[MID]+++++[MID]++++[MID]++[POST]"
}];



function addAudio(item) {
  let length = arr.length;
  console.log(arr);
  for (let i in arr) {
    for (let j in item) {
      for (let k in item[j].targets) {
        let audioArray = arr[i].audio;
        let arrayAudio = item[j].audio;
        if (arr[i].id = item[j].targets[k]) {
          if (audioArray.indexOf('[MID]')) {
            audioArray = '+++++'+arrayAudio+'+++++';
            document.body.innerHTML = audioArray;
            console.log(audioArray);
          }else if (audioArray.indexOf('[POST]')) {
            audioArray = '+++++'+arrayAudio+'+++++';
            document.body.innerHTML = audioArray;
            console.log(audioArray);
          }else if (audioArray.indexOf('[PRE]')) {
            audioArray = '+++++'+arrayAudio+'+++++';
            document.body.innerHTML = audioArray;
            console.log(audioArray);
          }
        }
      }
    }
  }

};

addAudio([{
  audio: "*TacoCat*",
  type: "MID",
  targets: ["paj-103", "dag-892"],
  revenue: 3
}]);//to add it to the middle
